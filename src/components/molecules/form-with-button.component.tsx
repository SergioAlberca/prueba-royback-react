import React, { ChangeEvent, useState } from 'react';
import { IFormDataProps, ITextFieldProps } from '../../interfaces/interfaces';
import ButtonComponent from '../atoms/button/button.component';
import TexFieldComponent from '../atoms/text-field/text-filed.component';

interface IFormWithButtonProps {
  data: IFormDataProps;
  regiter(data: Object): void;
}

function FormWithButton(props: IFormWithButtonProps) {
  const [values, setValues] = useState<any>({});
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const handleInputs = (e: ChangeEvent, value: string) => {
    const elementsRequired = props.data.fields.filter((item) => item.required === true);

    let data = values;

    data[e.target.id] = value;

    if (
      elementsRequired.length === Object.keys(data).length ||
      Object.keys(data).length > elementsRequired.length
    ) {
      let count = 0;
      Object.keys(data).forEach((key) => {
        let found = elementsRequired.find((item) => item.id === key);
        if (found) {
          if (!data[key]) {
            setButtonDisabled(true);
          } else {
            count++;
            if (count === elementsRequired.length) {
              setButtonDisabled(data[key] === '' || !data[key]);
            }
          }
        }
      });
    }
    setValues(data);
  };

  const sendValues = () => {
    props.regiter(values);
  };

  return (
    <div>
      <form autoComplete="off">
        {props.data.fields.map((item: ITextFieldProps, index: number) => {
          return (
            <TexFieldComponent key={index} item={item} setValue={handleInputs}></TexFieldComponent>
          );
        })}
      </form>
      <p>{props.data.translates.legend}</p>
      <ButtonComponent
        label={props.data.translates.buttonTitle}
        disabled={buttonDisabled}
        action={sendValues}
      />
    </div>
  );
}

export default FormWithButton;
