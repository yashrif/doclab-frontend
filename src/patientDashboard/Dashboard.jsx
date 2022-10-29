import React, { useState, useEffect } from "react";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import apiGet from "../hooks/apiGet.jsx";
import { SERVER } from "../assets/variable/values";
import WidgetOverview from "./widgets/WidgetOverview.jsx";
import PatientHealth from "./PatientHealth.jsx";
import PatientSchedule from "./PatientSchedule.jsx";
import PatientActivities from "./PatientActivities.jsx";

const Dashboard = ({ selectedPerson }) => {
  const TODAY = new Date();

  // Fetch Appointments
  const [appointments, , fetchAppointments] = apiGet();
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  // Appointments

  useEffect(() => {
    if (selectedPerson != null)
      fetchAppointments(
        `${SERVER}/appointment/getByPatient/${selectedPerson.patientId}`
      );
  }, [selectedPerson]);

  useEffect(() => {
    if (appointments != null)
      setAcceptedAppointments(
        appointments.filter((appointment) => {
          return (
            appointment.appointmentAccepted &&
            new Date(appointment.appointmentSlotDate) >= TODAY &&
            new Date(appointment.appointmentSlotDate).toDateString() <=
              TODAY.toDateString()
          );
        })
      );
  }, [appointments]);

  return (
    <Grid
      gridTemplateColumns="1fr 4fr"
      templateRows={"repeat(3, 1fr)"}
      alignItems="stretch"
      columnGap="24"
      rowGap="32"
      pt="8"
      px="16"
      h="full"
    >
      <GridItem rowSpan={"2"}>
        {selectedPerson ? (
          <WidgetOverview selectedPerson={selectedPerson} />
        ) : (
          <Center h="full" w="full">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.base"
              size="xl"
            />
          </Center>
        )}
      </GridItem>

      <PatientHealth />

      <PatientSchedule appointments={acceptedAppointments} />

      <GridItem colSpan={"2"} mb="8">
        <PatientActivities />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
