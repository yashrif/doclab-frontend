import React, { useState } from "react";
import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Container from "./reusable/Container.jsx";
import Header from "../reusable/Header.jsx";
import Hero from "./Hero.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";

const Homepage = () => {
  const [outOfScope, setOutOfScope] = useState(false);

  const slideDown = keyframes`
  0% { transform: translate(0, -100%); }
`;

  const animationSlideDown = `${slideDown} .3s ease-in-out`;

  return (
    <Box>
      <Box
        bg="bgContainer"
        position={outOfScope ? "fixed" : ""}
        w={"full"}
        as={motion.div}
        animation={outOfScope ? animationSlideDown : ""}
      >
        <Header />
      </Box>
      <Box bg="bgContainer">
        <Hero setOutOfScope={setOutOfScope} />
      </Box>

      <Container id="howItWorks">
        <HowItWorks />
      </Container>

      <Container id="services">
        <Services />
      </Container>

      <Container id="testimonials">
        <Testimonials />
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
