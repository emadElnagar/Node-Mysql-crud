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
  const { id, title, author } = req.body;
  const inserQuery = `INSERT INTO books (id, title, author) VALUES (?, ?, ?)`;
  db.query(inserQuery, [id, title, author], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
}
