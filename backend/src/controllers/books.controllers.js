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
  const inserQuery = `INSERT INTO books (id, title, author, slug) VALUES (?, ?, ?, ?)`;
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
      db.query(inserQuery, [id, title, author, slug], (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      });
    }
  })
  
}
