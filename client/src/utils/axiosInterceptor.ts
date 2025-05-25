import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosError } from "axios";
import { store } from "../redux/app/store";
import { setToken } from "../redux/features/authSlice";

const API_URLS = {
  user: import.meta.env.VITE_API_USER,
  admin: import.meta.env.VITE_API_ADMIN,
  counsellor: import.meta.env.VITE_API_COUNSELLOR,
} as const;

export type UserRole = keyof typeof API_URLS;

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const refreshAuthToken = async (role: UserRole): Promise<string | null> => {
  try {
    const response = await axios.post(
      `${API_URLS[role]}/auth/refresh-token`,
      {},
      { withCredentials: true }
    );

    const newToken = response.data?.accessToken;
    if (newToken) {
      store.dispatch(setToken({ token: newToken }));
      refreshSubscribers.forEach((cb) => cb(newToken));
      refreshSubscribers = [];
      return newToken;
    }
  } catch {
    store.dispatch(setToken({ token: "" }));
    window.location.href = `/${role}/signin`;
  } finally {
    isRefreshing = false;
  }
  return null;
};

const createAxiosInstance = (role: UserRole): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_URLS[role],
    timeout: 10000,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

      if (!originalRequest || error.response?.status !== 401 || originalRequest._retry) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(instance(originalRequest));
          });
        });
      }

      isRefreshing = true;
      originalRequest._retry = true;

      const newToken = await refreshAuthToken(role);
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return instance(originalRequest);
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const api = {
  admin: createAxiosInstance("admin"),
  counsellor: createAxiosInstance("counsellor"),
  user: createAxiosInstance("user"),
};
