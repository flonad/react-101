import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React 101/i);
  expect(linkElement).toBeInTheDocument();
});
