import React from "react";
import { Button } from "@chakra-ui/react";
import { usePaystackPayment } from "react-paystack";

const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

interface PaystackI {
  emailAddress: string;
  amount: number;
  callBackFn?: () => void;
}

export default function PayStackApp({
  emailAddress,
  amount,
  callBackFn
}: PaystackI) {
  const config = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: +amount,
    text: "Pay with Paystack",
    publicKey: publicKey,
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
    <Button
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
      bg="inherit"
      _hover={{ bg: "inherit" }}
    >
      Make Payment
    </Button>
  );
}
