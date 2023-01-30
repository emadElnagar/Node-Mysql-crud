import express from 'express';
import { createConnection } from 'mysql';

const app = express();
const port = process.env.PORT || 5000;
const dbPassword = process.env.PASSWORD || '';
const databaseSrc = process.env.DBSRC || 'company';

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: dbPassword,
  database: databaseSrc
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port);
