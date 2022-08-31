import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "./reusable/Container.jsx";
import Header from "../reusable/Header.jsx";
import Hero from "./Hero.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";

const Homepage = () => {
  return (
    <Box>
      <Header />
      <Hero />

      <Container>
        <HowItWorks />
      </Container>

      <Container>
        <Services />
      </Container>

      <hr style={{ borderTop: "1px solid #eee" }} />

      <Container bg="bg">
        <Footer />
      </Container>
    </Box>
  );
};

export default Homepage;
