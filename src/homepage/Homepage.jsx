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
      <Box bg="bgContainer">
        <Header />
      </Box>
      <Box bg="bgContainer">
        <Hero />
      </Box>

      <Container id="about">
        <About />
      </Container>

      <Container id="howItWorks">
        <HowItWorks />
      </Container>

      <Container id="services">
        <Services />
      </Container>

      <Container id="testimonials">
        <Testimonials />
      </Container>

      <Container id="blog">
        <Blog />
      </Container>

      <Box mt="12.8rem">
        <hr style={{ borderTop: "1px solid #eee" }} />
      </Box>

      <Container bg="bg">
        <Footer />
      </Container>
    </Box>
  );
};

export default Homepage;
