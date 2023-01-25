import React from "react";
import { Button } from "@chakra-ui/react";
import { usePaystackPayment } from "react-paystack";

export default function PayStackApp({
  emailAddress,
  amount,
  callBackFn
}: {
  emailAddress: string;
  amount: string;
  callBackFn?: () => void;
}) {
  const config = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: +amount,
    text: "Pay with Paystack",
    publicKey: "pk_test_b4e015b240dc7ac84d2c67791209a6e60e1fc0c8",
    label: "string"
  };

  // you can call this function anything
  const onSuccess = (): void => {
    if (callBackFn) {
      callBackFn();
    }
    console.log("success");
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="App">
      <Button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        bg="inherit"
        _hover={{ bg: "inherit" }}
      >
        Make Payment
      </Button>
    </div>
  );
}
