"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var index_1 = require("./index");
var author_1 = __importDefault(require("./author"));
var Book = index_1.sequelize.define('Book', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    title: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    numberOfPages: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    authorId: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    },
});
Book.belongsTo(author_1.default, {
    foreignKey: 'authorId',
    as: 'author'
});
exports.default = Book;
