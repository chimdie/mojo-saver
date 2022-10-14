import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { DashboardLayout } from "../../layouts";
import {
  landscapeImg,
  leavesImg,
  dancersImg,
  dancerImg
} from "../../assets/card";
import { GroupCard } from "../../components/";

export default function Groups() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const btnRef = React.useRef();

  const handleGroupOpen = (data: any | []) => {
    // eslint-disable-next-line no-console
    console.log(data.title);
    onOpen();
  };
  return (
    <DashboardLayout>
      <Box className="flex gap-6 md:gap-10 flex-wrap">
        {fakeGroups.map((group) => {
          return (
            <>
              <GroupCard
                key={group.id}
                title={group.title}
                description={group.description}
                img={group.img}
                onClick={() => handleGroupOpen(group)}
              />
            </>
          );
        })}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // size="md"
          size={{ base: "xs", md: "md" }}
          // initialFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            {/* <DrawerCloseButton /> */}
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              {/* <GroupCard
                key={group.id}
                title={group.title}
                description={group.description}
                img={group.img}
                onClick={() => handleGroupOpen(group)}
              /> */}
              <div>here children</div>
            </DrawerBody>

            <DrawerFooter
              display="flex"
              justifyContent="space-between"
              className="flex justify-between w-full"
            >
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </DashboardLayout>
  );
}

const fakeGroups = [
  {
    id: "ssffbb",
    title: "Umu Ada ",
    description: "Umu Ada Agegrade",
    img: dancerImg
  },
  {
    id: "sdsvf",
    title: "Help Alt",
    description: "Umu Ada Agegrade",
    img: leavesImg
  },
  {
    id: "afggrg",
    title: "Assu",
    description: "Umu Ada Agegrade",
    img: dancersImg
  },
  {
    id: "kjsffg",
    title: "Assu",
    description: "Umu Ada Agegrade",
    img: landscapeImg
  },
  {
    id: "sfdkj",
    title: "Assu",
    description: "Umu Ada Agegrade",
    img: landscapeImg
  }
];
