import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ModalComp({ isOpen, onClose, children }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton>x</ModalCloseButton>
          <ModalBody paddingY="20px">{children}</ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
