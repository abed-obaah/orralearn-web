import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function Flutter({ currencyCode }) {
   const config = {
    public_key: 'FLWPUBK_TEST-40298abfbe9857445e4b33cb0b8be2ac-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: currencyCode, 
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'ubahobaah@gmail.com',
      phone_number: '09058389203',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}