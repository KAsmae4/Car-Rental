import React from "react";
import { Flex } from "@chakra-ui/react";

const HomePageVideo = () => {
  return (
    <Flex
      w="100%"
      h="100vh" // Adjust height if needed
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <video
        src="assets/images/cars.mp4" // Replace with your video path
        width="70%" // Adjust size
        autoPlay
        loop
        style={{ minWidth: "100%", minHeight: "100%" }} // Adjust size
        muted
        controls
      />
    </Flex>
  );
};

export default HomePageVideo;
