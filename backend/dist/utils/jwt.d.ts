import { Request, Response, NextFunction } from 'express';
export interface ITokenPayload {
    id: string;
    email: string;
    role: 'user' | 'counsellor' | 'admin';
}
export declare const generateTokens: (payload: ITokenPayload) => {
    accessToken: string;
    refreshToken: string;
};
export declare const verifyAccessToken: (token: string) => Promise<ITokenPayload>;
export declare const verifyRefreshToken: (token: string) => Promise<ITokenPayload>;
export interface AuthenticatedRequest extends Request {
    user?: ITokenPayload;
}
export declare const authenticateUser: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
