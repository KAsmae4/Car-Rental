import React from "react";
import { Flex } from "@chakra-ui/react";

const HomePageImage = () => {
  return (
    <Flex
      w="100%"
      h="100vh" 
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <img
        src="assets/images/banner.png" // Replace with your image path
        alt="Image"
        width="100%" // Adjust size
        style={{ minWidth: "100%", minHeight: "100%" }}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </Flex>
  );
};

export default HomePageImage;
