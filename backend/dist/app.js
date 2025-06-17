"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
require("./config/container");
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4040;
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("MongoDB URI is not set in environment variables.");
    process.exit(1);
}
// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));
// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection lost:", err);
// });
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.log("✅ MongoDB Connected");
    console.log("🔍 Connected to:", MONGO_URI); // Add this
})
    .catch((err) => console.error("MongoDB Connection Error:", err));
app.use((0, cors_1.default)({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', router_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map