import React from "react";
import { Grid } from "@chakra-ui/react";
import WidgetActivities from "./widgets/WidgetActivities.jsx";

const PatientActivities = () => {
  const content = [
    ["High BP", "Diabets"],
    ["High BP", "Diabets"],
    ["High BP", "Diabets"],
  ];

  return (
    <Grid
      // height={"full"}
      // alignItems={"stretch"}
      templateColumns={"repeat(3, 1fr)"}
      gap="24"
      py="12"
    >
      <WidgetActivities
        icon={"arrow-forward-outline"}
        heading="Recent Activities"
        content={content[2]}
        colorBorder="#d0ebff"
        // bg="#d0ebff"
      />
      <WidgetActivities
        icon={"alert-circle-outline"}
        heading="Problem List"
        content={content[2]}
        colorBorder="#ffdeeb"
        // bg="#ffdeeb"
      />
      <WidgetActivities
        icon={"alert-circle-outline"}
        heading="Allergy List"
        content={content[2]}
        colorBorder="#ffe8cc"
        // bg="#ffe8cc"
      />
    </Grid>
  );
};

export default PatientActivities;
