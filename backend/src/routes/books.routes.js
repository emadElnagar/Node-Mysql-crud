import express from 'express';
import { deleteBook, getAllBooks, newBook } from '../controllers/books.controllers.js';

const booksRouter = express.Router();

// Get All Books Route
booksRouter.get('/', getAllBooks);

// Create New Book Route
booksRouter.post('/new', newBook);

// Delete Book Route
booksRouter.delete('/delete/:slug', deleteBook);

export default booksRouter;
