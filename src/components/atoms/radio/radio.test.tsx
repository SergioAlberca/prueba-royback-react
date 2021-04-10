import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RadioComponent from './radio.component';

test('Render component', () => {
  const { container } = render(<RadioComponent label="label" value="1" />);
  expect(container.getElementsByClassName('MuiFormControlLabel-root').length).toBe(1);
});

test('Render component', () => {
  render(<RadioComponent label="label" value="1" />);
  const label = screen.getByText('label');
  expect(label).toBeInTheDocument();
});

test('Render value radio', () => {
  const { getByLabelText } = render(<RadioComponent label="label" value="1" />);
  const radio = getByLabelText('label');
  fireEvent.click(radio);
  expect(radio.value).toBe('1');
});
