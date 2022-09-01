import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { RiStethoscopeLine } from "react-icons/ri";

const WidgetNextCheckup = () => {
  return (
    <Flex
      height="full"
      direction={"column"}
      px="20"
      py="20"
      bg={"#fff2ec"}
      borderRadius={"2xl"}
      boxShadow={`0 0 16px ${"#fff2ec"}40`}
    >
      <Flex alignItems={"center"} mb="8">
        <Text fontSize={"2xl"} fontWeight="medium">
          Next Checkup
        </Text>
        <Spacer />
        <RiStethoscopeLine
          style={{
            fontSize: "2rem",
            color: "#555",
          }}
        />
      </Flex>

      <Text fontSize={"14"} color="font.focused" fontWeight="regular">
        {" "}
        {new Date().toLocaleString()}
      </Text>

      <Spacer />

      <Text fontSize={"12"} fontWeight="regular" color={"font.muted"}>
        View Calendar
      </Text>
    </Flex>
  );
};

export default WidgetNextCheckup;
