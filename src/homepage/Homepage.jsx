import React from "react";
import { Box } from "@chakra-ui/react";
import Container from "./reusable/Container.jsx";
import Header from "../reusable/Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Blog from "./Blogs.jsx";
import Footer from "./Footer.jsx";

const Homepage = () => {
  return (
    <Box>
      <Box bg="bgContainer2">
        <Header />
      </Box>
      <Box bg="bgContainer2">
        <Hero />
      </Box>

      <Container pt={"9.6rem"}>
        <About />
      </Container>

      <Container bg="bgContainer2" id="howItWorks">
        <HowItWorks />
      </Container>

      <Container pt="96">
        <Services />
      </Container>

      <Container bg="bgContainer2" pt={"96"}>
        <Testimonials />
      </Container>

      <Container pt={"96"}>
        <Blog />
      </Container>

      <Box mt="12.8rem">
        <hr style={{ borderTop: "1px solid #eee" }} />
      </Box>

      <Container bg="bgAsh">
        <Footer />
      </Container>
    </Box>
  );
};

export default Homepage;
