import React from "react";
import { DashboardLayout } from "layouts";
import { Avatar, AvatarBadge, Box, Heading, Text } from "@chakra-ui/react";
import { BsWallet } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useAppSelector } from "redux/hook";
import { DataCard } from "components";
import { userData } from "utils";
import useSWR from "swr";

export default function Home(): JSX.Element {
  const { user } = useAppSelector((state: any) => state.account);

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data } = useSWR(`/users/${currentUserId}`);
  return (
    <DashboardLayout>
      <header className="flex justify-between items-center w-full">
        <div className="py-1">
          <Heading
            size={{ base: "md", md: "lg" }}
            pb=".2rem"
            textTransform="capitalize"
          >
            {data?.fullName},
          </Heading>
          <Text fontSize="16px" fontWeight="300">
            Drink enough water today.
          </Text>
        </div>
        <div className="">
          <Avatar name={data?.fullName} size={{ base: "sm", md: "md" }}>
            {data?.status === "ACTIVE" ? (
              <AvatarBadge boxSize="1.25rem" bg="green.500" />
            ) : (
              <AvatarBadge boxSize="1.25rem" bg="tomato" />
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
          title="investments"
          // bg="#0085FF"
          data={data?.totalWalletAmount || 0}
          icon={<BsWallet />}
        />
        <DataCard
          title="groups"
          // bg="pink.500"
          data={data?.groups.length || 0}
          icon={<AiOutlineFundProjectionScreen />}
        />
      </Box>
    </DashboardLayout>
  );
}
