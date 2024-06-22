"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = __importDefault(require("mysql2/promise"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = promise_1.default.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydatabase',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    authPlugins: {
        mysql_clear_password: function () { return function () { return Buffer.from('9862629723Raja@1', 'utf8'); }; },
    },
});
pool
    .getConnection()
    .then(function (connection) {
    console.log('Successfully connected to the database');
    connection.release();
})
    .catch(function (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
});
exports.default = pool;
