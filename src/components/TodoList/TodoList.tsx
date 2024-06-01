import React from 'react';
import {Todo} from '../../types';
import TodoItem from '../TodoItem/TodoItem';
import {Box, styled} from "@mui/material";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

const TodoListContainer = styled(Box)({
  marginTop: " 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
})

const TodoList: React.FC<TodoListProps> = ({todos, onToggle}) => {
  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
