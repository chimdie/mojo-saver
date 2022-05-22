import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardLayout } from "../../../layouts";
import { getUsersList } from "../../../redux/group";

export default function AllUsers() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DashboardLayout>
      <Box>
        {/* {JSON.stringify(users)} */}
        <Box className="flex flex-wrap grid-cols-1 md:grid-cols-3 gap-4">
          {users.map((user, i) => (
            <Box key={i} className="border-2 p-4 grid place-items-center ">
              <Text>Name: {user.fullName}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Phone: {user.phoneNumber}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </DashboardLayout>
  );
}
