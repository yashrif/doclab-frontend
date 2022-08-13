import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Statistic from "./Statistic.jsx";
// import PendingAppointmets from "./PendingAppointments.jsx";
import UpcomingAppointments from "./UpcomingAppointments.jsx";
import ProfileCard from "../reusable/pageDetails/ProfileCard.jsx";
import fetchData from "../hooks/fetchData.jsx";

const Dashboard = () => {
  const [personList, errorMessage, fetchpersonList] = fetchData([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetchpersonList(`doctor`);
  }, []);

  console.log(personList);
  console.log(errorMessage);

  useEffect(() => {
    setSelectedPerson(personList[0]);
  }, [personList]);

  return (
    <Grid
      templateColumns="1fr"
      templateRows="auto auto 1fr"
      gap="16"
      height="100%"
      fontSize="xl"
      color="font.focused"
      bg="bgDarker"
      borderRadius="2xl"
      py="16"
      px="24"
      // overflow="hidden"
      // alignItems="strech"
    >
      <GridItem>
        {selectedPerson ? (
          <ProfileCard
            category="doctor"
            selectedPerson={selectedPerson}
            entity={["Name", "Speciality", "Degrees", "Rating", "Info"]}
            page="doctorDashboard"
          />
        ) : (
          <Box>No data</Box>
        )}
      </GridItem>

      <GridItem>
        <Statistic />
      </GridItem>

      {/* <GridItem>
        <PendingAppointmets />
      </GridItem> */}

      <GridItem overflow="hidden">
        <UpcomingAppointments />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
