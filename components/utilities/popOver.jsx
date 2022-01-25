import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function ControlledUsage({ isOpen, onClose, children }) {
  // const [open, seOpen] = React.useState(false);
  // const handleOpen = () => seOpen(!open);
  // const close = () => seOpen(false);
  return (
    <>
      {/* <Button mr={5} onClick={handleOpen}>
        Trigger
      </Button> */}
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        {/* <PopoverTrigger>
          <Button colorScheme="pink">Popover Target</Button>
        </PopoverTrigger> */}
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody />
          <PopoverFooter d="flex" justifyContent="flex-end">
            {/* <ButtonGroup size="sm">
              <Button variant="outline">Cancel</Button>
              <Button colorScheme="red">Apply</Button>
            </ButtonGroup> */}
            {children}
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
