"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createTodo_1 = require("../../controllers/todo/createTodo");
var router = express_1.default.Router();
router.post('/todos', createTodo_1.createTodoController);
exports.default = router;
