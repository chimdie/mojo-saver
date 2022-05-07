import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { DashboardLayout } from "../../../layouts";
import { GroupCard } from "../../../components/dashboard";
import { getGroupList } from "../../../redux/group";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { groups } = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getGroupList());
  }, []);
  return (
    <DashboardLayout>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((group) => {
          return (
            <div key={group.id} className="py-2">
              <GroupCard
                title={group.name}
                amount={group.monthlyDepositAmount}
                description={group.description}
                id={group.id}
              />
            </div>
          );
        })}
      </Box>
    </DashboardLayout>
  );
}
