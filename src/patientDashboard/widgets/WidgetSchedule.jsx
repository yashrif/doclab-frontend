import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const WidgetNextAppointment = ({ icon, bg, heading, content }) => {
  return (
    <Flex
      height="full"
      direction={"column"}
      px="20"
      py="16"
      bg={bg}
      borderRadius={"2xl"}
      boxShadow={`0 0 1.6rem ${"#f4f2ff"}40`}
    >
      <Flex alignItems={"center"} mb="4">
        <Text fontSize={"2xl"} fontWeight="medium">
          {heading}
        </Text>

        <Spacer />

        {icon}
      </Flex>

      <Text fontSize={"14"} color="font.general" fontWeight="regular" mb="8">
        {content}
      </Text>

      <Spacer />

      <Text fontSize={"12"} fontWeight="regular" color={"font.muted"}>
        View Calendar
      </Text>
    </Flex>
  );
};

export default WidgetNextAppointment;
