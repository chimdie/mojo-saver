import React, { MouseEventHandler } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { landscapeImg, leavesImg, dancersImg, dancerImg } from "assets/card";

type CardProps = {
  title: string;
  description: string;
  // img?: any;
  onClick?: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLElement>;
  // joinButton?: React.ReactElement;
};

const GroupCard = ({ title, description, onClick }: CardProps): JSX.Element => {
  const imgs = [landscapeImg, leavesImg, dancersImg, dancerImg];
  const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
  return (
    <Box
      as="section"
      className="flex flex-col overflow-hidden w-full max-w-sm bg-white rounded-xl shadow-lg"
      onClick={onClick}
    >
      <Image src={randomImg} alt={title} />
      <Box as="section" className="p-4 flex flex-col justify-between h-full">
        <Heading size={{ base: "md" }} className="py-2">
          {title}
        </Heading>
        <Text className="py-2">{description}</Text>
      </Box>
    </Box>
  );
};

export default GroupCard;
