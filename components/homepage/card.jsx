import React from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export default function Card({ icon, caption, subText, footer, footerIcon }) {
  return (
    <Box
      className="flex flex-col justify-evenly p-4 bg-gray-50 rounded-md"
      margin="0 auto"
      maxWidth="352px"
      marginBottom="35px!important"
      flex="33% 1"
    >
      {/* <Image src={icon} alt="" width="50" height="50" /> */}
      <img src={icon} alt="" width="50" height="50" />
      <Text as="h1" className="text-lg md:text-xl font-semibold py-2">
        {caption}
      </Text>
      <Text as="p" className="py-2">
        {subText}
      </Text>
      <Text as="p" className="py-2 flex items-center">
        <Text as="span" className="pr-3" borderRadius="50px" bg="red">
          <BsArrowRight />
        </Text>
        {footer}
      </Text>
    </Box>
  );
}
