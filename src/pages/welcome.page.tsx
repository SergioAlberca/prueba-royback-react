import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IWelcomeData } from '../interfaces/interfaces';
import { getDataWelcome } from '../services/loyalti.service';
import WelcomeTemplate from '../templates/welcome.template';

function WelcomePage(props: any) {
  const { name, type } = props.location.state;
  const history = useHistory();
  const [data, setData] = useState<IWelcomeData>();
  const [error, setError] = useState<string>('');

  const getData = async () => {
    try {
      const response = await getDataWelcome();
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const goToLoyalti = () => {
    history.push('/loyalti');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="welcome-container">
      <WelcomeTemplate
        name={name}
        data={data}
        error={error}
        loading={false}
        goToLoyalti={goToLoyalti}
        type={type}
      />
    </div>
  );
}

export default WelcomePage;
