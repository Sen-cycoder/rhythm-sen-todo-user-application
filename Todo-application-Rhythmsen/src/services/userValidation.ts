// src/services/userService.ts
import pool from '../config/database/mySql';
import { User } from '../model/user';
import { RowDataPacket, OkPacket } from 'mysql2';

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    connection.release();

    if (rows.length === 0) {
      return null;
    }

    const user: User = {
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
      password: rows[0].password,
      isAdmin: rows[0].isAdmin,
    };

    return user;
  } catch (error: any) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

export const validateUserCredentials = async (
  email: string,
  password: string,
): Promise<User | null> => {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return null;
    }
    if (user.password !== password) {
      return null;
    }
    return user;
  } catch (error: any) {
    throw new Error(`Error validating user credentials: ${error.message}`);
  }
};
