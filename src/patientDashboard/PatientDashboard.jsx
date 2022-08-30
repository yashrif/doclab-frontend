import React from "react";
import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import Search from "../reusable/Search.jsx";
import ProfileLink from "../reusable/ProfileLink.jsx";
import NavBar from "../reusable/NavBar.jsx";
import WidgetOverview from "./widgets/WidgetOverview.jsx";
import PatientHealth from "./PatientHealth.jsx";
import PatientSchedule from "./PatientSchedule.jsx";
import PatientActivities from "./PatientActivities.jsx";

const PatientDashboard = () => {
  return (
    <Box overflow="hidden">
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
          <Center fontSize="4xl" color="font.focused" fontWeight="bold">
            DocLab
          </Center>
        </GridItem>
        <GridItem justifySelf={"center"} w={"50%"}>
          <Search bg="transparent" category="something..." />
        </GridItem>
        <GridItem justifySelf={"end"} mr="36">
          <ProfileLink />
        </GridItem>

        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem overflow="hidden" colSpan={"2"} pt="16" pb="16" px="24">
          <Grid
            gridTemplateColumns="1fr 4fr"
            templateRows={"repeat(3, 1fr)"}
            alignItems="stretch"
            gap="24"
            height={"full"}
          >
            <GridItem rowSpan={"2"}>
              <WidgetOverview />
            </GridItem>

            <PatientHealth />

            <PatientSchedule />

            <GridItem colSpan={"2"} mb="8">
              <PatientActivities />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PatientDashboard;
