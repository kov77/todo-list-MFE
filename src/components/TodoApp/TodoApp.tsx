import React, {useState} from 'react';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {Todo} from '../../types';
import FilterButtons from '../FilterButtons/FilterButtons';
import TodoList from '../TodoList/TodoList';
import {Box, Button, Card, OutlinedInput, styled, Typography} from "@mui/material";

const AppContainer = styled(Box)({
  padding: "2rem",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

const TodoContainer = styled(Card)({
  marginTop: "30px",
  minWidth: "30%",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

const InputGroup = styled(Box)({
  display: "flex",
  gap: "2rem"
})

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState('All');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    if (description.trim() === '') return;
    setTodos([...todos, {id: Date.now(), description, completed: false}]);
    setDescription('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <AppContainer>
      <Typography variant={'h1'} fontSize={50}>Todo List</Typography>
      <TodoContainer>
        <InputGroup>
          <OutlinedInput
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Add task"
          />
          <Button variant={'contained'} onClick={addTodo}>Add</Button>
        </InputGroup>
        <FilterButtons filter={filter} setFilter={setFilter}/>
        <TodoList todos={filteredTodos} onToggle={toggleTodo}/>
      </TodoContainer>
    </AppContainer>
  );
};

export default TodoApp;
