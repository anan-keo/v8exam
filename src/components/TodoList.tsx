import React from 'react';
import { Todo } from './Todo';
import { TodoItem } from '../types';

interface TodoListProps {
  todos: TodoItem[]; // Listan på alla todos
  toggleTodo: (id: number) => void; // Funktion för att ändra completion status
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};