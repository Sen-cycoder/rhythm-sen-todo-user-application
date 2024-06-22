"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userValidation_1 = require("../controllers/auth/userValidation");
var router = (0, express_1.Router)();
router.get('/login', userValidation_1.loginUser);
exports.default = router;
