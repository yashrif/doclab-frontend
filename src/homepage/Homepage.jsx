import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../reusable/Header.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";

const Homepage = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Box maxW={"12xl"} px="32" mx={"auto"}>
        <Services />
      </Box>
    </Box>
  );
};

export default Homepage;
