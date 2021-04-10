import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

interface IDiscountItemProps {
  message: string;
  title: string;
}

function ItemDiscountComponent(props: IDiscountItemProps) {
  return (
    <Alert severity="success" className="discount-item-container">
      <AlertTitle>{props.title}</AlertTitle>
      {props.message}
    </Alert>
  );
}

export default ItemDiscountComponent;
