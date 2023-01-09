import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { callToast } from "utils";

export default function App({
  emailAddress,
  phoneNumber,
  fullName,
  amount,
  callBackFn
}: {
  emailAddress: string;
  phoneNumber: string;
  fullName: string;
  amount: string;
}) {
  const config = {
    public_key: "FLWPUBK_TEST-280bffd6e210c60e5d6dfc6d6115a777-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney",
    customer: {
      email: emailAddress,
      phone_number: phoneNumber,
      name: fullName
    },
    customizations: {
      title: "Join Group",
      description: "Pay to join group.",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"
    }
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response: any) => {
      callBackFn();
      callToast("Payment successful.", "success", response.message);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {}
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
