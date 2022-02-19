import Link from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { caption, icon, href } = link;

  return (
    <Link href={href}>
      <a>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            color: "white",
            textDecoration: "underline",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                textDecoration: "underline",
              }}
              as={icon}
            />
          )}
          <Text fontSize="1.2rem">{caption}</Text>
        </Flex>
      </a>
    </Link>
  );
}
