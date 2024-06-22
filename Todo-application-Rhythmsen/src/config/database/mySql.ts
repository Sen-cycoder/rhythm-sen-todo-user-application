import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mydatabase',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('9862629723Raja@1', 'utf8'),
  },
});

pool
  .getConnection()
  .then((connection) => {
    console.log('Successfully connected to the database');
    connection.release();
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  });

export default pool;
