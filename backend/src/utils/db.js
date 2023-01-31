import { createConnection } from 'mysql';

const dbPassword = process.env.PASSWORD || '';
const databaseSrc = process.env.DBSRC || 'library';

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: dbPassword,
  database: databaseSrc
});

export default db;
