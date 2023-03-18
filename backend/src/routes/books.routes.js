import express from 'express';
import { deleteBook, getAllBooks, newBook, search, updateBook } from '../controllers/books.controllers.js';

const booksRouter = express.Router();

// Get All Books Route
booksRouter.get('/', getAllBooks);

// Create New Book Route
booksRouter.post('/new', newBook);

// Update Book Route
booksRouter.put('/update/:slug', updateBook);

// Delete Book Route
booksRouter.delete('/delete/:slug', deleteBook);

// Search Route
booksRouter.get('/search', search);

export default booksRouter;
