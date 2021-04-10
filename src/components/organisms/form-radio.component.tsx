import React from 'react';
import { FormControl } from '@material-ui/core';
import LabelFormComponent from '../atoms/label-form/label-form';
import RadioGroupComponent from '../molecules/radio-group.component';
import { IFormRadio } from '../../interfaces/interfaces';

interface IFormRadioProps {
  data: IFormRadio;
  setValue(value: string, type: string): void;
}

function FormRadioComponent(props: IFormRadioProps) {
  return (
    <FormControl component="fieldset" className="form-radio-container">
      <LabelFormComponent title={props.data.translates.title} />
      <RadioGroupComponent items={props.data.radios} setValue={props.setValue} />
      <p>{props.data.translates.label_discount}</p>
    </FormControl>
  );
}

export default FormRadioComponent;
