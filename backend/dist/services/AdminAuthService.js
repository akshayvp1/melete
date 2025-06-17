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
const jwt_1 = require("../utils/jwt"); // Use verifyRefreshToken from JWT utils
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const AdminAuthRepository_1 = __importDefault(require("../repositories/AdminAuthRepository"));
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
// Ensure secrets are defined
if (!JWT_ACCESS_SECRET || !JWT_REFRESH_SECRET) {
    throw new Error("JWT secrets are not defined in .env file");
}
let AdminAuthService = class AdminAuthService {
    adminAuthRepository;
    constructor(adminAuthRepository) {
        this.adminAuthRepository = adminAuthRepository;
    }
    async signIn(email, password) {
        try {
            const user = await this.adminAuthRepository.findByEmail(email);
            if (!user) {
                return { isMatch: false, message: "User not found." };
            }
            const isMatch = await bcryptjs_1.default.compare(password, user.password);
            if (!isMatch) {
                return { isMatch: false, message: "Incorrect password." };
            }
            const payload = {
                id: user._id.toString(),
                email: user.email,
                role: user.role,
            };
            const { accessToken, refreshToken } = (0, jwt_1.generateTokens)(payload);
            // Exclude password from user object
            const { password: _, ...safeUser } = user;
            return {
                isMatch: true,
                message: "Login successful.",
                accessToken,
                refreshToken,
                user: safeUser,
            };
        }
        catch (error) {
            console.error("Error during signIn:", error);
            return { isMatch: false, message: "Internal server error." };
        }
    }
    // New method for refreshing access token
    async refreshAccessToken(refreshToken) {
        try {
            // Verify refresh token using the utility function
            const decoded = await (0, jwt_1.verifyRefreshToken)(refreshToken);
            // Verify user exists in the database
            const user = await this.adminAuthRepository.findByEmail(decoded.email);
            console.log("decoded user", user);
            if (!user) {
                return { success: false, message: "User not found." };
            }
            // Verify user ID and role match
            if (user._id.toString() !== decoded.id || user.role !== decoded.role) {
                return { success: false, message: "Invalid token payload." };
            }
            // Generate new tokens
            const payload = {
                id: user._id.toString(),
                email: user.email,
                role: user.role,
            };
            const { accessToken, refreshToken: newRefreshToken } = (0, jwt_1.generateTokens)(payload);
            // Exclude password from user object
            const { password: _, ...safeUser } = user;
            return {
                success: true,
                message: "Token refreshed successfully.",
                accessToken,
                refreshToken: newRefreshToken,
                user: safeUser,
            };
        }
        catch (error) {
            console.error("Error in refreshAccessToken:", error);
            return {
                success: false,
                message: error.message || "Failed to refresh access token.",
            };
        }
    }
    async addCounsellor(currentId, counsellorData) {
        try {
            return await this.adminAuthRepository.addCounsellor(currentId, counsellorData);
        }
        catch (error) {
            console.error("Error in addCounsellor service:", error);
            throw new Error(error.message || "Failed to add counsellor");
        }
    }
    async getCounsellors() {
        try {
            const counsellors = await this.adminAuthRepository.getCounsellors();
            return counsellors || [];
        }
        catch (error) {
            console.error("Error in getCounsellors service:", error);
            throw new Error(error.message || "Failed to retrieve counsellors.");
        }
    }
    async blockCounsellors(userId) {
        try {
            const user = await this.adminAuthRepository.findUserById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            const updatedCounsellor = await this.adminAuthRepository.blockCounsellors(userId);
            return updatedCounsellor;
        }
        catch (error) {
            console.error("Error in blockCounsellors:", error);
            throw new Error("Failed to block counsellor");
        }
    }
    async unBlockCounsellors(userId) {
        try {
            const user = await this.adminAuthRepository.findUserById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            const updatedCounsellor = await this.adminAuthRepository.unBlockCounsellors(userId);
            return updatedCounsellor;
        }
        catch (error) {
            console.error("Error in unBlockCounsellors:", error);
            throw new Error("Failed to unblock counsellor");
        }
    }
    async updateCounsellor(id, counsellorData) {
        try {
            const counsellor = await this.adminAuthRepository.findUserById(id);
            if (!counsellor) {
                throw new Error("Counsellor not found");
            }
            return await this.adminAuthRepository.updateCounsellor(id, counsellorData);
        }
        catch (error) {
            console.error("Error in updateCounsellor service:", error);
            throw new Error(error.message || "Failed to update counsellor");
        }
    }
};
AdminAuthService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AdminAuthRepository")),
    __metadata("design:paramtypes", [AdminAuthRepository_1.default])
], AdminAuthService);
exports.default = AdminAuthService;
//# sourceMappingURL=AdminAuthService.js.map