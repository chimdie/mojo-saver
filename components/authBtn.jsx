import { Button } from "@chakra-ui/react";

export default function AuthBtn({ caption, onClick }) {
  return (
    <Button
      type="submit"
      bg="whatsapp.600"
      color="#fff"
      width="100%"
      paddingY="1.5rem"
      _hover={{ bg: "whatsapp.600", textDecoration: "underline" }}
      _focus={{ bg: "whatsapp.600" }}
      onClick={onClick}
    >
      {caption}
    </Button>
  );
}
