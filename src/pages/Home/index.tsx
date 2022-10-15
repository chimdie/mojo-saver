import React from "react";
import { Avatar, Box, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../layouts";
import { AiFillAndroid } from "react-icons/ai";

export default function Home(): JSX.Element {
  return (
    <DashboardLayout>
      <header className="flex justify-between items-center w-full">
        <div className="py-2">
          <Heading size={{ base: "sm", md: "lg" }}>Hassan,</Heading>
          <div className="text-xs md:text-xl">Welcome to the Dashboard</div>
        </div>
        <div className="">
          <Avatar size={{ base: "sm", md: "md" }} />
        </div>
      </header>
      <Box
        as="section"
        className="flex gap-6 md:gap-10 flex-wrap"
        display={{ md: "grid" }}
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        py={4}
      >
        <DataCard
          title="total Cash"
          bg="#0085FF"
          color="#FFFF"
          data={23434}
          icon={<AiFillAndroid />}
        />
        <DataCard
          title="total Cash"
          bg="#faeaed"
          data={23434}
          icon={<AiFillAndroid />}
        />
        <DataCard
          title="total Cash"
          // bg={"#eee"}
          data={23434}
          icon={<AiFillAndroid />}
        />
      </Box>
    </DashboardLayout>
  );
}

type DataCardProps = {
  bg?: string;
  title: string;
  data?: number;
  icon: any;
  color?: string;
};

const DataCard = ({
  bg,
  icon,
  title,
  data,
  color
}: DataCardProps): JSX.Element => {
  return (
    <Box
      className="rounded-md w-full max-w-sm"
      bg={bg ? bg : "#fff"}
      color={color ? color : "#375d86"}
      boxShadow="3px 6px 10px 0 rgb(0 102 245 / 7%)"
      border="1px solid rgba(0,102,245,.14)"
    >
      <div className="p-8 w-full">
        <div className="flex items-center py-3 md:py-6 justify-between">
          <div className="px-2 text-4xl">{icon}</div>
          <Heading className="uppercase" size={{ base: "sm", md: "md" }}>
            {title}
          </Heading>
        </div>
        <div className="text-xl font-semibold">{data}</div>
      </div>
    </Box>
  );
};
