import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDiscountComponent from './item-discount';

test('Render component', () => {
  const { container } = render(<ItemDiscountComponent message="mensaje" title="titulo" />);
  expect(container.getElementsByClassName('MuiAlert-root').length).toBe(1);
});

test('Render title prop', () => {
  render(<ItemDiscountComponent message="mensaje" title="titulo" />);
  const title = screen.getByText('titulo');
  expect(title).toBeInTheDocument();
});

test('Render message prop', () => {
  render(<ItemDiscountComponent message="mensaje" title="titulo" />);
  const message = screen.getByText('mensaje');
  expect(message).toBeInTheDocument();
});
