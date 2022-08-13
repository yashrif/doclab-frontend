import React from "react";
import { Box, Grid, GridItem, Center } from "@chakra-ui/react";
import NavBar from "./NavBar.jsx";
import Search from "../reusable/Search.jsx";
import Dashboard from "./Dashboard.jsx";
// import Header from "../reusable/Header.jsx";

const DoctorDashboard = () => {
  return (
    <Box overflow="hidden">
      <Grid
        height="calc(100vh - 4.8rem)"
        maxW="1280px"
        mx="auto"
        my="24"
        padding="1.2rem 1.2rem 0"
        bg="bg"
        // overflow="hidden"
        templateColumns="auto 7fr 2fr"
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
        <GridItem>
          <Search bg="transparent" />
        </GridItem>
        <GridItem></GridItem>

        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem overflow="hidden">
          <Dashboard />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Box>
  );
};

export default DoctorDashboard;
