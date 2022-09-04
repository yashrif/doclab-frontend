import React from "react";
import {
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import WidgetAppointment from "./WidgetAppointment.jsx";

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

  const renderedAppointments = [];

  for (let i = 0; i < 10; i++) {
    renderedAppointments.push(<WidgetAppointment key={i} />);
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
