import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonFull = ({
  children,
  px,
  py,
  bg,
  fontSize,
  fontWeight,
  color,
  bgHover,
  onClick,
  borderRadius,
  isLoading,
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="none"
      isLoading={isLoading}
      variant="none"
      textDecoration="none"
      fontSize={fontSize ? fontSize : "18"}
      fontWeight={fontWeight ? fontWeight : "medium"}
      letterSpacing=".25px"
      px={px}
      py={py}
      color={color ? color : "#fff"}
      border="none"
      // borderRadius="xl"
      borderRadius={`${borderRadius ? borderRadius : "xl"}`}
      // boxShadow={`inset 0 0 0 0.25rem primary.base`}
      transition="all 0.3s"
      bg={bg ? bg : "primary.400"}
      _hover={{
        color: "#fff",
        bg: `${bgHover ? bgHover : "primary.500"}`,
        boxShadow: `inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0.8rem 1.6rem rgba(28, 126, 214, 0.5)`,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonFull;
