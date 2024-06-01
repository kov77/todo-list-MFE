import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FilterButtons from './FilterButtons';

test('renders FilterButtons and handles clicks', () => {
  const setFilter = jest.fn();
  render(<FilterButtons filter="All" setFilter={setFilter} />);

  fireEvent.click(screen.getByText('All'));
  expect(setFilter).toHaveBeenCalledWith('All');

  fireEvent.click(screen.getByText('Active'));
  expect(setFilter).toHaveBeenCalledWith('Active');

  fireEvent.click(screen.getByText('Completed'));
  expect(setFilter).toHaveBeenCalledWith('Completed');
});
