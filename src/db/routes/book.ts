import { Router } from 'express';

import { createBook, getBook } from '../controllers/book';

const router = Router();

router.post('/', createBook);

router.get('/', getBook);


export default router;