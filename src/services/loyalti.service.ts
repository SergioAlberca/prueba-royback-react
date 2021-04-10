import axios, { AxiosResponse } from 'axios';

export function getDataLoyalti(): Promise<AxiosResponse> {
  return axios.get('../../mocks/loyalti-en.json');
}

export function getDataForm(value: string): Promise<AxiosResponse> {
  return axios.get(`../../mocks/data-form-${value}.json`);
}

export function getDataWelcome(): Promise<AxiosResponse> {
  return axios.get(`../../mocks/welcome.json`);
}
