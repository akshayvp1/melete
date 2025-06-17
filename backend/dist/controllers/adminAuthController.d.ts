import { NextFunction, Request, Response } from "express";
import { IAdminAuthController } from "./interface/IAdminAuthController";
import AdminAuthService from "../services/AdminAuthService";
declare class AdminAuthController implements IAdminAuthController {
    private adminAuthService;
    constructor(adminAuthService: AdminAuthService);
    signIn: (req: Request, res: Response) => Promise<void>;
    addCounsellor: (req: Request, res: Response) => Promise<void>;
    getCounsellors: (_req: Request, res: Response) => Promise<void>;
    blockCounsellors: (req: Request, res: Response) => Promise<void>;
    unBlockCounsellors: (req: Request, res: Response) => Promise<void>;
    updateCounsellor: (req: Request, res: Response) => Promise<void>;
    refreshToken: (req: Request, res: Response) => Promise<void>;
    checkStatus(req: Request, res: Response): Promise<void>;
    adminLogout: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default AdminAuthController;
