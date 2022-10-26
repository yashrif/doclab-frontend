import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonOutline = ({
  children,
  px,
  py,
  fontWeight,
  fontSize,
  onClick,
  isLoading,
  bg,
  borderColor,
}) => {
  return (
    <Button
      onClick={onClick}
      isLoading={isLoading}
      colorScheme="none"
      variant="none"
      textDecoration="none"
      fontSize={fontSize ? fontSize : "18"}
      fontWeight={fontWeight ? fontWeight : "medium"}
      letterSpacing=".25px"
      px={px}
      py={py}
      color="font.hero"
      border="none"
      borderRadius="xl"
      bg={bg ? bg : "bg"}
      boxShadow={`inset 0 0 0 0.25rem ${borderColor ? borderColor : "#fff"}`}
      transition="all 0.3s"
      _hover={{
        bg: "bgContainer",
        boxShadow: "inset 0 0 0 0.25rem #fff",
        // boxShadow: `inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0.8rem 1.6rem rgba(28, 126, 214, 0.5)`,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonOutline;
