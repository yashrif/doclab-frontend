import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import UserInfo from "./UserInfo.jsx";
import Schedule from "./Schedule.jsx";
import apiGet from "../hooks/apiGet.jsx";
import apiDelete from "../hooks/apiDelete.jsx";
import apiPut from "../hooks/apiPut.jsx";
import { SERVER } from "../assets/variable/values";

const Dashboard = ({ selectedPerson }) => {
  // Fetch Appointments
  const [appointments, , fetchAppointments] = apiGet();
  const [allAppointments, setAllAppointments] = useState([]);

  //Accepting an appointment
  const [acceptedAppointment, setAcceptedAppointment] = useState(true);
  const [changedAppointmentId, setChangedAppointmentId] = useState(null);
  const [responseData, , putData] = apiPut();
  const [responseDelete, , deleteAppointment] = apiDelete();

  useEffect(() => {
    if (changedAppointmentId != null && acceptedAppointment)
      putData(`${SERVER}/appointment/put/${changedAppointmentId}`);
    else if (changedAppointmentId != null && !acceptedAppointment) {
      deleteAppointment(`${SERVER}/appointment/delete/${changedAppointmentId}`);
    }
  }, [changedAppointmentId]);

  useEffect(() => {
    if (selectedPerson != null)
      fetchAppointments(
        `${SERVER}/appointment/listPatients/${selectedPerson.doctorID}`
      );
  }, [selectedPerson, responseData, responseDelete]);

  useEffect(() => {
    setAllAppointments(appointments);
  }, [appointments]);

  return (
    <Grid
      pt="8"
      pr="16"
      templateColumns="8fr 3fr"
      templateRows={"1fr"}
      gap="12"
      h="full"
    >
      <GridItem overflow="hidden">
        <UserInfo
          selectedPerson={selectedPerson}
          allAppointments={allAppointments}
          setAcceptedAppointment={setAcceptedAppointment}
          setChangedAppointmentId={setChangedAppointmentId}
          changedAppointmentId={changedAppointmentId}
        />
      </GridItem>
      <GridItem>
        <Schedule allAppointments={allAppointments} />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
