import React, {useEffect, useState} from "react";
import { Grid, GridItem, Box, Center, Flex, Link } from "@chakra-ui/react";
import Search from "../reusable/Search.jsx";
import ProfileLink from "../reusable/ProfileLink.jsx";
import { Link as ReachLink } from "react-router-dom";
import NavBar from "../reusable/NavBar.jsx";
import WidgetOverview from "./widgets/WidgetOverview.jsx";
import PatientHealth from "./PatientHealth.jsx";
import PatientSchedule from "./PatientSchedule.jsx";
import PatientActivities from "./PatientActivities.jsx";
import theme from "../styling/theme.jsx";
import apiGet from "../hooks/apiGet.jsx";
import { SERVER } from "../assets/variable/values.js";

const PatientDashboard = () => {

  const [person, , fetchperson] = apiGet();
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetchperson(`${SERVER}/auth`, {
      headers: { TOKEN: localStorage.getItem("patientToken") },
    });
  }, []);

  useEffect(() => {
    console.log(person["authPatient"]);
    setSelectedPerson(person["authPatient"]);
  }, [person]);

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
        templateColumns="auto 1fr auto"
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
          <Grid
            templateColumns={"1fr 1fr"}
            justifyContent={"space-between"}
            alignItems={"center"}
            px="64"
          >
            <GridItem>
              <Flex gap={"24"}>
                <Link
                as ={ReachLink}
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
                as ={ReachLink}
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
                as ={ReachLink}
                  to="/doctorDashboard"
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
        <GridItem overflow="hidden" colSpan={"2"} pt="16" pb="16" px="24">
          <Grid
            gridTemplateColumns="1fr 4fr"
            templateRows={"repeat(3, 1fr)"}
            alignItems="stretch"
            columnGap="24"
            rowGap="32"
            height={"full"}
          >
            <GridItem rowSpan={"2"}>
             {selectedPerson && <WidgetOverview selectedPerson={selectedPerson}/>}
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
