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
import { FaUserFriends } from "react-icons/fa";
import { landscapeImg, leavesImg, dancersImg, dancerImg } from "assets/card";

type CardProps = {
  title: string;
  description: string;
  groupTotal?: number;
  handleJoinGroup?: () => void;
  onClick: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLElement>;
};

const UserGroupCard = ({
  title,
  description,
  groupTotal,
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
      <Box as="section" className="p-4 flex justify-between h-full">
        <Box as="section">
          <Heading size="sm" className="py-1">
            {title}
          </Heading>
          <Text className="py-1 text-xs">{description}</Text>
        </Box>
        <Box as="section" className="items-end">
          <Heading size="xs" className="py-1 flex items-center">
            <Text className="pr-1 text-[10px]">{groupTotal}</Text>
            <FaUserFriends fontSize="14px" />
          </Heading>
        </Box>
      </Box>
      <Box onClick={onClick}>
        <Button onClick={onOpen} w="100%" py={3} borderRadius="0">
          Join Group
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          size="xs"
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
