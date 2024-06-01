import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import TodoItem from './TodoItem';

const mockTodo = {
  id: 1,
  description: 'Test todo',
  completed: false,
};

const mockOnToggle = jest.fn();

test('Renders TodoItem with correct text', () => {
  render(<TodoItem todo={mockTodo} onToggle={mockOnToggle}/>);
  const todoText = screen.getByText('Test todo');
  expect(todoText).toBeInTheDocument();
});

test('Calls onToggle when Checkbox is clicked', () => {
  render(<TodoItem todo={mockTodo} onToggle={mockOnToggle}/>);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
});

test('Applies line-through style when todo is completed', () => {
  const completedTodo = {...mockTodo, completed: true};
  render(<TodoItem todo={completedTodo} onToggle={mockOnToggle}/>);
  const todoText = screen.getByText('Test todo');
  expect(todoText).toHaveStyle('text-decoration: line-through');
});
