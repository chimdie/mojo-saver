import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { GroupCard, UserGroupCard } from "components";

export default function TabComponent({
  trendingGroups,
  myGroups,
  handleJoinGroup
}: {
  trendingGroups: [];
  myGroups: [];
  handleJoinGroup: any;
}) {
  return (
    <Tabs variant="soft-rounded" colorScheme="blue">
      <TabList pb="1rem">
        <Tab>Trending</Tab>
        <Tab>My Groups</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box className="flex gap-6 md:gap-10 flex-wrap">
            {trendingGroups?.map((group: any) => {
              return (
                <UserGroupCard
                  key={group?._id}
                  title={group.name}
                  description={group.description}
                  onClick={() => handleJoinGroup(group?._id)}
                />
              );
            })}
          </Box>
        </TabPanel>
        <TabPanel>
          {myGroups?.map((group: any) => {
            return (
              <GroupCard
                key={group?._id}
                title={group.name}
                description={group.description}
              />
            );
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
