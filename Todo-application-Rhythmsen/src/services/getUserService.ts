import pool from '../config/database/mySql';
import { User } from '../model/user';

import { RowDataPacket } from 'mysql2'; 

const getUserById = async (userId: number): Promise<User | null> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [userId]);
    connection.release();

    if (!rows.length) {
      return null;
    } else {
      const user: User = rows[0] as User; 
      return user;
    }
  } catch (error) {
    if (connection) {
      connection.release();
    }
    throw new Error(`Error fetching user: ${(error as Error).message}`);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

export default getUserById;
