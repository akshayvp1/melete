"use strict";
// import { Request, Response, NextFunction } from "express";
// import { verifyAccessToken, ITokenPayload } from "../utils/jwt";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserStatus = exports.adminAuthenticate = void 0;
const jwt_1 = require("../utils/jwt");
// Middleware to authenticate admin users
const adminAuthenticate = async (req, res, next) => {
    console.log("authentication");
    const authHeader = req.headers["authorization"];
    console.log("Auth Header:", authHeader);
    const token = authHeader?.split(" ")[1];
    console.log("Token:", token);
    if (!token) {
        res.status(401).json({ message: "No token provided" });
        return;
    }
    try {
        const decoded = (await (0, jwt_1.verifyAccessToken)(token));
        console.log("Decoded role:", decoded.role);
        if (decoded.role !== "admin") {
            res.status(403).json({ message: "Access denied: Admins only" });
            return;
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
exports.adminAuthenticate = adminAuthenticate;
// Middleware to check user active status
const checkUserStatus = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user || !user.id) {
            res.status(401).json({ success: false, message: "Unauthorized: No user information provided" });
            return;
        }
        if (user.role !== "admin") {
            res.status(403).json({ success: false, message: "Access forbidden: Admins only" });
            return;
        }
        // Placeholder: Implement adminAuthService.checkActiveStatus
        // const isActive = await adminAuthService.checkActiveStatus(user.id);
        const isActive = true; // Replace with actual service call
        if (!isActive) {
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            });
            res.status(403).json({ success: false, message: "User is blocked" });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Error in checkUserStatus:", error);
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};
exports.checkUserStatus = checkUserStatus;
//# sourceMappingURL=adminAuth.js.map