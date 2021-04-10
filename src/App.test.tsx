import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render App component', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('App').length).toBe(1);
});
