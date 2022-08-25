import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const PatientSchedule = ({ bg }) => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "4.8rem",
    },
  };

  return (
    <Flex
      height="full"
      direction={"column"}
      px="16"
      py="20"
      bg={bg}
      borderRadius={"2xl"}
      boxShadow={`0 0 16px ${bg}40`}
    >
      <Flex alignItems={"center"} mb="8">
        <Text fontSize={"2xl"} fontWeight="semibold" letterSpacing={".5px"}>
          Next Appointment
        </Text>
        <Spacer />
        <ion-icon
          style={{
            color: "#555",
            fontSize: "1.6rem",
            ...style.icon,
          }}
          name="calendar-clear-outline"
        ></ion-icon>
      </Flex>

      <Text fontSize={"14"} fontWeight="medium" letterSpacing={".25px"}>
        {new Date().toLocaleString()}
      </Text>

      <Spacer />

      <Text fontSize={"12"} fontWeight="medium" color={"font.general"}>
        View Calendar
      </Text>
    </Flex>
  );
};

export default PatientSchedule;
