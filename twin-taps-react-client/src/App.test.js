import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app')).toBeInTheDocument();
});
