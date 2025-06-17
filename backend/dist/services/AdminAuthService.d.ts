import { IAdmin } from "../interfaces/IAdmin";
import AdminAuthRepository from "../repositories/AdminAuthRepository";
import { IAdminAuthService } from "./interface/IAdminAuthService";
import { ICounsellor } from "../interfaces/ICounsellor";
interface SignInResult {
    isMatch: boolean;
    message: string;
    accessToken?: string;
    refreshToken?: string;
    user?: Omit<IAdmin, "password">;
}
interface RefreshTokenResult {
    success: boolean;
    message: string;
    accessToken?: string;
    refreshToken?: string;
    user?: Omit<IAdmin, "password">;
}
interface ICounsellorData {
    name: string;
    qualification: string;
    expertise: string[];
    languages: string[];
    counsellingTypes: string[];
    experience: string;
    location: string;
    imageUrl?: string;
    bio: string;
    email: string;
    phone: string;
    specialization: string;
}
declare class AdminAuthService implements IAdminAuthService {
    private adminAuthRepository;
    constructor(adminAuthRepository: AdminAuthRepository);
    signIn(email: string, password: string): Promise<SignInResult>;
    refreshAccessToken(refreshToken: string): Promise<RefreshTokenResult>;
    addCounsellor(currentId: string, counsellorData: ICounsellorData): Promise<ICounsellor>;
    getCounsellors(): Promise<ICounsellor[]>;
    blockCounsellors(userId: string): Promise<ICounsellor>;
    unBlockCounsellors(userId: string): Promise<ICounsellor>;
    updateCounsellor(id: string, counsellorData: ICounsellorData & {
        rating?: number;
        sessions?: number;
        isBlocked?: boolean;
    }): Promise<ICounsellor>;
}
export default AdminAuthService;
