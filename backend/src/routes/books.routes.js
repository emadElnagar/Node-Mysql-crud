import express from 'express';
import { getAllBooks, newBook } from '../controllers/books.controllers.js';

const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);

booksRouter.post('/new', newBook);

export default booksRouter;
