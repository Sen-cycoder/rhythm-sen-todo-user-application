// src/services/createUserService.ts
import pool from '../config/database/mySql';
import { User } from '../model/user';

import { ResultSetHeader } from 'mysql2'; 

const createUser = async (user: User): Promise<number> => {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query<ResultSetHeader>('INSERT INTO users SET ?', [user]);
    connection.release();
    return result.insertId;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error creating user: ${error.message}`);
    } else {
      throw new Error(`Error creating user: Unknown error`);
    }
  }
};

export default createUser;
