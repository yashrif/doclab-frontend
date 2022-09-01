import React from "react";
import { Grid } from "@chakra-ui/react";
import WidgetNextAppointment from "./widgets/WidgetNextAppointment.jsx";
import WidgetNextCheckup from "./widgets/WidgetNextCheckup.jsx";
import WidgetNextMedicine from "./widgets/WidgetNextMedicine.jsx";

const WidgetNextAppointmentWidgets = () => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap="16">
      <WidgetNextAppointment />

      <WidgetNextCheckup />

      <WidgetNextMedicine />
    </Grid>
  );
};

export default WidgetNextAppointmentWidgets;
