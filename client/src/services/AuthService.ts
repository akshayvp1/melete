// src/services/AuthService.ts
import { api } from "../utils/axiosInterceptor";
import store from "../redux/app/store";
import { setTempUser } from "../redux/features/tempSlice";
import { IUser } from "../types/auth/auth.types";

interface IAuthServiceUser {
  login(email: string, password: string): Promise<IUser>;

}

class AuthService implements IAuthServiceUser {
  async login(email: string, password: string): Promise<IUser> {
    try {
      const response = await api['admin'].post('/verify-login', { email, password });
      const data = response.data;
      console.log(data,"uuuuuuuuuuuuu")
      // Store temporary user data in Redux
      store.dispatch(setTempUser(data));
      return data; // Return data for component to use
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Failed to send OTP');
    }
  }

 
}

export default new AuthService();