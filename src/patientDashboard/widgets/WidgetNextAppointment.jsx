import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { HiOutlineCalendar } from "react-icons/hi";

const WidgetNextAppointment = () => {
  return (
    <Flex
      height="full"
      direction={"column"}
      px="20"
      py="20"
      bg={"#f4f2ff"}
      borderRadius={"2xl"}
      boxShadow={`0 0 16px ${"#f4f2ff"}40`}
    >
      <Flex alignItems={"center"} mb="8">
        <Text fontSize={"2xl"} fontWeight="medium">
          Next Appointment
        </Text>
        <Spacer />
        <HiOutlineCalendar
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

export default WidgetNextAppointment;
