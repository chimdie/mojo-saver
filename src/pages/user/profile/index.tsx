import React from "react";
import {
  Heading,
  Box,
  Text,
  Avatar,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import useSWR from "swr";

import { DashboardLayout } from "layouts";
import { smVariant, mdVariant } from "layouts/dashboardLayout";
import { useAppSelector } from "redux/hook";
import { userData } from "utils";
import { PageLoader } from "components";

export default function Profile() {
  const { user } = useAppSelector((state: any) => state.account);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data } = useSWR(`/users/${currentUserId}`);
  // console.log(data);

  return (
    <DashboardLayout>
      <PageLoader>
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
                    <Heading size={{ base: "md", md: "lg" }} pb=".2rem">
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
        <Box py="1rem">
          <Image
            src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/invest_opps.jpg"
            sizes="sm"
            borderRadius="10px"
          />
        </Box>
      </PageLoader>
    </DashboardLayout>
  );
}
