import React from "react";
import { Grid } from "@chakra-ui/react";
import WidgetActivities from "./widget/WidgetActivities.jsx";

const PatientActivities = () => {
  return (
    <Grid
      height={"full"}
      alignItems={"stretch"}
      templateColumns={"repeat(3, 1fr)"}
      gap="24"
    >
      <WidgetActivities />
      <WidgetActivities />
      <WidgetActivities />
    </Grid>
  );
};

export default PatientActivities;
