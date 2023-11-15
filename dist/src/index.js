"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("../config/db"));
const adminAuth_1 = __importDefault(require("../router/admin/adminAuth"));
const staffAuthRoutes_1 = __importDefault(require("../router/staff/staffAuthRoutes"));
const adminRoutes_1 = __importDefault(require("../router/admin/adminRoutes"));
const staffRoutes_1 = __importDefault(require("../router/staff/staffRoutes"));
const PORT = process.env.PORT || 2023;
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//default get
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "api is available for consumption testing ",
    });
});
//routes
//admin authentication routes
app.use("/admin", adminAuth_1.default);
//staff authentication routes
app.use("/staff", staffAuthRoutes_1.default);
//admin dashboard routes
app.use("/pay", adminRoutes_1.default);
//staff dashboard routes
app.use("/plans", staffRoutes_1.default);
app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
});
