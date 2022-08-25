import React from "react";
import { Grid } from "@chakra-ui/react";
import PatientSchedule from "./widget/WidgetSchedule.jsx";

const PatientScheduleWidgets = () => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap="16">
      <PatientSchedule bg="#f4f2ff" />

      <PatientSchedule bg="#fff2ec" />

      <PatientSchedule bg="#ecfbff" />
    </Grid>
  );
};

export default PatientScheduleWidgets;
