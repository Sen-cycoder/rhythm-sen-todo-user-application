"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getByIdTodo_1 = require("../../controllers/todo/getByIdTodo");
var router = express_1.default.Router();
router.get('/todos/:id', getByIdTodo_1.getTodoByIdController);
exports.default = router;
