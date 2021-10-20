"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var book_1 = require("../controllers/book");
var router = (0, express_1.Router)();
router.post('/', book_1.createBook);
router.get('/', book_1.getBook);
exports.default = router;
