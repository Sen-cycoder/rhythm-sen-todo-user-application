"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoEntity = void 0;
var TodoEntity = /** @class */ (function () {
    function TodoEntity(data) {
        this.id = data.id;
        this.userId = data.userId;
        this.title = data.title;
        this.description = data.description;
        this.status = data.status;
        this.priority = data.priority;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
    return TodoEntity;
}());
exports.TodoEntity = TodoEntity;
