import express from 'express';
import booksRouter from './routes/books.routes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(booksRouter);

app.listen(port);
