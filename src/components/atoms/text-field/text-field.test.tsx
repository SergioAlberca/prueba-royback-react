import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TexFieldComponent from './text-filed.component';

const props = {
  label: 'titulo',
  type: 'text',
  id: 'id_id',
  required: true,
};

const functionMock = jest.fn();

test('Render Component', () => {
  const { container } = render(<TexFieldComponent item={props} setValue={functionMock} />);
  expect(container.getElementsByClassName('MuiTextField-root').length).toBe(1);
});

test('Render label texfield', () => {
  render(<TexFieldComponent item={props} setValue={functionMock} />);
  const input = screen.getByText('titulo');
  expect(input).toBeInTheDocument();
});

test('Call function in Onchange texfield', () => {
  render(<TexFieldComponent item={props} setValue={functionMock} />);
  const input = document.getElementsByClassName('MuiInputBase-input');
  fireEvent.change(input[0], { target: { value: 'hola' } });
  expect(functionMock).toHaveBeenCalled();
});
