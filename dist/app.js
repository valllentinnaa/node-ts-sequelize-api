"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var book_1 = __importDefault(require("./db/routes/book"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/books', book_1.default);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.listen(3000, function () {
    console.log('Ready to go!');
});
