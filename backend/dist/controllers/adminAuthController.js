"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const AdminAuthService_1 = __importDefault(require("../services/AdminAuthService"));
let AdminAuthController = class AdminAuthController {
    adminAuthService;
    constructor(adminAuthService) {
        this.adminAuthService = adminAuthService;
    }
    signIn = async (req, res) => {
        try {
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
        }
        catch (error) {
            console.error("Error in signIn controller:", error);
            res.status(500).json({ success: false, message: "Internal server error." });
        }
    };
    addCounsellor = async (req, res) => {
        try {
            console.log("daaaa");
            const currentId = req.user?.id;
            if (!currentId) {
                res.status(401).json({ success: false, message: "Unauthorized" });
                return;
            }
            const counsellorData = req.body;
            // Validate required fields
            if (!counsellorData.name ||
                // !counsellorData.email ||
                !counsellorData.location ||
                !counsellorData.qualification ||
                !counsellorData.experience) {
                res.status(400).json({ success: false, message: "Missing required fields" });
                return;
            }
            const counsellor = await this.adminAuthService.addCounsellor(currentId, counsellorData);
            res.status(201).json({
                success: true,
                data: counsellor,
                message: "Counsellor added successfully",
            });
        }
        catch (error) {
            console.error("Error in addCounsellor controller:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Failed to add counsellor",
            });
        }
    };
    getCounsellors = async (_req, res) => {
        try {
            const counsellors = await this.adminAuthService.getCounsellors();
            res.status(200).json(counsellors);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
    blockCounsellors = async (req, res) => {
        try {
            const { userId } = req.params;
            console.log(userId, "userid");
            if (!userId) {
                res.status(400).json({ message: "User ID is required" });
                return;
            }
            const updatedCounsellor = await this.adminAuthService.blockCounsellors(userId);
            res.status(200).json({
                success: true,
                data: updatedCounsellor,
                message: "Counsellor blocked successfully",
            });
        }
        catch (error) {
            console.error("Controller Error - blockUser:", error);
            res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
        }
    };
    unBlockCounsellors = async (req, res) => {
        try {
            const { userId } = req.params;
            console.log(userId, "oooo");
            if (!userId) {
                res.status(400).json({ message: "User ID is required" });
                return;
            }
            const updatedCounsellor = await this.adminAuthService.unBlockCounsellors(userId);
            res.status(200).json({
                success: true,
                data: updatedCounsellor,
                message: "Counsellor unblocked successfully",
            });
        }
        catch (error) {
            console.error("Controller Error - unblockUser:", error);
            res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
        }
    };
    updateCounsellor = async (req, res) => {
        try {
            const currentId = req.user?.id;
            if (!currentId) {
                res.status(401).json({ success: false, message: "Unauthorized" });
                return;
            }
            const { id } = req.params;
            const counsellorData = req.body;
            // Validate required fields
            if (!counsellorData.name ||
                // !counsellorData.email ||
                !counsellorData.location ||
                !counsellorData.qualification ||
                !counsellorData.experience) {
                res.status(400).json({ success: false, message: "Missing required fields" });
                return;
            }
            const updatedCounsellor = await this.adminAuthService.updateCounsellor(id, counsellorData);
            res.status(200).json({
                success: true,
                data: updatedCounsellor,
                message: "Counsellor updated successfully",
            });
        }
        catch (error) {
            console.error("Error in updateCounsellor controller:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Failed to update counsellor",
            });
        }
    };
    refreshToken = async (req, res) => {
        try {
            const refreshToken = req.cookies?.refreshToken;
            console.log("Refresh token from cookie:", refreshToken);
            if (!refreshToken) {
                res.status(401).json({ success: false, message: "Refresh token is required" });
                return;
            }
            // Use AdminAuthService's refreshAccessToken method
            const result = await this.adminAuthService.refreshAccessToken(refreshToken);
            if (!result.success) {
                res.status(401).json({ success: false, message: result.message });
                return;
            }
            // Set new refresh token in cookie
            res.cookie("refreshToken", result.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            res.status(200).json({
                success: true,
                accessToken: result.accessToken,
                user: result.user,
                message: result.message,
            });
        }
        catch (error) {
            console.error("Error refreshing token:", error);
            res.status(500).json({ success: false, message: error.message || "Internal server error" });
        }
    };
    async checkStatus(req, res) {
        try {
            const user = req.user;
            res.status(200).json({ success: true, message: "User status verified", user });
        }
        catch (error) {
            console.error("Error in checkStatus:", error);
            res.status(500).json({ success: false, message: error.message || "Internal server error" });
        }
    }
    adminLogout = async (_req, res, next) => {
        try {
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
            res.status(200).json({
                message: "User signed out successfully",
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    };
};
AdminAuthController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AdminAuthService")),
    __metadata("design:paramtypes", [AdminAuthService_1.default])
], AdminAuthController);
exports.default = AdminAuthController;
//# sourceMappingURL=adminAuthController.js.map