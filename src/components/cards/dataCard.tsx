import React from "react";
import { Box, Heading } from "@chakra-ui/react";

type DataCardProps = {
  title: string;
  data: number;
  icon: any;
};

const DataCard = ({ icon, title, data }: DataCardProps): JSX.Element => {
  return (
    <Box
      className="rounded-md w-full max-w-sm"
      bg="#fff"
      color="#000"
      boxShadow="3px 6px 10px 0 rgb(0 102 245 / 7%)"
      border="1px solid rgba(0,102,245,.14)"
    >
      <div className="p-3 w-full flex justify-between items-center">
        <div className="px-2 text-4xl">{icon}</div>
        <div className="flex flex-col items-end p-3 justify-between flex-wrap">
          <Heading
            className="uppercase"
            fontWeight="400"
            fontSize="14px"
            as="h6"
            pb={1}
          >
            {title}
          </Heading>
          <div className="text-sm md:text-base font-bold text-ellipsis">
            {data}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default DataCard;
