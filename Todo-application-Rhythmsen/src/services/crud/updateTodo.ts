import pool from '../../config/database/mySql';
import { Todo } from '../../model/todo';

export const updateTodo = async (updatedTodo: Todo): Promise<void> => {
    const connection = await pool.getConnection();
    await connection.execute('UPDATE todos SET title = ?, description = ?, status = ?, priority = ? WHERE id = ?', [
        updatedTodo.title,
        updatedTodo.description,
        updatedTodo.status,
        updatedTodo.priority,
        updatedTodo.id
    ]);
}
