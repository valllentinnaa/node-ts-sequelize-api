import express, { Request, Response, NextFunction } from 'express';

import bookRoutes from './db/routes/book';

const app = express();

app.use(express.json())

app.use('/books', bookRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
    console.log('Ready to go!');
});