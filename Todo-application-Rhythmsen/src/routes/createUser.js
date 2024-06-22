"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
var express_1 = require("express");
var createNewUser_1 = require("../controllers/auth/createNewUser");
var router = (0, express_1.Router)();
router.post('/add', createNewUser_1.addUser);
exports.default = router;
