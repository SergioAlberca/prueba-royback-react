import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import { ITextFieldProps } from '../../../interfaces/interfaces';

interface ITextFieldComponentProps {
  item: ITextFieldProps;
  setValue(e: ChangeEvent, value: string): void;
}
function TexFieldComponent(props: ITextFieldComponentProps) {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={props.item.id}
      label={props.item.label}
      type={props.item.type}
      fullWidth
      onChange={(e) => props.setValue(e, e.target.value)}
      required={props.item.required}
    />
  );
}

export default TexFieldComponent;
