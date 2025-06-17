import { Request, Response, NextFunction } from "express";
import { ITokenPayload } from "../utils/jwt";
declare module "express-serve-static-core" {
    interface Request {
        user?: ITokenPayload;
    }
}
export declare const adminAuthenticate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const checkUserStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
