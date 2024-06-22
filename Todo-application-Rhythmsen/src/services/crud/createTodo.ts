import pool from '../../config/database/mySql';
import { Todo } from '../../model/todo';

export const createTodo = async (newTodo: Todo): Promise<number> => {
    let connection;
    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();
        try {
            const [result] = await connection.execute('INSERT INTO todos (title, description, status, priority) VALUES (?, ?, ?, ?)', [
                newTodo.title,
                newTodo.description,
                newTodo.status,
                newTodo.priority
            ]);
            const insertId = result.insertId;
            await connection.commit();
            return insertId;
        } catch (error) {
            await connection.rollback();
            console.error(error);
            throw error;
        }
    } finally {
        if (connection) {
            connection.release();
        }
    }
}