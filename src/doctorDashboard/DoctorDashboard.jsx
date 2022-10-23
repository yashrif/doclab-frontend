import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, Center, Flex, Link } from "@chakra-ui/react";
import {
  Link as ReachLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NavBar from "../reusable/NavBar.jsx";
import Search from "../reusable/Search.jsx";
import ProfileLink from "../reusable/ProfileLink.jsx";
import Dashboard from "./Dashboard.jsx";
import UserProfile from "../reusable/UserProfile.jsx";
import theme from "../styling/theme.jsx";
import apiGet from "../hooks/apiGet.jsx";
import { SERVER } from "../assets/variable/values.js";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const [term, setTerm] = useState("");

  // Fetch Logged in doctor
  const [person, errorPerson, fetchPerson] = apiGet();
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetchPerson(`${SERVER}/auth`, {
      headers: { TOKEN: localStorage.getItem("doctorToken") },
    });
  }, []);

  useEffect(() => {
    setSelectedPerson(person["authDoctor"]);
  }, [person]);

  useEffect(() => {
    if (errorPerson != null) {
      localStorage.clear();
      navigate("/home");
    }
  }, [errorPerson]);

  return (
    <Box overflow="hidden" bg={"bgContainer"}>
      <Grid
        height="calc(100vh - 4.8rem)"
        maxW="130rem"
        mx="auto"
        my="24"
        padding="1.6rem 0 0 1.2rem"
        bg="bg"
        // overflow="hidden"
        templateColumns="auto 8fr 3fr"
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
                {/* <Link
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
          <ProfileLink ImageUUID={selectedPerson?.doctorImageUUID} />
        </GridItem>

        <GridItem pt="8">
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
              element={<UserProfile selectedPerson={selectedPerson} />}
            />
          </Routes>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DoctorDashboard;
