import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoApp from './TodoApp';
const todoListName = "My Todo"
test('renders TodoApp with initial UI elements', () => {
  render(<TodoApp listName={todoListName} />);
  expect(screen.getByText('My Todo')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Add task')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  expect(screen.getByText('All')).toBeInTheDocument();
});

test('adds a new todo when Add button is clicked', () => {
  render(<TodoApp listName={todoListName} />);
  const input = screen.getByPlaceholderText('Add task');
  const addButton = screen.getByRole('button', { name: 'Add' });

  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New task')).toBeInTheDocument();
});

test('filters todo items when filter button is clicked', () => {
  render(<TodoApp listName={todoListName} />);
  const input = screen.getByPlaceholderText('Add task');
  const addButton = screen.getByRole('button', { name: 'Add' });

  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);

  // Добавляем вторую задачу
  fireEvent.change(input, { target: { value: 'Task 2' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Task 1'));

  fireEvent.click(screen.getByRole('button', { name: 'Active' }));
  expect(screen.getByText('Task 2')).toBeInTheDocument();
  expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
});
