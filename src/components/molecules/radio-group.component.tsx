import React from 'react';
import { Card, CardContent, RadioGroup } from '@material-ui/core';
import RadioComponent from '../atoms/radio/radio.component';
import { IRadioItem } from '../../interfaces/interfaces';

interface IRadioGroup {
  items: IRadioItem[];
  setValue(value: string, type: string): void;
}

function RadioGroupComponent(props: IRadioGroup) {
  return (
    <Card>
      <CardContent>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          onChange={(e) => props.setValue(e.target.value, e.target.name)}
        >
          {props.items.map((item: IRadioItem, index: number) => {
            return <RadioComponent key={index} label={item.label} value={item.value} />;
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

export default RadioGroupComponent;
