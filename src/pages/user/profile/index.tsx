import React from "react";
import {
  Heading,
  Box,
  Text,
  Avatar,
  useBreakpointValue
} from "@chakra-ui/react";
import useSWR from "swr";

import { DashboardLayout } from "layouts";
import { smVariant, mdVariant } from "layouts/dashboardLayout";
import { useAppSelector } from "redux/hook";
import { userData } from "utils";
import { DataCard } from "components";
import { BsWallet } from "react-icons/bs";

export default function Profile() {
  const { user } = useAppSelector((state: any) => state.account);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data } = useSWR(`/users/${currentUserId}`);
  console.log(data);

  return (
    <DashboardLayout>
      <Box as="header" className="flex w-full items-center justify-between">
        <Box className="flex flex-col">
          <Heading size={{ base: "md", md: "lg" }} pb=".2rem">
            My Account
          </Heading>
          <Text fontSize="16px" fontWeight="300">
            Wash your hands 👋🏼
          </Text>
        </Box>
        <Box as="section" py="1rem">
          <Box className="flex md:flex-col md:items-center">
            <Avatar size={{ base: "md", md: "lg" }} name={data?.fullName} />
            {variants?.navigation === "mobileNav" ? (
              <></>
            ) : (
              <>
                <Box>
                  <Heading
                    size={{ base: "md", md: "lg" }}
                    pb=".2rem"
                    textTransform="capitalize"
                  >
                    {data?.fullName}
                  </Heading>
                  <Text>{data?.emailAddress}</Text>
                </Box>
                <Box></Box>
              </>
            )}
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-wrap gap-4  md:gap-8 w-full justify-evenly">
        <DataCard
          title="phone Number"
          // bg="#0085FF"
          data={data?.phoneNumber}
          icon={<BsWallet />}
        />
        <DataCard
          title="email Address"
          // bg="#0085FF"
          data={data?.emailAddress}
          icon={<BsWallet />}
        />
        <DataCard
          title="bank AccountNumber"
          // bg="#0085FF"
          data={data?.bankAccountNumber}
          icon={<BsWallet />}
        />

        <DataCard
          title="bvn"
          // bg="#0085FF"
          data={data?.bvn}
          icon={<BsWallet />}
        />
      </Box>
    </DashboardLayout>
  );
}
