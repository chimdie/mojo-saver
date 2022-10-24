import React, { MouseEventHandler, useRef } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { landscapeImg, leavesImg, dancersImg, dancerImg } from "assets/card";

type CardProps = {
  title: string;
  description: string;
  handleJoinGroup?: () => void;
  onClick: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLElement>;
};

const UserGroupCard = ({
  title,
  description,
  handleJoinGroup,
  onClick
}: CardProps): JSX.Element => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imgs = [landscapeImg, leavesImg, dancersImg, dancerImg];
  const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

  return (
    <Box
      as="section"
      className="flex flex-col overflow-hidden w-full max-w-xs bg-white rounded-xl shadow-lg hover:bg-slate-50 hover:ease-in-out hover:cursor-pointer"
    >
      <Image src={randomImg} alt={title} />
      <Box as="section" className="p-4 flex flex-col justify-between h-full">
        <Heading size={{ base: "sm" }} className="py-1">
          {title}
        </Heading>
        <Text className="py-1 text-xs">{description}</Text>
      </Box>
      <Box onClick={onClick}>
        <Button onClick={onOpen} w="100%" py={3} borderRadius="0">
          Join Group
        </Button>
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
                You're about to join this group? You can't undo this action at
                the moment.
              </AlertDialogBody>
              <AlertDialogFooter display="flex" justifyContent="space-between">
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleJoinGroup} colorScheme="blue">
                  Join Group
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Box>
  );
};

export default UserGroupCard;
