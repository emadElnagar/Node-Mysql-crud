import db from "../utils/db.js";
import slugify from 'slugify';

// Get All Books Controller
export const getAllBooks = (_req, res) => {
  db.query(`SELECT * FROM books`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
}

// Create New Book Controller
export const newBook = (req, res) => {
  const { id, title, author } = req.body;
  const slug = slugify(title, {
    replacement: '-',
    lower: true,
    strict: true,
  });
  const createdAt = new Date();
  const lastUpdate = new Date();
  console.log(createdAt.getHours());
  const inserQuery = `INSERT INTO books (id, title, author, slug, createdAt, lastUpdate) VALUES (?, ?, ?, ?, ?, ?)`;
  const findTitle = `SELECT * FROM books WHERE title = (?);`;
  db.query(findTitle, [title], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.status(401).json({
        message: 'This Book already found in your library'
      });
    } else {
      db.query(inserQuery, [id, title, author, slug, createdAt, lastUpdate], (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      });
    }
  });
}

// Delete Book Controller
export const deleteBook = (req, res) => {
  const slug = req.params.slug;
  const deleteQuery = `DELETE FROM books WHERE slug =(?)`
  db.query(deleteQuery, [slug], (err, _result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      message: 'Book deleted successfully'
    });
  });
}
