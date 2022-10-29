import React, { useEffect, useState } from "react";
import { Grid, GridItem, Box, Center, Flex, Link } from "@chakra-ui/react";
import {
  Link as ReachLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Search from "../reusable/Search.jsx";
import ProfileLink from "../reusable/ProfileLink.jsx";
import NavBar from "../reusable/NavBar.jsx";
import Dashboard from "./Dashboard.jsx";
import UserProfile from "../reusable/UserProfile.jsx";
import theme from "../styling/theme.jsx";
import apiGet from "../hooks/apiGet.jsx";
import { SERVER } from "../assets/variable/values.js";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  // Fetch Logged in patient
  const [person, errorPerson, fetchPerson] = apiGet();
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [reloadSelectedPerson, setReloadSelectedPerson] = useState(true);

  useEffect(() => {
    fetchPerson(`${SERVER}/auth`, {
      headers: { TOKEN: localStorage.getItem("patientToken") },
    });
  }, []);

  useEffect(() => {
    setSelectedPerson(person["authPatient"]);
  }, [person]);

  useEffect(() => {
    if (errorPerson != null) {
      localStorage.clear();
      navigate("/home");
    }
  }, [errorPerson]);

  useEffect(() => {
    fetchPerson(`${SERVER}/auth`, {
      headers: { TOKEN: localStorage.getItem("patientToken") },
    });
  }, [reloadSelectedPerson]);

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
          <ProfileLink
            ImageUUID={selectedPerson ? selectedPerson.patientImageUUID : null}
          />
        </GridItem>

        <GridItem>
          <NavBar />
        </GridItem>

        <GridItem colSpan={2} overflow="hidden">
          <Routes>
            <Route
              exact
              path="/"
              element={<Dashboard selectedPerson={selectedPerson} />}
            />

            <Route
              exact
              path="/dashboard"
              element={<Dashboard selectedPerson={selectedPerson} />}
            />

            <Route
              exact
              path="/profile"
              element={
                <UserProfile
                  selectedPerson={selectedPerson}
                  setReloadSelectedPerson={setReloadSelectedPerson}
                  reloadSelectedPerson={reloadSelectedPerson}
                />
              }
            />
          </Routes>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PatientDashboard;
