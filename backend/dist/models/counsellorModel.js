"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the schema
const counsellorSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    qualification: { type: String, required: true, trim: true },
    expertise: { type: [String], default: [] },
    languages: { type: [String], default: [] },
    counsellingTypes: { type: [String], default: [] },
    experience: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    imageUrl: { type: String },
    bio: { type: String, trim: true },
    email: { type: String, required: false, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    specialization: { type: String, required: false, trim: true },
    isVerified: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});
// Export the model
const Counsellor = (0, mongoose_1.model)('Counsellor', counsellorSchema);
exports.default = Counsellor;
//# sourceMappingURL=counsellorModel.js.map