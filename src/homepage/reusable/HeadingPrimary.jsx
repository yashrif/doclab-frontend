import React from "react";
import { Text } from "@chakra-ui/react";

const HeadingSecondary = ({ children }) => {
  return (
    <Text
      textTransform={"uppercase"}
      textAlign={"center"}
      fontSize={"16"}
      fontWeight={"medium"}
      color={"primary.base"}
      pb={"16"}
    >
      {children}
    </Text>
  );
};

export default HeadingSecondary;
