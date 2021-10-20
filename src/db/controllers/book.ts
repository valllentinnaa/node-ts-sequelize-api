import { RequestHandler } from 'express';

import Book from '../models/book';

const Books: typeof Book[] = [];

export const createBook: RequestHandler = async (req, res, next) => {
    const bookInfo = {
        title: req.body.title,
        numberOfPages: req.body.numberOfPages,
    }

    const book = await Book.create({ ...bookInfo })

    res.status(201).json({ message: 'Created the todo.', book})
}

export const getBook: RequestHandler = (req, res, next) => {
    res.json({ books: Books });
};