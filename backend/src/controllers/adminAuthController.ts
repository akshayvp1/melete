import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IAdminAuthController } from "./interface/IAdminAuthController";
import AdminAuthService from "../services/AdminAuthService";

@injectable()
class AdminAuthController implements IAdminAuthController {
    constructor(
        @inject("AdminAuthService") private adminAuthService: AdminAuthService // Fix the token here
    ) {}

    signIn = async (req: Request, res: Response): Promise<void> => {
        try {
          console.log("helloooo");
          
            const { email, password } = req.body;

            const signInResult = await this.adminAuthService.signIn(email, password);

            if (!signInResult.isMatch) {
                res.status(400).json({
                    success: false,
                    message: signInResult.message || "Incorrect email or password.",
                });
                return;
            }

            const { accessToken, refreshToken, user } = signInResult;

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.status(200).json({
                success: true,
                accessToken,
                user,
                message: "Login successful.",
            });
        } catch (error) {
            console.error("Error in signIn controller:", error);
            res.status(500).json({ success: false, message: "Internal server error." });
        }
    };
}

export default AdminAuthController;