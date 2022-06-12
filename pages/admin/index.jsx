import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { DashboardLayout } from "../../layouts";
import { getGroupList, getGroupMembers, getGroupById } from "../../redux/group";

export default function GroupList() {
  const dispatch = useDispatch();
  const { groups, groupUsers, currentGroup } = useSelector(
    (state) => state.group
  );

  useEffect(() => {
    dispatch(getGroupList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getGroupMembers());
    // console.log(groupUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupUsers]);

  const handleClick = () => {
    dispatch(getGroupById(currentGroup));
    // console.log(currentGroup);
  };
  return (
    <DashboardLayout>
      <Box overflowX="auto">
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Name</Th>
              <Th>Monthly Deposit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {groups.map((group) => {
              return (
                <Tr key={group.id}>
                  <Td></Td>
                  <Td>{group.name}</Td>
                  <Td>{group.monthlyDepositAmount}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <button onClick={handleClick}>click</button>
    </DashboardLayout>
  );
}
