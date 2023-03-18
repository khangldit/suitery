import './styles.scss';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import BNB from '@assets/svg/currency/bnb_icon.svg';
type PropType = {
  symbol?: string;
  currency?: string;
};

const CurrencyInput = (props: PropType) => {
  const { symbol, currency } = props;
  const currencies = [
    {
      name: 'BUSD',
      icon: BNB,
    },
  ];

  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <Input
      size="large"
      type="number"
      className="currency-input"
      suffix={
        <div className="d-flex flex-row align-items-center">
          <img src={BNB} alt="" />
          <div className="fs-12">{symbol || 'BUSD'}</div>
        </div>
      }
    />
  );
};
export default CurrencyInput;
