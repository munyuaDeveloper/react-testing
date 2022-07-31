import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders the page title', () => {
//   render(<App />);
//   // const pageTitle = screen.getByText(/react testing library/i);
//   const pageTitle = screen.getByTestId('title')
//   expect(pageTitle).toBeInTheDocument();
// });

// test('Test if there are 3 list items', () => {
//   render(<App />);
//   const list = screen.getAllByRole('listitem')
//   expect(list).toHaveLength(3)
// });

// test('sum to be  6', () => {
//   render(<App />);
//   const sum = screen.getByTitle('sum')
//   expect(sum.textContent).toBe("6")
// });