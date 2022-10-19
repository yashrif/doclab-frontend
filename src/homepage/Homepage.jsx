import React, { useState } from "react";
import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Container from "./reusable/Container.jsx";
import Header from "../reusable/Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Blog from "./Blogs.jsx";
import Footer from "./Footer.jsx";
import theme from "../styling/theme.jsx";

const Homepage = () => {
  const [outOfScope, setOutOfScope] = useState(false);

  const slideDown = keyframes`
  0% { transform: translate(0, -100%); }
`;

  const animationSlideDown = `${slideDown} .3s ease-in-out`;

  return (
    <Box>
      <Box
        bg={outOfScope ? "bg" : "bgContainer2"}
        position={outOfScope ? "fixed" : ""}
        w={"full"}
        as={motion.div}
        animation={outOfScope ? animationSlideDown : ""}
        boxShadow={outOfScope ? "0 .8rem 1.6rem rgba(0, 0, 0, 0.08)" : ""}
        opacity={0.95}
        zIndex={100}
      >
        <Header />
      </Box>

      <Box
        bg="bgContainer2"
        pt={outOfScope ? theme.typography.containerHeight.header : 0}
      >
        <Hero setOutOfScope={setOutOfScope} />
      </Box>

      <Container pt={"9.6rem"}>
        <About />
      </Container>

      <Container bg="bg" id="howItWorks">
        <HowItWorks />
      </Container>

      <Container pt="96">
        <Services />
      </Container>

      <Container bg="bg" pt={"96"}>
        <Testimonials />
      </Container>

      <Container pt={"96"}>
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
