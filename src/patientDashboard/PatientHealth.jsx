import React from "react";
import { Grid } from "@chakra-ui/react";
import WidgetHealth from "./widgets/WidgetHealth.jsx";

const PatientHealth = () => {
  return (
    // <Grid templateRows={"2fr 1fr"} templateColumns="1fr">
    <Grid
      templateColumns={"1fr 1fr"}
      templateRows={"1fr 1fr"}
      columnGap="36"
      rowGap="24"
    >
      <WidgetHealth
        title={"Blood Pressure"}
        description="In the room"
        value="120/89"
        unit="mm/Hg"
        cordY={[10, 20, 15, 25, 1, 6, 16, 10, 12, 12, 12]}
      />
      <WidgetHealth
        title={"Heart Rate"}
        description="Below the room"
        value="120"
        unit="bpm"
        cordY={[10, 5, 15, 25, 15, 26, 16, 10, 30, 14, 21]}
      />
      <WidgetHealth
        title={"Glucose"}
        description="Above the room"
        value="100"
        unit="mg/dl"
        cordY={[10, 5, 15, 7, 15, 26, 16, 20, 12, 14, 21]}
      />
      <WidgetHealth
        title={"RBC"}
        description="In the room"
        value="140"
        unit="ml/U"
        cordY={[10, 5, 15, 7, 15, 26, 16, 20, 12, 14, 21]}
      />
    </Grid>
    // <Grid templateColumns={"1fr 1fr 1fr"}></Grid>
    // </Grid>
  );
};

export default PatientHealth;
