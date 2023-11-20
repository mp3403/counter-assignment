// import necessary react testing library helpers here
import React from 'react'
import {render, userEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zero = screen.getByText(/0/i);
  console.log(zero);
  expect(zero).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText('+');
  button.click();
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText('-');
  button.click();
  expect(screen.getByText('0')).toBeInTheDocument();
});
