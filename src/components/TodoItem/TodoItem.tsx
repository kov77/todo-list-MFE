import React from 'react';
import {Todo} from '../../types';
import {Checkbox, ListItem, Typography} from "@mui/material";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onToggle}) => {
  return (
    <ListItem dense onClick={() => onToggle(todo.id)}>
      <Checkbox sx={{padding: 0}} size={"large"} checked={todo.completed} onChange={() => onToggle(todo.id)}/>
      <Typography style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.description} </Typography>
    </ListItem>
  );
};

export default TodoItem;
