"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getAllTodo_1 = require("../../controllers/todo/getAllTodo");
var router = express_1.default.Router();
router.get('/users/:id/todos', getAllTodo_1.getAllTodosController);
exports.default = router;
