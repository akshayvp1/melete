"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const counsellorRouter_1 = __importDefault(require("./counsellorRouter"));
const adminRouter_1 = __importDefault(require("./adminRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const router = express_1.default.Router();
router.use('/user', userRouter_1.default);
router.use('/admin', adminRouter_1.default);
router.use('/counsellor', counsellorRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map