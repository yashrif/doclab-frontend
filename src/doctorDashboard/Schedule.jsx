import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
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
          const time1String = appointment.appointmentTime
            .slice(0, 5)
            .split(":");
          const time2String = selectedDate
            .toLocaleTimeString()
            .toString()
            .slice(0, 5)
            .split(":");

          let time1 =
            parseInt(time1String[0]) +
            parseInt(time1String[1]) / 100 +
            (appointment.appointmentTime.includes("PM") ? 12 : 0);

          let time2 =
            parseInt(time2String[0]) +
            parseInt(time2String[1]) / 100 +
            (selectedDate.toLocaleTimeString().toString().includes("PM")
              ? 12
              : 0) -
            (parseInt(time2String[0]) == 12 ? 12 : 0);

          return (
            appointment.appointmentAccepted &&
            appointment.appointmentDate == selectedDate.toDateString() &&
            time2 < time1 &&
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
          key={index}
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
        py={"24"}
      >
        {renderedWidgets}
      </Grid>
    </Grid>
  );
};

export default Schedule;
