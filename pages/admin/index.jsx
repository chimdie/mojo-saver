import React from "react";
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

export default function GroupList() {
  return (
    <DashboardLayout>
      <Box overflow="auto">
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Monthly Deposit</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5].map((data) => {
              return (
                <Tr key={data.id}>
                  <Td>{data}</Td>
                  <Td>Akawoo</Td>
                  <Td>10,000</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </DashboardLayout>
  );
}
