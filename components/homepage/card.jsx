import React from "react";
import { Box, Text } from "@chakra-ui/react";
import data from "./data";

export default function Card() {
  return (
    <>
      {data.map((data) => {
        return (
          <CardBody
            key={data.caption}
            icon={data.icon}
            caption={data.caption}
            subText={data.subText}
            footer={data.footer}
          />
        );
      })}
    </>
  );
}

function CardBody({ icon, caption, subText, footer, arrow }) {
  return (
    <Box
      className="flex flex-col justify-evenly p-4 bg-gray-50 rounded-md"
      margin="0 auto"
      maxWidth="352px"
      marginBottom="40px!important"
      flex="33% 1"
      marginRight={{ md: "10px" }}
    >
      <Box className="py-2">{icon}</Box>
      <Text as="h1" className="text-lg md:text-xl font-semibold py-2">
        {caption}
      </Text>
      <Text as="p" className="py-2">
        {subText}
      </Text>
      <Text as="p" className="py-2 flex items-center">
        <Text as="span" className="pr-3">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16.4438"
              cy="16.7622"
              r="16.0254"
              fill="#E4FFF0"
            ></circle>
            <path
              d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z"
              fill="whatsapp.600"
            ></path>
          </svg>
        </Text>
        {footer}
      </Text>
    </Box>
  );
}
