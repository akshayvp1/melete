"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const userModel_1 = require("../models/userModel");
const adminModels_1 = __importDefault(require("../models/adminModels"));
const AdminAuthRepository_1 = __importDefault(require("../repositories/AdminAuthRepository"));
const AdminAuthService_1 = __importDefault(require("../services/AdminAuthService"));
const adminAuthController_1 = __importDefault(require("../controllers/adminAuthController"));
const counsellorModel_1 = __importDefault(require("../models/counsellorModel"));
tsyringe_1.container.register("UserModel", { useValue: userModel_1.User });
tsyringe_1.container.register("CounsellorModel", { useValue: counsellorModel_1.default });
tsyringe_1.container.register("AdminModel", { useValue: adminModels_1.default });
tsyringe_1.container.register("AdminAuthRepository", AdminAuthRepository_1.default);
tsyringe_1.container.register("AdminAuthService", AdminAuthService_1.default);
tsyringe_1.container.register("AdminAuthController", adminAuthController_1.default);
exports.default = tsyringe_1.container;
//# sourceMappingURL=container.js.map