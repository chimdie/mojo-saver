import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from "@chakra-ui/react";
import { usePaystackPayment } from "react-paystack";
import { utilFn, callToast } from "utils";

interface PaymentI {
  emailAddress: string;
  amount: string;
  callBackFn?: () => void;
  isOpen: boolean;
  onClose: () => void;
  cancelRef: React.RefObject<HTMLButtonElement>;
}

export default function PayStackApp({
  emailAddress,
  amount,
  callBackFn,
  isOpen,
  onClose,
  cancelRef
}: PaymentI) {
  const config = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: utilFn.nairaToKobo(+amount),
    text: "Pay with Paystack",
    publicKey: "pk_test_b4e015b240dc7ac84d2c67791209a6e60e1fc0c8",
    label: "string"
  };

  const onSuccess = (): void => {
    if (callBackFn) {
      callBackFn();
    }
    // eslint-disable-next-line no-console
    callToast(
      "Success.",
      "success",
      "Welcome to Mojo. Please Login to continue."
    );
    console.log("success");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      size={{ base: "xs", md: "md" }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Join a Group
          </AlertDialogHeader>
          <AlertDialogBody>
            You're about to join this group? You can't undo this action at the
            moment.
          </AlertDialogBody>
          <AlertDialogFooter display="flex" justifyContent="space-between">
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              <Button
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
                bg="inherit"
                _hover={{ bg: "inherit" }}
              >
                Make Payment
              </Button>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
