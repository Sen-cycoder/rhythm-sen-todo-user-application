"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getUserById_1 = require("../controllers/auth/getUserById");
var router = (0, express_1.Router)();
router.post('/add', getUserById_1.getUser);
exports.default = router;
