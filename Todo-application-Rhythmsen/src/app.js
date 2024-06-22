"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var todo_1 = require("./routes/todo");
var todoAllRouter_1 = require("./routes/crud/todoAllRouter");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('welcome');
});
//use the Todo routes
app.use('/', todoAllRouter_1.getAllTodos, todoAllRouter_1.getbyId, todoAllRouter_1.createTodo, todoAllRouter_1.updateTodo, todoAllRouter_1.deleteTodo);
// Use the user routes
app.use('/', todo_1.adduser, todo_1.getByID, todo_1.userValidation);
app.listen(port, function () {
    console.log("Server is running on port http://localhost:".concat(port));
});
