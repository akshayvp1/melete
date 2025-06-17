import { IAdminAuthRepository } from "./interface/IAdminAuthRepository";
import { IAdmin } from "../interfaces/IAdmin";
import { ICounsellor } from "../interfaces/ICounsellor";
import { Model } from "mongoose";
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
declare class AdminAuthRepository implements IAdminAuthRepository {
    private readonly adminModel;
    private readonly counsellorModel;
    constructor(adminModel: Model<IAdmin>, counsellorModel: Model<ICounsellor>);
    findByEmail(email: string): Promise<IAdmin | null>;
    findAdminById(id: string): Promise<IAdmin | null>;
    addCounsellor(currentId: string, counsellorData: ICounsellorData): Promise<ICounsellor>;
    getCounsellors(): Promise<ICounsellor[]>;
    findUserById(id: string): Promise<ICounsellor | null>;
    blockCounsellors(userId: string): Promise<ICounsellor>;
    unBlockCounsellors(userId: string): Promise<ICounsellor>;
    updateCounsellor(id: string, counsellorData: ICounsellorData & {
        rating?: number;
        sessions?: number;
        isBlocked?: boolean;
    }): Promise<ICounsellor>;
}
export default AdminAuthRepository;
