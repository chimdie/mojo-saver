import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    checkYear();
  });
  const checkYear = () => {
    if (year < 2021) {
      setYear("mojoSave year");
    }
    return year;
  };
  return (
    <Box as="footer">
      <Text width="100%" color="#767474" textAlign="center" paddingY={10}>
        Copyright © <span>{year}</span>. All rights by MojoSave
      </Text>
    </Box>
  );
}
