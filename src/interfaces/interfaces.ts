export interface IRadioItem {
  label: string;
  value: string;
}

export interface IFormRadio {
  translates: {
    title: string;
    label_discount: string;
  };
  radios: IRadioItem[];
}

export interface ITextFieldProps {
  label: string;
  type: string;
  id: string;
  required: boolean;
}

export interface IFormDataProps {
  translates: {
    title: string;
    legend: string;
    buttonTitle: string;
  };
  fields: ITextFieldProps[];
}

export interface IDiscountItem {
  title: string;
  description: string;
}

export interface IWelcomeData {
  translates: {
    title: string;
    buttonContinue: string;
  };
  discounts: IDiscountItem[];
}

export interface IRegister {
  name: string;
  last_name?: string;
  phone?: string;
  contact_name?: string;
  contact_email?: string;
  id_code?: string;
  comment?: string;
}
