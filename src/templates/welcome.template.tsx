import React from 'react';
import ButtonComponent from '../components/atoms/button/button.component';
import ItemDiscountComponent from '../components/atoms/item-discount/item-discount';
import AppBarComponent from '../components/molecules/appBar.component';
import { IDiscountItem, IWelcomeData } from '../interfaces/interfaces';

interface IWelcomeTemplateProps {
  name: string;
  data?: IWelcomeData;
  error: string;
  loading: boolean;
  goToLoyalti(): void;
  type: string;
}

function WelcomeTemplate(props: IWelcomeTemplateProps) {
  return (
    <div className="welcome-template">
      <AppBarComponent type={props.type} />
      {props.data && (
        <div>
          <h1 className="title-welcome">
            {props.data.translates.title} {props.name}!
          </h1>
          {props.data.discounts.map((item: IDiscountItem, index: number) => {
            return (
              <ItemDiscountComponent key={index} title={item.title} message={item.description} />
            );
          })}
          <ButtonComponent
            label={props.data.translates.buttonContinue}
            disabled={false}
            action={props.goToLoyalti}
          />
        </div>
      )}
    </div>
  );
}

export default WelcomeTemplate;
