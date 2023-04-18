import React, { MouseEventHandler } from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { landscapeImg, leavesImg, dancersImg, dancerImg } from "assets/card";
import { utilFn } from "utils";

type CardProps = {
  onOpen?: () => void;
  title: string;
  description: string;
  amount: number;
  // handleJoinGroup?: () => void;
  onClick: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLElement>;
};

const UserGroupCard = ({
  title,
  description,
  // handleJoinGroup,
  onClick,
  onOpen,
  amount
}: CardProps): JSX.Element => {
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
        <Text className="py-1 text-md">₦{utilFn.formatMoney(amount)}</Text>
      </Box>
      <Box onClick={onClick}>
        <Button onClick={onOpen} w="100%" py={3} borderRadius="0">
          Join Group
        </Button>
      </Box>
    </Box>
  );
};

export default UserGroupCard;
