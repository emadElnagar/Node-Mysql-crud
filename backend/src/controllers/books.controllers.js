import db from "../utils/db.js";
import slugify from 'slugify';

// Get All Books Controller
export const getAllBooks = (_req, res) => {
  db.query(`SELECT * FROM books ORDER BY createdAt DESC`, (err, result) => {
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

// Update Book Controller
export const updateBook = (req, res) => {
  const { slug } = req.params;
  const { title, author } = req.body;
  const lastUpdate = new Date();
  const newSlug = slugify(title, {
    replacement: '-',
    lower: true,
    strict: true,
  });
  const updateQuery = `
    UPDATE books SET title = (?),
    author = (?),
    slug = (?),
    lastUpdate = (?)
    WHERE slug = (?)
  `;
  db.query(updateQuery, [title, author, newSlug, lastUpdate, slug], (err, _result) => {
    if (err) {
      res.status(402).json(err);
    }
    res.status(200).json({
      message: 'Book Updated Successfully'
    });
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
