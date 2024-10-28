import React from 'react';

interface TodoInputProps {
  input: string;
  setInput: (input: string) => void;
  addTodo: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ input, setInput, addTodo }) => {
  return (
    <div>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Uppdaterar texten när användaren skriver //
      /> 
      <button onClick={() => addTodo(input)}>+</button>        
    </div> // Kallar på addToDo som lägger till nuvarande text 
  );
};