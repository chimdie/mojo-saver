import React from "react";
import { DashboardLayout } from "layouts";
import { Avatar, AvatarBadge, Box, Heading } from "@chakra-ui/react";
import { AiFillAndroid } from "react-icons/ai";
import { BsWallet } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useAppSelector } from "redux/hook";
import { userData } from "utils";
import useSWR from "swr";

export default function AdminHome(): JSX.Element {
  const { user } = useAppSelector((state: any) => state.account);

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data } = useSWR(`/users/${currentUserId}`);
  return (
    <DashboardLayout>
      <header className="flex justify-between items-center w-full">
        <div className="py-1">
          <Heading size={{ base: "sm", md: "md" }} pb=".2rem">
            {data?.fullName},
          </Heading>
          <div className="text-sm">Remember, drink enough water.</div>
        </div>
        <div className="">
          <Avatar name={data?.fullName} size={{ base: "sm", md: "md" }}>
            {data?.status === "ACTIVE" && (
              <AvatarBadge boxSize="1.25rem" bg="green.500" />
            )}
          </Avatar>
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
          data={23434 || 0}
          icon={<BsWallet />}
        />
        <DataCard
          title="groups"
          // bg="pink.500"
          data={data?.groups.length || 0}
          icon={<AiOutlineFundProjectionScreen />}
        />
        <DataCard
          title="total Cash"
          // bg="whatsapp.600"
          data={23434 || 0}
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

const DataCard = ({ bg, icon, title, data }: DataCardProps): JSX.Element => {
  return (
    <Box
      className="rounded-md w-full max-w-sm"
      bg={bg ? bg : "#fff"}
      color="#000"
      boxShadow="3px 6px 10px 0 rgb(0 102 245 / 7%)"
      border="1px solid rgba(0,102,245,.14)"
    >
      <div className="p-3 w-full flex justify-between items-center">
        <div className="px-2 text-4xl">{icon}</div>
        <div className="flex flex-col items-center p-3 justify-between">
          <Heading
            className="uppercase"
            fontWeight="400"
            fontSize="14px"
            as="h6"
            size="xs"
            pb={1}
          >
            {title}
          </Heading>
          <div className="text-xl font-bold">{data}</div>
        </div>
      </div>
    </Box>
  );
};
