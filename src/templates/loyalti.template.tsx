import React from 'react';
import DialogComponent from '../components/organisms/dialog.component';
import FormRadioComponent from '../components/organisms/form-radio.component';
import { IFormRadio, IFormDataProps, IRegister } from '../interfaces/interfaces';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import AppBarComponent from '../components/molecules/appBar.component';

interface ILoyaltiTemplateProps {
  data?: IFormRadio;
  dataForm?: IFormDataProps;
  open: boolean;
  error: string;
  show: boolean;
  getFormData(value: string, type: string): void;
  register(data: IRegister): void;
  handleCloseSnackbar(): void;
}

function LoyaltiTemplate(props: ILoyaltiTemplateProps) {
  return (
    <div className="loyalti-template">
      <AppBarComponent type="Sign Up" />
      {props.data && <FormRadioComponent data={props.data} setValue={props.getFormData} />}
      {props.dataForm && (
        <DialogComponent open={props.open} data={props.dataForm} register={props.register} />
      )}
      <Snackbar open={props.show} autoHideDuration={6000} onClose={props.handleCloseSnackbar}>
        <MuiAlert onClose={props.handleCloseSnackbar} severity="error">
          {props.error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default LoyaltiTemplate;
