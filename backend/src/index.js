import express from 'express';
import booksRouter from './routes/books.routes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', booksRouter);

app.listen(port);
