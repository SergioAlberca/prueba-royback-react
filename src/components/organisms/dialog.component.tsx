import React from 'react';
import FormWithButton from '../molecules/form-with-button.component';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { IFormDataProps, IRegister } from '../../interfaces/interfaces';

interface IDialogProps {
  open: boolean;
  data: IFormDataProps;
  register(data: IRegister): void;
}
function DialogComponent(props: IDialogProps) {
  return (
    <Dialog open={true} keepMounted aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{props.data.translates.title}</DialogTitle>
      <DialogContent>
        <FormWithButton data={props.data} regiter={props.register} />
      </DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
