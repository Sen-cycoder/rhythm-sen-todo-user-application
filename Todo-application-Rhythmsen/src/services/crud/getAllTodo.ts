import pool from '../../config/database/mySql';
import { Todo } from '../../model/todo';

export const getAllTodos = async (userId: number): Promise<Todo[]> => {
  let connection;
  try {
    connection = await pool.getConnection(); // <--- Changed here
    const [rows, _fields] = await connection.execute('SELECT * FROM todos WHERE userId =?', [
      userId,
    ]);
    return rows as Todo[];
  } catch (error) {
    console.error('Error in getAllTodos:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        connection.release();
      } catch (error) {
        console.error('Error releasing connection:', error);
      }
    }
  }
};
