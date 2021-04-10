import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';

interface IToolbarProps {
  label: string;
}
function ToolbarComponent(props: IToolbarProps) {
  return (
    <Toolbar>
      <Typography variant="h6">{props.label}</Typography>
    </Toolbar>
  );
}

export default ToolbarComponent;
