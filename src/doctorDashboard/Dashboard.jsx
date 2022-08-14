import React from "react";
import { Box, Grid, GridItem, Center } from "@chakra-ui/react";
import NavBar from "./NavBar.jsx";
import Search from "../reusable/Search.jsx";
import UserInfo from "./UserInfo.jsx";
import Schedule from "./Schedule.jsx";
import ProfileLink from "./ProfileLink.jsx";
// import Header from "../reusable/Header.jsx";

const Dashboard = () => {
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
          <Search bg="transparent" />
        </GridItem>
        <GridItem justifySelf={"end"} mr="36">
          <ProfileLink />
        </GridItem>

        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem overflow="hidden">
          <UserInfo />
        </GridItem>
        <GridItem>
          <Schedule />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
