import db from "../utils/db.js"

export const getAllBooks = (_req, res) => {
  db.query(`SELECT * FROM books`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
}

export const newBook = (req, res) => {
  const inserQuery = `INSERT INTO books (title, author) VALUES (?, ?)`;
  db.query(inserQuery, [title, author], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  })
}
