import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Search from "../reusable/Search.jsx";
import Statisttic from "./Statistic.jsx";
import Schedule from "./Schedule.jsx";
import UpcomingAppointments from "./UpcomingAppointments.jsx";

const Dashboard = () => {
  return (
    <Grid
      templateColumns="9fr 4fr"
      my="48"
      // mx="24"
      height="100%"
      fontSize="xl"
      color="font.focused"
      overflow="hidden"
    >
      <GridItem height="100%" overflow="hidden">
        <Box mb="24">
          <Search bg="transparent" />
        </Box>
        <Box p="24" height="full" overflow="hidden" bg="bgDarker" borderRadius="2xl">
          <Box mb="24">
            <Statisttic />
          </Box>
          <Box>
            <Schedule />
          </Box>
          <Box mb="24" height="100%" overflow="hidden">
            <UpcomingAppointments />
          </Box>
        </Box>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};

export default Dashboard;
