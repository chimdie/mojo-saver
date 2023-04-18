import React, { MouseEventHandler } from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { landscapeImg, leavesImg, dancersImg, dancerImg } from "assets/card";
import { utilFn } from "utils";

type CardProps = {
  title: string;
  description: string;
  monthlyDepositAmount: number;
  onClick?: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLElement>;
};

const GroupCard = ({
  title,
  description,
  monthlyDepositAmount,
  onClick
}: CardProps): JSX.Element => {
  const imgs = [landscapeImg, leavesImg, dancersImg, dancerImg];
  const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
  return (
    <Box
      as="section"
      className="flex flex-col overflow-hidden w-full max-w-xs bg-white rounded-xl shadow-lg hover:bg-slate-50 hover:ease-in-out hover:cursor-pointer"
      onClick={onClick}
    >
      <Image src={randomImg} alt={title} />
      <Box className="flex items-center justify-between p-4 ">
        <Box as="section" className="flex flex-col justify-between h-full">
          <Heading size="sm" className="py-1">
            {title}
          </Heading>
          <Text className="py-1 text-xs">{description}</Text>
        </Box>
        <Text className="text-xs font-semibold">
          ₦{utilFn.formatMoney(monthlyDepositAmount)}
        </Text>
      </Box>
      <Button
        borderRadius="none"
        bg="whitesmoke"
        className="py-4 rounded-none flex justify-end bg-none"
      >
        View members
      </Button>
    </Box>
  );
};

export default GroupCard;
