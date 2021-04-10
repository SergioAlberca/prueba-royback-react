import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ButtonComponent from './button.component';

const mockFunction = jest.fn();

test('render Button component', () => {
  const { container } = render(
    <ButtonComponent label="ejemplo" action={mockFunction} disabled={false} />,
  );
  expect(container.getElementsByClassName('MuiButtonBase-root').length).toBe(1);
});

test('render label button', () => {
  render(<ButtonComponent label="ejemplo" action={mockFunction} disabled={false} />);
  const button = screen.getByText('ejemplo');
  expect(button).toBeInTheDocument();
});

test('render button disabled', () => {
  render(<ButtonComponent label="ejemplo" action={mockFunction} disabled={true} />);
  const button = document.getElementsByClassName('MuiButtonBase-root');
  expect(button[0]).toHaveAttribute('disabled');
});

test('click button fucntion', () => {
  render(<ButtonComponent label="ejemplo" action={mockFunction} disabled={false} />);
  const button = document.getElementsByClassName('MuiButtonBase-root');
  fireEvent.click(button[0]);
  expect(mockFunction).toHaveBeenCalled();
});
