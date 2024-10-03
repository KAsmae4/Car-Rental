import { Container, Flex } from "@chakra-ui/react";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ variant, sidebarContent, links, buttons }) => {
  return (
    <Container maxWidth="1720px" px={[8, 8, 8]}>
      <nav className="navbar navbar-expand-lg">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          bg={variant === "dashboard" ? "white" : "black"} // Background color based on variant
          color={variant === "dashboard" ? "gray.700" : "white"} // Text color based on variant
          borderColor="blackAlpha.300"
          h="14"
        >
          {sidebarContent}
          {links}
          {buttons}
        </Flex>
      </nav>
    </Container>
  );
};

export default Navbar;