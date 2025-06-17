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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const mongoose_1 = require("mongoose");
let AdminAuthRepository = class AdminAuthRepository {
    adminModel;
    counsellorModel;
    constructor(adminModel, counsellorModel) {
        this.adminModel = adminModel;
        this.counsellorModel = counsellorModel;
    }
    async findByEmail(email) {
        try {
            return await this.adminModel.findOne({ email });
        }
        catch (error) {
            console.error("Error finding admin by email:", error);
            return null;
        }
    }
    async findAdminById(id) {
        try {
            return await this.adminModel.findById(id).select("-password").lean();
        }
        catch (error) {
            console.error("Error finding admin by ID:", error);
            return null;
        }
    }
    async addCounsellor(currentId, counsellorData) {
        try {
            console.log("❤️❤️❤️❤️❤️❤️");
            // Verify admin exists
            const admin = await this.counsellorModel.findById(currentId);
            if (admin) {
                throw new Error("Admin not found");
            }
            // Create new counsellor document
            const counsellor = new this.counsellorModel({
                ...counsellorData,
                createdBy: currentId,
                createdAt: new Date(),
            });
            // Save counsellor to database
            const savedCounsellor = await counsellor.save();
            return savedCounsellor.toObject();
        }
        catch (error) {
            console.error("Error adding counsellor:", error);
            throw new Error(error instanceof Error ? error.message : "Failed to add counsellor");
        }
    }
    async getCounsellors() {
        try {
            return await this.counsellorModel.find({}).exec();
        }
        catch (error) {
            console.error("Error fetching users:", error);
            throw new Error("Failed to fetch users");
        }
    }
    async findUserById(id) {
        try {
            return await this.counsellorModel.findById(id).select("-password").lean();
        }
        catch (error) {
            throw new Error("Error finding user by ID: " + error);
        }
    }
    async blockCounsellors(userId) {
        try {
            console.log("yooooooo");
            const user = await this.counsellorModel
                .findByIdAndUpdate(userId, { isBlocked: true }, { new: true })
                .exec();
            if (!user) {
                throw new Error("User not found");
            }
            return user.toObject();
        }
        catch (error) {
            console.error("Repository Error - blockUser:", error);
            throw new Error(`Failed to block user`);
        }
    }
    async unBlockCounsellors(userId) {
        try {
            console.log("looooooooo");
            const user = await this.counsellorModel
                .findByIdAndUpdate(userId, { isBlocked: false }, { new: true })
                .exec();
            console.log(user, "repository user ");
            if (!user) {
                throw new Error("User not found");
            }
            return user.toObject();
        }
        catch (error) {
            console.error("Repository Error - unBlockUser:", error);
            throw new Error(`Failed to unblock user`);
        }
    }
    // In AdminAuthRepository.ts
    async updateCounsellor(id, counsellorData) {
        try {
            const updatedCounsellor = await this.counsellorModel
                .findByIdAndUpdate(id, { $set: counsellorData }, { new: true, runValidators: true })
                .exec();
            if (!updatedCounsellor) {
                throw new Error("Counsellor not found");
            }
            return updatedCounsellor.toObject();
        }
        catch (error) {
            console.error("Repository Error - updateCounsellor:", error);
            throw new Error(error instanceof Error ? error.message : "Failed to update counsellor");
        }
    }
};
AdminAuthRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AdminModel")),
    __param(1, (0, tsyringe_1.inject)("CounsellorModel")),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], AdminAuthRepository);
exports.default = AdminAuthRepository;
//# sourceMappingURL=AdminAuthRepository.js.map