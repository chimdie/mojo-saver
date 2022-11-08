import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export default function callToast(
  title: string,
  status: "info" | "warning" | "success" | "error",
  description: string,
  duration = 5000,
  isClosable = true,
  position:
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right" = "top-right"
) {
  return toast({
    position: position,
    title: title,
    description: description,
    status: status,
    duration: duration,
    isClosable: isClosable
  });
}
