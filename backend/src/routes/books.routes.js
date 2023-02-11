import express from 'express';
import { getAllBooks, newBook } from '../controllers/books.controllers.js';

const booksRouter = express.Router();

// Get All Books Route
booksRouter.get('/', getAllBooks);

// Create New Book Route
booksRouter.post('/new', newBook);

export default booksRouter;
