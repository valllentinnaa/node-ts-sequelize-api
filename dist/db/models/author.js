"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var sequelize_1 = require("sequelize");
var book_1 = __importDefault(require("./book"));
;
var Author = index_1.sequelize.define('Author', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    firstName: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    email: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
});
book_1.default.belongsTo(Author, {
    foreignKey: 'authorId',
    as: 'author'
});
exports.default = Author;
