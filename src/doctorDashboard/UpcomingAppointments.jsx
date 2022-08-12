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
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const UpcomingAppointments = () => {
  const renderedAppointments = [];

  for (let i = 0; i < 10; i++) {
    renderedAppointments.push(
      <Tr
        key={i}
        color="font.focused"
        fontSize="lg"
        fontWeight="medium"
        transition="all 0.3s"
        borderRadius="2xl"
        _hover={{ boxShadow: "0 0.6rem 1.2rem rgba(0, 0, 0, 0.08)" }}
      >
        <Td overflow="hidden" py="8">
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
        <Td overflow="hidden">{faker.company.companyName()}</Td>
        <Td overflow="hidden">{new Date().toDateString()}</Td>
        <Td overflow="hidden">{new Date().toLocaleTimeString()}</Td>
      </Tr>
    );
  }

  return (
    <>
      <Text fontSize="2xl" color="font.focused" fontWeight="bold" mb="16">
        Upcoming Appointments
      </Text>

      <TableContainer
        maxW="full"
        px="16"
        bg="bg"
        justifyContent="space-around"
        py="24"
        borderRadius="2xl"
        boxShadow="0 0.2rem 0.4rem rgba(0, 0, 0, 0.01)"
        height="40%"
        overflow="scroll"
      >
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th
                width="25%"
                fontSize="14"
                fontWeight="medium"
                color="font.muted"
                py="16"
                textAlign="center"
              >
                Name
              </Th>
              <Th
                width="25%"
                fontSize="14"
                fontWeight="medium"
                color="font.muted"
                py="16"
                textAlign="center"
              >
                Disease
              </Th>
              <Th
                width="25%"
                fontSize="14"
                fontWeight="medium"
                color="font.muted"
                py="16"
                textAlign="center"
              >
                Date
              </Th>
              <Th
                width="25%"
                fontSize="14"
                fontWeight="medium"
                color="font.muted"
                py="16"
                textAlign="center"
              >
                Time
              </Th>
            </Tr>
          </Thead>
          <Tbody>{renderedAppointments}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UpcomingAppointments;
