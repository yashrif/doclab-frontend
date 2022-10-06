import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, Center, Flex, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavBar from "../reusable/NavBar.jsx";
import Search from "../reusable/Search.jsx";
import UserInfo from "./UserInfo.jsx";
import Schedule from "./Schedule.jsx";
import ProfileLink from "../reusable/ProfileLink.jsx";
import theme from "../styling/theme.jsx";
import apiGet from "../hooks/apiGet.jsx";
import { SERVER } from "../assets/variable/values.js";
import apiPut from "../hooks/apiPut.jsx";
import apiDelete from "../hooks/apiDelete.jsx";

const Dashboard = () => {
  //Accepting an appointment
  const [acceptedAppointment, setAcceptedAppointment] = useState(true);
  const [changedAppointmentId, setChangedAppointmentId] = useState(null);
  const [responseData, , putData] = apiPut();
  const [responseDelete, , deleteAppointment] = apiDelete();
  const [term, setTerm] = useState("");

  // Fetch Logged in doctor
  const [person, , fetchPerson] = apiGet();
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Fetch Appointments
  const [appointments, , fetchAppointments] = apiGet();
  const [allAppointments, setAllAppointments] = useState(null);

  useEffect(() => {
    if (changedAppointmentId != null && acceptedAppointment)
      putData(`${SERVER}/appointment/put/${changedAppointmentId}`);
    else if (changedAppointmentId != null && !acceptedAppointment) {
      deleteAppointment(`${SERVER}/appointment/delete/${changedAppointmentId}`);
    }
  }, [changedAppointmentId]);

  useEffect(() => {
    fetchPerson(`${SERVER}/auth`, {
      headers: { TOKEN: localStorage.getItem("doctorToken") },
    });
  }, []);

  useEffect(() => {
    setSelectedPerson(person["authDoctor"]);
  }, [person]);

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
    <Box overflow="hidden" bg={"bgContainer"}>
      <Grid
        height="calc(100vh - 4.8rem)"
        maxW="1280px"
        mx="auto"
        my="24"
        padding="1.6rem 1.2rem 0"
        bg="bg"
        // overflow="hidden"
        templateColumns="auto 7fr 3fr"
        templateRows="auto 1fr"
        gap="12"
        borderRadius="3xl"
        alignItems="stretch"
      >
        <GridItem>
          <Center fontSize="4xl" color="font.focused" fontWeight="semibold">
            DocLab
          </Center>
        </GridItem>

        <GridItem>
          <Grid
            templateColumns={"1fr 1fr"}
            justifyContent={"space-between"}
            alignItems={"center"}
            px="64"
          >
            <GridItem>
              <Flex gap={"24"}>
                <Link
                  as={ReachLink}
                  to="/home"
                  fontSize={"16"}
                  fontWeight={"medium"}
                  color={"font.muted"}
                  borderBottom="0.1rem solid transparent"
                  _hover={{
                    color: `${theme.colors.primary.base}`,
                    borderBottom: "0.1rem solid currentColor",
                    textShadow: " 0 0.4rem 0.8rem rgba(28, 126, 214, 0.25)",
                    boxShadow:
                      "0 0.6rem 0.4rem -0.4rem rgba(28, 126, 214, 0.5)",
                  }}
                >
                  Home
                </Link>
                <Link
                  as={ReachLink}
                  to="/findDoctor"
                  fontSize={"16"}
                  fontWeight={"medium"}
                  color={"font.muted"}
                  borderBottom="0.1rem solid transparent"
                  _hover={{
                    color: `${theme.colors.primary.base}`,
                    borderBottom: "0.1rem solid currentColor",
                    textShadow: " 0 0.4rem 0.8rem rgba(28, 126, 214, 0.25)",
                    boxShadow:
                      "0 0.6rem 0.4rem -0.4rem rgba(28, 126, 214, 0.5)",
                  }}
                >
                  Find Doctor
                </Link>
                {/* <Link
                  as={ReachLink}
                  to="/patientDashboard"
                  fontSize={"16"}
                  fontWeight={"medium"}
                  color={"font.muted"}
                  borderBottom="0.1rem solid transparent"
                  _hover={{
                    color: `${theme.colors.primary.base}`,
                    borderBottom: "0.1rem solid currentColor",
                    textShadow: " 0 0.4rem 0.8rem rgba(28, 126, 214, 0.25)",
                    boxShadow:
                      "0 0.6rem 0.4rem -0.4rem rgba(28, 126, 214, 0.5)",
                  }}
                >
                  Dashboard
                </Link> */}
              </Flex>
            </GridItem>
            <GridItem justifySelf={"end"}>
              <Search
                term={term}
                setTerm={setTerm}
                bg="transparent"
                category="something..."
              />
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem justifySelf={"end"} mr="36">
          <ProfileLink imageUuid={selectedPerson?.doctorImageUUID} />
        </GridItem>

        <GridItem>
          <NavBar />
        </GridItem>
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
    </Box>
  );
};

export default Dashboard;
