import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import style from "../index.module.css";

const ImageCompOverLay = ({ src, quote }: { src: string; quote: string }) => {
  return (
    <Box
      as="section"
      className={style.slideItem}
      position="relative"
      height="100%"
      width="100%"
      overflow="hidden"
    >
      <Image
        src={src}
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="1"
        width="100%"
        height="100%"
        objectFit="cover"
        position="absolute"
      />
      <Box position="relative" height="100%" bg="#00000040">
        <Text
          top="50%"
          left="50%"
          color="white"
          fontSize={{ base: ".8rem", md: "2rem" }}
          fontWeight="700"
          textAlign="center"
          position="absolute"
          textTransform="capitalize"
          transform="translate(-50%,-50%)"
        >
          {quote}
        </Text>
        <Text
          right="0"
          bottom="0"
          color="white"
          fontWeight="500"
          fontSize={{ base: ".5rem", md: "0.75rem" }}
          padding={{ base: ".3rem", md: "0.75rem" }}
          position="absolute"
        >
          Mojo Saver
        </Text>
      </Box>
    </Box>
  );
};

export default ImageCompOverLay;
