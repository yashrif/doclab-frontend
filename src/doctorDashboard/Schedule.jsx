import React from "react";
import { Grid } from "@chakra-ui/react";
// import { Text, Box } from "@chakra-ui/react";
import Calendar from "./Calendar.jsx";
import UpcomingAppointmets from "./UpcomingAppointments.jsx";

const Schedule = () => {
  return (
    <Grid templateColumns="1fr" templateRows="auto 1fr" gap="16" h="full">
      <Calendar />
      <UpcomingAppointmets />
    </Grid>
  );
};

export default Schedule;
