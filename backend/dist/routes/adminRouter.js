"use strict";
// import express from 'express';
// import { container } from 'tsyringe';
// import AdminAuthController from '../controllers/adminAuthController';
// import { adminAuthenticate, checkUserStatus } from '../middlewares/adminAuth'; // Adjust path as needed
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const admin = express.Router();
// const adminAuthController = container.resolve(AdminAuthController);
// admin.get('/check-status', adminAuthenticate, checkUserStatus, adminAuthController.checkStatus); // Added controller method
// admin.post('/verify-login', adminAuthController.signIn);
// admin.post('/add-counsellor', adminAuthenticate, adminAuthController.addCounsellor);
// admin.get('/get-counsellors', adminAuthenticate, adminAuthController.getCounsellors);
// admin.patch('/block-counsellor/:userId', adminAuthenticate, adminAuthController.blockCounsellors);
// admin.patch('/unblock-counsellor/:userId', adminAuthenticate, adminAuthController.unBlockCounsellors);
// admin.put('/update-counsellor/:id', adminAuthenticate, adminAuthController.updateCounsellor);
// admin.post('/refresh-token', adminAuthController.refreshToken);
// export default admin;
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const adminAuthController_1 = __importDefault(require("../controllers/adminAuthController"));
const adminAuth_1 = require("../middlewares/adminAuth");
const admin = express_1.default.Router();
const adminAuthController = tsyringe_1.container.resolve(adminAuthController_1.default);
admin.get("/check-status", adminAuth_1.adminAuthenticate, adminAuth_1.checkUserStatus, adminAuthController.checkStatus);
admin.post("/verify-login", adminAuthController.signIn);
admin.post("/add-counsellor", adminAuthController.addCounsellor);
admin.get("/get-counsellors", adminAuthController.getCounsellors);
admin.patch("/block-counsellor/:userId", adminAuth_1.adminAuthenticate, adminAuthController.blockCounsellors);
admin.patch("/unblock-counsellor/:userId", adminAuth_1.adminAuthenticate, adminAuthController.unBlockCounsellors);
admin.put("/update-counsellor/:id", adminAuth_1.adminAuthenticate, adminAuthController.updateCounsellor);
admin.post("/refresh-token", adminAuthController.refreshToken);
admin.post('/admin-logout', adminAuth_1.adminAuthenticate, adminAuthController.adminLogout);
exports.default = admin;
//# sourceMappingURL=adminRouter.js.map