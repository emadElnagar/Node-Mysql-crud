import express from 'express';
import { getAllBooks, newBook } from '../controllers/books.controllers.js';

const booksRouter = express.Router();

booksRouter.get('/books', getAllBooks);

booksRouter.post('/books/new', newBook);

export default booksRouter;
