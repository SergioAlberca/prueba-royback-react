import React from 'react';
import { Button } from '@material-ui/core';

export interface IButtonProps {
  label: string;
  disabled: boolean;
  action(): void;
}

function ButtonComponent(props: IButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={props.disabled}
      onClick={() => props.action()}
    >
      {props.label}
    </Button>
  );
}

export default ButtonComponent;
