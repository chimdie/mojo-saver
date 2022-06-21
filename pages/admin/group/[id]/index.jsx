import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";
import { DashboardLayout } from "../../../../layouts";
import { getGroupMembers } from "../../../../redux/group";

export default function GroupUsers() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { groupUsers } = useSelector((state) => state.group);

  React.useEffect(() => {
    if (query.id) dispatch(getGroupMembers(query.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <DashboardLayout>
      group-users
      <Box className="flex flex-wrap grid-cols-1 md:grid-cols-3 gap-4">
        {/* {users.map((user, i) => ( */}
        <Box className="border-2 p-4 grid place-items-center ">
          <Text>Name: </Text>
          <Text>Email: </Text>
          <Text>Phone: </Text>
        </Box>
        {/* ))} */}
      </Box>
    </DashboardLayout>
  );
}
