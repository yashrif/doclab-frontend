import React from "react";
import { Grid } from "@chakra-ui/react";
import Calendar from "./Calendar.jsx";
// import WidgetUpcomingAppointments from "./reusable/WidgetUpcomingAppointments.jsx";
import TimelineUpcomingAppointments from "./reusable/TimelineUpcomingAppointments.jsx";

const Schedule = () => {
  const NumberOfRenders = 3;

  let renderedWidgets = [];

  for (let i = 0; i < NumberOfRenders; i++) {
    // renderedWidgets.push(<WidgetUpcomingAppointments key={i} i={i} />);

    renderedWidgets.push(
      <TimelineUpcomingAppointments
        key={i}
        i={i}
        dots={i === NumberOfRenders - 1 ? false : true}
      />
    );
  }

  return (
    <Grid templateColumns="1fr" templateRows="auto 1fr" gap="16" h="full">
      <Calendar />
      <Grid
        maxH={"full"}
        rowGap="4"
        templateRows={"1fr 1fr auto"}
        templateColumns={"1fr"}
        alignSelf="stretch"
        overflow="hidden"
        py={"24"}
      >
        {renderedWidgets}
      </Grid>
    </Grid>
  );
};

export default Schedule;
