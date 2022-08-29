import React from "react";
import { Box } from "@chakra-ui/react";

const Container = ({ children, bg }) => {
  return (
    <Box bg={bg}>
      <Box maxW={"12xl"} px="32" mx={"auto"}>
        {children}
      </Box>
    </Box>
  );
};

export default Container;
