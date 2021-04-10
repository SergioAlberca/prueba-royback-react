import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IFormRadio, IFormDataProps, IRegister } from '../interfaces/interfaces';
import { getDataForm, getDataLoyalti } from '../services/loyalti.service';
import LoyaltiTemplate from '../templates/loyalti.template';
import { getTypeByValue } from '../utils/utils';

function LoyaltyPage() {
  const [data, setData] = useState<IFormRadio>();
  const [dataForm, setDataForm] = useState<IFormDataProps>();
  const [open, setOpen] = useState<boolean>(false);
  const [valueSelected, setValueSelected] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getDataLoyalti();
      setData(response.data);
    } catch (error) {
      setError(error.message);
      setShowSnackbar(true);
    }
  };

  const getFormData = async (value: string) => {
    setValueSelected(value);
    const response = await getDataForm(value);
    setDataForm(response.data);
    setOpen(true);
  };

  const register = (data: IRegister) => {
    const { name } = data;
    const type = getTypeByValue(valueSelected);
    history.push({ pathname: `/welcome`, state: { name, type } });
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="loyalti-container">
      <LoyaltiTemplate
        data={data}
        dataForm={dataForm}
        open={open}
        error={error}
        show={showSnackbar}
        getFormData={getFormData}
        register={register}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </div>
  );
}

export default LoyaltyPage;
