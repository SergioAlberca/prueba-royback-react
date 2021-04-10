import React from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import { IRadioItem } from '../../../interfaces/interfaces';

function RadioComponent(props: IRadioItem) {
  return <FormControlLabel value={props.value} control={<Radio />} label={props.label} />;
}

export default RadioComponent;
