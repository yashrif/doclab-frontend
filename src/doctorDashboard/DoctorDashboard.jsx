import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar.jsx";
import Dashboard from "./Dashboard.jsx";
// import Header from "../reusable/Header.jsx";

const DoctorDashboard = () => {
  return (
    <Box h="full" overflow="hidden">
      <Grid
        templateColumns="1fr 6fr"
        gap="24"
        bg="bg"
        borderRadius="3xl"
        height="calc(100vh - 4.8rem)"
        maxW="1200"
        mx="auto"
        my="24"
        overflow="hidden"
      >
        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem height="100%" overflow="hidden">
          <Dashboard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DoctorDashboard;
