import React from "react";
import { Box, Grid, GridItem, Center, Flex,Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavBar from "../reusable/NavBar.jsx";
import Search from "../reusable/Search.jsx";
import UserInfo from "./UserInfo.jsx";
import Schedule from "./Schedule.jsx";
import ProfileLink from "../reusable/ProfileLink.jsx";
import theme from "../styling/theme.jsx";
// import Header from "../reusable/Header.jsx";

const Dashboard = () => {
  return (
    <Box overflow="hidden"  bg={"bgContainer"}>
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
                <Link
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
                </Link>
              </Flex>
            </GridItem>
            <GridItem justifySelf={"end"}>
              <Search bg="transparent" category="something..." />
            </GridItem>
          </Grid>
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
