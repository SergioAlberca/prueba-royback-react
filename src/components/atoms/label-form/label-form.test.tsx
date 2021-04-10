import React from 'react';
import { render, screen } from '@testing-library/react';
import LabelFormComponent from './label-form';

test('Render component', () => {
  const { container } = render(<LabelFormComponent title="titulo" />);
  expect(container.getElementsByClassName('MuiFormLabel-root').length).toBe(1);
});

test('Render title prop', () => {
  render(<LabelFormComponent title="titulo" />);
  const title = screen.getByText('titulo');
  expect(title).toBeInTheDocument();
});
