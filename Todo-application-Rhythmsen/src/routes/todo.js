"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = exports.getByID = exports.adduser = void 0;
var createUser_1 = __importDefault(require("../routes/createUser"));
exports.adduser = createUser_1.default;
var getById_1 = __importDefault(require("../routes/getById"));
exports.getByID = getById_1.default;
var userValidation_1 = __importDefault(require("../routes/userValidation"));
exports.userValidation = userValidation_1.default;
