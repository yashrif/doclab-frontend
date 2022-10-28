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
  Center,
  Spinner,
} from "@chakra-ui/react";
import WidgetAppointment from "./reusable/WidgetAppointment.jsx";

const PendingAppointments = ({
  allAppointments,
  setChangedAppointmentId,
  setAcceptedAppointment,
  changedAppointmentId,
}) => {
  const [allPending, setAllPending] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (allAppointments != null)
      setAllPending(
        allAppointments?.filter(
          (appointment) => !appointment.appointmentAccepted
        )
      );
  }, [allAppointments]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInitialLoad(false);
    }, 5000);

    if (allAppointments?.length > 0) setInitialLoad(false);

    return () => clearTimeout(timeoutId);
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
      {!initialLoad ? (
        allPending?.length > 0 ? (
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

              <Tbody>
                {allPending.map((appointment) => (
                  <WidgetAppointment
                    appointment={appointment}
                    key={appointment.appointmentId}
                    setChangedAppointmentId={setChangedAppointmentId}
                    setAcceptedAppointment={setAcceptedAppointment}
                    changedAppointmentId={changedAppointmentId}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Center h={"100%"} w="100%">
            <Text fontSize={"16"} color={"gray.500"} fontWeight={"medium"}>
              No pending appointments
            </Text>
          </Center>
        )
      ) : (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary.base"
            size="xl"
          />
        </Center>
      )}
    </Box>
    // </Box>
  );
};

export default PendingAppointments;
