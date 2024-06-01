import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from '../../types';
import TodoList from './TodoList';


const todos: Todo[] = [
  { id: 1, description: 'Test todo 1', completed: false },
  { id: 2, description: 'Test todo 2', completed: true },
];

test('renders TodoList with todos', () => {
  render(<TodoList todos={todos} onToggle={() => {}} />);
  expect(screen.getByText('Test todo 1')).toBeInTheDocument();
  expect(screen.getByText('Test todo 2')).toBeInTheDocument();
});

test('calls onToggle when a todo item checkbox is clicked', () => {
  const onToggle = jest.fn();
  render(<TodoList todos={todos} onToggle={onToggle} />);
  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]);
  expect(onToggle).toHaveBeenCalledWith(1);
  fireEvent.click(checkboxes[1]);
  expect(onToggle).toHaveBeenCalledWith(2);
});
