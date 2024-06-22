// your-file.ts
import pool from '../../config/database/mySql';
import { Todo } from '../../model/todo';

export const getTodoById = async (id: number): Promise<Todo | null> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM todos WHERE id =?', [id]);
    if (rows.length > 0) {
        const todoData = rows[0]; // Get the first row
        const todo = new Todo(todoData.id, todoData.title, todoData.description); // Pass the required parameters to the Todo constructor
        // Initialize other properties of the Todo object if needed
        return todo;
      } else {
        return null;
      }
  } catch (error) {
    console.error('Error in getTodoById:', error);
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