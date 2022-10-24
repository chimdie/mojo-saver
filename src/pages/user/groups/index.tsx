import React from "react";
import useSWR from "swr";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { GroupCard, UserGroupCard } from "components";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import { getSelectedGroup, joinAGroup } from "pages/admin/slices/groupSlice";

export default function Groups(): JSX.Element {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: any) => state.account);
  const { currentGroup } = useAppSelector((state: any) => state.group);

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data: trendingGroups, error: trendingGrpError } = useSWR("/groups/");
  const { data: myGroups, error: userGrpError } = useSWR(
    `/users/${currentUserId}`
  );

  const handleOpenGroup = (id: string) => {
    dispatch(getSelectedGroup(id));
  };

  const handleJoinGroup = () => {
    dispatch(joinAGroup({ groupId: currentGroup?._id, userId: currentUserId }));
  };

  // TODO Loading status and error messages proper implementations
  if (trendingGrpError || userGrpError)
    return (
      <DashboardLayout>
        <Box>An error occurred</Box>
      </DashboardLayout>
    );
  if (!trendingGroups || !myGroups)
    return (
      <DashboardLayout>
        <Box>Loading...</Box>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList pb="1rem">
          <Tab>Trending</Tab>
          <Tab>My Groups</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box className="flex gap-6 md:gap-10 flex-wrap">
              {trendingGroups?.length === 0 ? (
                <Box>No Groups available</Box>
              ) : (
                trendingGroups?.map((group: any) => {
                  return (
                    <UserGroupCard
                      key={group?._id}
                      title={group.name}
                      description={group.description}
                      onClick={() => handleOpenGroup(group?._id)}
                      handleJoinGroup={() => handleJoinGroup()}
                    />
                  );
                })
              )}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box className="flex gap-6 md:gap-10 flex-wrap">
              {myGroups?.length === 0 ? (
                <Box>You're yet to join any group</Box>
              ) : (
                myGroups?.groups?.map((group: any) => {
                  return (
                    <GroupCard
                      key={group?._id}
                      title={group?.name}
                      description={group?.description}
                    />
                  );
                })
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardLayout>
  );
}
