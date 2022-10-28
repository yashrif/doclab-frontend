import React from "react";
import { Text } from "@chakra-ui/react";

const HeadingHeading = ({ children, mb }) => {
  return (
    <Text
      textTransform={"capitalize"}
      textAlign="center"
      color={"font.hero"}
      fontSize="4.4rem"
      fontWeight={"bold"}
      lineHeight="1.2"
      marginBottom={mb ? mb : "9.6rem"}
    >
      {children}
    </Text>
  );
};

export default HeadingHeading;
