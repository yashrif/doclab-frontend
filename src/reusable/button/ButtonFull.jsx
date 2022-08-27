import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonFull = ({ children, px, py, fontSize, fontWeight }) => {
  return (
    <Button
      colorScheme="none"
      variant="none"
      textDecoration="none"
      fontSize={fontSize}
      fontWeight={fontWeight ? fontWeight : "bold"}
      letterSpacing=".25px"
      px={px}
      py={py}
      color="#fff"
      border="none"
      // borderRadius="xl"
      borderRadius="full"
      // boxShadow={`inset 0 0 0 0.25rem ${theme.colors.primary.base}`}
      transition="all 0.3s"
      bg="primary.400"
      _hover={{
        color: "#fff",
        bg: "primary.500",
        boxShadow: `inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0.8rem 1.6rem rgba(28, 126, 214, 0.5)`,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonFull;
