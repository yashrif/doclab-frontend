import React, { useEffect, useState } from "react";
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

const PendingAppointments = ({
  allAppointments,
  setChangedAppointmentId,
  setAcceptedAppointment,
}) => {
  const [allPending, setAllPending] = useState([]);
  useEffect(() => {
    if (allAppointments != null)
      setAllPending(
        allAppointments.filter(
          (appointment) => !appointment.appointmentAccepted
        )
      );
  }, [allAppointments]);

  const TableHeads = ["Name", "Age", "Date", "Time", "Action"];

  const renderedTableHeads = TableHeads.map((value, index) => {
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
            <Tr>{renderedTableHeads}</Tr>
          </Thead>
          {allPending != null && (
            <Tbody>
              {allPending.map((appointment) => (
                <WidgetAppointment
                  appointment={appointment}
                  key={appointment.appointmentId}
                  setChangedAppointmentId={setChangedAppointmentId}
                  setAcceptedAppointment={setAcceptedAppointment}
                />
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </Box>
    // </Box>
  );
};

export default PendingAppointments;
