import React from 'react';
import { TodoItem as TodoItemType } from '../types';

type Props = {
    todo: TodoItemType;
    toggleTodo: (id: number) => void;
};

export const Todo: React.FC<Props> = (props) => {
    return <li 
    onClick={() => props.toggleTodo(props.todo.id)}
    style={{ textDecoration: props.todo.isCompleted ? 'line-through' : 'none' }} // När man klickar på en todo stryks den över
    >
        {props.todo.text}
    </li>
};