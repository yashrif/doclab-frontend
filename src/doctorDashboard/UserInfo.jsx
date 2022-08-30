import React, { useState, useEffect } from "react";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Statistic from "./Statistic.jsx";
// import PendingAppointmets from "./PendingAppointments.jsx";
import PendingAppointments from "./PendingAppointments.jsx";
import ProfileCard from "../reusable/ProfileCard.jsx";
import fetchData from "../hooks/fetchData.jsx";

const UserInfo = () => {
  const [person, , fetchperson] = fetchData();
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetchperson(`doctor/${"48fd80a3-a0a1-40f6-99de-8875032e0da9"}`);
  }, []);

  useEffect(() => {
    setSelectedPerson(person);
  }, [person]);

  return (
    <Grid
      templateColumns="1fr"
      templateRows="auto auto 1fr"
      gap="16"
      height="full"
      width="ful"
      fontSize="xl"
      color="font.focused"
      bg="bgDarker"
      borderRadius="3xl"
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
          <Center minH="48">
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

      <GridItem>
        <Statistic />
      </GridItem>

      {/* <GridItem>
        <PendingAppointmets />
      </GridItem> */}

      <GridItem overflow="hidden">
        <PendingAppointments />
      </GridItem>
    </Grid>
  );
};

export default UserInfo;
