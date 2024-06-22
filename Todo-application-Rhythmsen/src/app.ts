// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { adduser, getByID,userValidation } from './routes/todo';
import { getAllTodos,getbyId,createTodo,updateTodo,deleteTodo } from './routes/crud/todoAllRouter';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('welcome');
});

//use the Todo routes
app.use('/',getAllTodos,getbyId,createTodo,updateTodo,deleteTodo)

// Use the user routes
app.use('/', adduser, getByID,userValidation);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
