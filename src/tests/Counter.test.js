// import necessary react testing library helpers here
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

let getByText, getByTestId;

beforeEach(() => {
    // Render the Counter component here
    ({ getByText, getByTestId } = render(<Counter />));
  })
  
  test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above
    expect(getByText('Counter')).toBeInTheDocument();
  });
  
  test('should render initial count with value of 0', () => {
    // Complete the unit test below based on the objective in the line above
    expect(getByTestId('count')).toHaveTextContent('0');
  });
  
  test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above
    fireEvent.click(getByText('+'));
    expect(getByTestId('count')).toHaveTextContent('1');
  });
  
  test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    fireEvent.click(getByText('-'));
    expect(getByTestId('count')).toHaveTextContent('-1');
  });