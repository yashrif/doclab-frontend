import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonOutline = ({ children, px, py, fontWeight }) => {
  return (
    <Button
      colorScheme="none"
      variant="none"
      textDecoration="none"
      fontSize={"18"}
      fontWeight={fontWeight ? fontWeight : "bold"}
      letterSpacing=".25px"
      px={px}
      py={py}
      color="font.hero"
      border="none"
      // borderRadius="xl"
      borderRadius="full"
      bg={"bg"}
      // boxShadow={`inset 0 0 0 0.25rem ${theme.colors.primary.base}`}
      transition="all 0.3s"
      _hover={{
        bg: "bgContainer",
        boxShadow: "inset 0 0 0 3px #fff",
        // boxShadow: `inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0.8rem 1.6rem rgba(28, 126, 214, 0.5)`,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonOutline;
