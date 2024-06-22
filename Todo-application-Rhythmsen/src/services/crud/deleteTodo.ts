import pool from '../../config/database/mySql';
import { Todo } from '../../model/todo';

export const deleteTodo = async (id: number): Promise<void> => {
    const connection = await pool.getConnection(); 
    await connection.execute('DELETE FROM todos WHERE id = ?', [id]);
    connection.release(); 
}