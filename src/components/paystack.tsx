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
    // reference: "string",
    label: "string"
  };

  // you can call this function anything
  const onSuccess = (): void => {
    if (callBackFn) {
      callBackFn();
    }
    // Implementation for whatever you want to do with reference and after success call.
    console.log("success");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  // const componentProps = {
  //   reference: new Date().getTime().toString(),
  //   email: emailAddress,
  //   amount: amount,
  //   publicKey: "pk_test_b4e015b240dc7ac84d2c67791209a6e60e1fc0c8",
  //   text: "Pay with Paystack",
  //   onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
  //   onClose: handlePaystackCloseAction
  // };

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
