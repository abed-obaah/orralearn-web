import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function FlutterwavePay() {
  const config = {
    public_key: "FLWPUBK-9bc844e59de11de0d76a9da6ea191410-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "tonybradpit@gmail.com",
      phone_number: "+237654012553",
      name: "Tony Bradley",
    },
    customizations: {
      title: "Orralearn",
      description: "Payment for Orralearn subscription",
      logo: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/369062406_285837120861814_5938473324719847084_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=oWFzmYiQNcsAX86DGxJ&_nc_ht=scontent-atl3-2.xx&oh=00_AfATuzr8xej3AkwWueWNuk2zxFa2dZRTir3Iq79i43TOTw&oe=6523619B",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div >
      <h1>Hello Orralearner!</h1>
      <p>Hello</p>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
