import React from "react";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Image,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const PendingAppointments = () => {
  const TableHeads = ["Name", "Age", "Date", "Time", "Action"];

  const renderedTableHealds = TableHeads.map((value, index) => {
    return (
      <Th
        key={index}
        // width="25%"
        fontSize="14"
        fontWeight="medium"
        color="font.muted"
        py="16"
        textTransform="none"
        // textAlign="center"
      >
        {value}
      </Th>
    );
  });

  const style = {
    icon: {
      "--ionicon-stroke-width": "3.6rem",
    },
  };

  const ActionIcons = [
    { icon: "close-circle-outline", iconColor: "#ff6b6b" },
    { icon: "checkmark-circle-outline", iconColor: "#40c057" },
  ];

  const renderedActionIcons = ActionIcons.map((value, index) => {
    return (
      <ion-icon
        key={index}
        name={value.icon}
        style={{ color: value.iconColor, fontSize: "2rem", ...style.icon }}
      ></ion-icon>
    );
  });

  const renderedAppointments = [];

  for (let i = 0; i < 10; i++) {
    renderedAppointments.push(
      <Tr
        key={i}
        cursor="pointer"
        color="font.focused"
        fontSize="lg"
        fontWeight="regular"
        transition="all 0.3s"
        borderRadius="2xl"
        _hover={{ boxShadow: "0 0.6rem 1.2rem rgba(0, 0, 0, 0.08)" }}
      >
        <Td overflow="hidden" py="8" px="16">
          <Flex columnGap="12" alignItems="center">
            <Image
              src={faker.image.avatar()}
              alt="avatar"
              boxSize="3.6rem"
              borderRadius="full"
            />
            <Text>{faker.name.findName()}</Text>
          </Flex>
        </Td>
        <Td overflow="hidden" px="16">
          {Math.floor(Math.random() * 80)}
        </Td>
        <Td overflow="hidden" px="16">
          {new Date().toDateString()}
        </Td>
        <Td overflow="hidden" px="16">
          {new Date().toLocaleTimeString()}
        </Td>
        <Td>
          <Flex alignItems="center" columnGap="12">
            {renderedActionIcons}
          </Flex>
        </Td>
      </Tr>
    );
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="auto 1fr"
      alignItems="stretch"
      gap="12"
      height="full"
      overflow="hidden"
      bg="bg"
      borderRadius="2xl"
      boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.01)"

      // border="1px solid #e6e6e6"
    >
      <Text
        fontSize="xl"
        color="font.focused"
        fontWeight="semibold"
        // align="center"
        ml="28"
        mt="16"
      >
        Pending Appointments
      </Text>
      {/* <Box overflowY="scroll"> */}
      <TableContainer
        // py="24"
        maxW="full"
        px="12"
        bg="bg"
        // justifyContent="space-around"
        overflowY="scroll"
        // height="80%"
        // overflow="scroll"
      >
        <Table variant="unstyled">
          <Thead>
            <Tr>{renderedTableHealds}</Tr>
          </Thead>
          <Tbody>{renderedAppointments}</Tbody>
        </Table>
      </TableContainer>
    </Box>
    // </Box>
  );
};

export default PendingAppointments;
