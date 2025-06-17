"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        default: "admin"
    },
    isActive: { type: Boolean, default: true },
});
const AdminModel = (0, mongoose_1.model)("Admin", AdminSchema);
exports.default = AdminModel;
//# sourceMappingURL=adminModels.js.map