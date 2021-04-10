import React from 'react';
import { FormLabel } from '@material-ui/core';

interface ILabelFormProps {
  title: string;
}
function LabelFormComponent(props: ILabelFormProps) {
  return (
    <FormLabel component="legend" className="legend">
      {props.title}
    </FormLabel>
  );
}
export default LabelFormComponent;
