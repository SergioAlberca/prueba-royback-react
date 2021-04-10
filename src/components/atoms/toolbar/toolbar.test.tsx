import React from 'react';
import { render, screen } from '@testing-library/react';
import ToolbarComponent from './toolbar.component';

test('Render component', () => {
  const { container } = render(<ToolbarComponent label="ejemplo" />);
  expect(container.getElementsByClassName('MuiToolbar-root').length).toBe(1);
});

test('Render label toolbar', () => {
  render(<ToolbarComponent label="ejemplo" />);
  const title = screen.getByText('ejemplo');
  expect(title).toBeInTheDocument();
});
