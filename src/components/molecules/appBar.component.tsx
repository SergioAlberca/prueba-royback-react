import React from 'react';
import { AppBar } from '@material-ui/core';
import ToolbarComponent from '../atoms/toolbar/toolbar.component';

interface IAppbarProps {
  type: string;
}

function AppBarComponent(props: IAppbarProps) {
  return (
    <AppBar position="static" color="secondary">
      <ToolbarComponent label={props.type} />
    </AppBar>
  );
}

export default AppBarComponent;
