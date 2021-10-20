"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require('dotenv');
var path = require('path');
dotenv.config({ path: path.join(process.cwd(), ".env." + process.env.NODE_ENV) });
console.log('TYKA', dotenv.config({ path: path.join(process.cwd(), ".env." + process.env.NODE_ENV) }));
var configs = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    testing: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
exports.default = configs;
