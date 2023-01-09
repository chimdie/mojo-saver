import React from "react";
// import logo from "./logo.svg";
import { PaystackButton } from "react-paystack";
// import "./App.css";

export default function PayStackApp({
  emailAddress,
  amount,
  callBackFn
}: {
  emailAddress: string;
  amount: string;
  callBackFn?: () => void;
}) {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    callBackFn();
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: amount,
    publicKey: "pk_test_b4e015b240dc7ac84d2c67791209a6e60e1fc0c8",
    text: "Pay with Paystack",
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction
  };

  return (
    <div className="App">
      <PaystackButton {...componentProps} />
    </div>
  );
}
