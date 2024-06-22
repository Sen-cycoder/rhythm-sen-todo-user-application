"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var updateTodo_1 = require("../../controllers/todo/updateTodo");
var router = express_1.default.Router();
router.put('/todos/:id', updateTodo_1.updateTodoController);
exports.default = router;
