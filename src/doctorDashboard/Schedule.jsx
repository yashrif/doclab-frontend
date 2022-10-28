import React, { useState, useEffect } from "react";
import { Center, Grid, Text } from "@chakra-ui/react";
import Calendar from "./Calendar.jsx";
import TimelineUpcomingAppointments from "./reusable/TimelineUpcomingAppointments.jsx";
// import WidgetUpcomingAppointments from "./reusable/WidgetUpcomingAppointments.jsx";

const Schedule = ({ allAppointments }) => {
  const NUMBER_OF_RENDERS = 3;
  let renderedWidgets = [];
  const TODAY = new Date();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  useEffect(() => {
    if (allAppointments != null)
      setAcceptedAppointments(
        allAppointments.filter((appointment) => {
          return (
            appointment.appointmentAccepted &&
            new Date(appointment.appointmentSlotDate) >= selectedDate &&
            new Date(appointment.appointmentSlotDate).toDateString() ==
              selectedDate.toDateString() &&
            selectedDate >= TODAY
          );
        })
      );
  }, [allAppointments, selectedDate]);

  // console.log(allAppointments);

  acceptedAppointments.map((acceptedAppointment, index) => {
    // renderedWidgets.push(<WidgetUpcomingAppointments key={i} i={i} />);

    if (index < NUMBER_OF_RENDERS)
      renderedWidgets.push(
        <TimelineUpcomingAppointments
          key={index + selectedDate.getDay()}
          i={index}
          dots={
            index === NUMBER_OF_RENDERS - 1 ||
            index === acceptedAppointments.length - 1
              ? false
              : true
          }
          acceptedAppointment={acceptedAppointment}
        />
      );
  });

  return (
    <Grid templateColumns="1fr" templateRows="auto 1fr" gap="16" h="full">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Grid
        maxH={"full"}
        rowGap="4"
        templateRows={"1fr 1fr auto"}
        templateColumns={"1fr"}
        alignSelf="stretch"
        overflow="hidden"
        py={"32"}
      >
        {renderedWidgets.length > 0 ? (
          renderedWidgets
        ) : (
          <Center gridRow={"1 / -1"}>
            <Text fontSize={"14"} color={"gray.500"} fontWeight={"medium"}>
              No Upcoming events
            </Text>
          </Center>
        )}
      </Grid>
    </Grid>
  );
};

export default Schedule;
