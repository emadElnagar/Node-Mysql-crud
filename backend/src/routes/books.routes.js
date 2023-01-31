import express from 'express';
import { getAllBooks } from '../controllers/books.controllers.js';

const booksRouter = express.Router();

booksRouter.get('/books', getAllBooks);

export default booksRouter;
