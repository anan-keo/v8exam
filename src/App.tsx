import { useState, useEffect } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './types';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(() => { // State variabel som håller alla todos
    const savedTodos = localStorage.getItem('todos'); // Laddar alla todos från localStorage
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [input, setInput] = useState(''); // State för input

  const addTodo = (text: string) => {
      const newTodo: TodoItem = {
        id: Date.now(), // Generar ett random id till varje todo
        text,
        isCompleted: false,
      };
    setTodos([...todos, newTodo]); // Appendar ny todo till i slutet av listan
  }

  const toggleTodo = (id: number) => { // Går igenom alla todos
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }; // Om vi stryker en todo, ändras completion till true
      }
      return todo;
    })
    setTodos(newTodos);
  };

  useEffect(() => { // Sparar todos till localStorage om de ändras
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  return (
    <main>
      <h2>Anans todo lista</h2>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </main>
  );
}

export default App;