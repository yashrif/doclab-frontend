import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "./reusable/Container.jsx";
import Header from "../reusable/Header.jsx";
import Hero from "./Hero.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Services from "./Services.jsx";

const Homepage = () => {
  return (
    <Box>
      <Header />
      <Hero />

      <Container>
        <HowItWorks />
      </Container>

      <Container bg="bgContainer">
        <Services />
      </Container>
    </Box>
  );
};

export default Homepage;
