import React from "react";
import { DashboardLayout } from "layouts";
import { Avatar, AvatarBadge, Box, Heading } from "@chakra-ui/react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsWallet } from "react-icons/bs";
import { useAppSelector } from "redux/hook";
import { DataCard } from "components";
import { userData } from "utils";
import useSWR from "swr";

export default function AdminHome(): JSX.Element {
  const { user } = useAppSelector((state: any) => state.account);

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data } = useSWR(`/users/${currentUserId}`);
  const { data: myGroups, error: myGrpsError } = useSWR(
    `/users/${currentUserId}/groups`
  );
  console.log(myGrpsError);
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
          title="investments"
          // bg="#0085FF"
          // color="#fff"
          data={data?.totalWalletAmount || 0}
          icon={<BsWallet />}
        />
        <DataCard
          title="groups created"
          // bg="pink.500"
          data={myGroups?.length || 0}
          icon={<HiOutlineUserGroup />}
        />
        <DataCard
          title="groups joined"
          // bg="whatsapp.600"
          data={data?.groups.length || 0}
          icon={<AiOutlineUsergroupAdd />}
        />
      </Box>
    </DashboardLayout>
  );
}
