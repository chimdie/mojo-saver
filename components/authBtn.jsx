import { Button } from "@chakra-ui/react";

export default function AuthBtn({ caption, onClick }) {
  return (
    <Button
      type="submit"
      bg="#0b6d47"
      color="#fff"
      width="100%"
      paddingY="1.5rem"
      _hover={{ bg: "#0b6d47", textDecoration: "underline" }}
      _focus="#0b6d47"
      onClick={onClick}
    >
      {caption}
    </Button>
  );
}
