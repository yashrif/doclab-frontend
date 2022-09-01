import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FaCapsules } from "react-icons/fa";

const WidgetNextMedicine = () => {
  return (
    <Flex
      height="full"
      direction={"column"}
      px="20"
      py="20"
      bg={"#d3f9d8"}
      borderRadius={"2xl"}
      boxShadow={`0 0 16px ${"#d3f9d8"}40`}
    >
      <Flex alignItems={"center"} mb="8">
        <Text fontSize={"2xl"} fontWeight="medium">
          Medicine
        </Text>
        <Spacer />
        <FaCapsules
          style={{
            fontSize: "2rem",
            color: "#555",
          }}
        />
      </Flex>

      <Text fontSize={"14"} color="font.focused" fontWeight="regular">
        Napa Extra 11.00 PM
      </Text>

      <Spacer />

      <Text fontSize={"12"} fontWeight="regular" color={"font.muted"}>
        View Calendar
      </Text>
    </Flex>
  );
};

export default WidgetNextMedicine;
