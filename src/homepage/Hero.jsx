import React, { useEffect, useRef, useState } from "react";
import { Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
// import HeroImage from "../assets/img/hero2.png";
import ButtonFull from "../reusable/button/ButtonFull.jsx";
import ButtonOutline from "../reusable/button/ButtonOutline.jsx";

const Hero = ({ setOutOfScope }) => {
  const ref = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const onScroll = (e) => {
    if (scrollPosition > ref?.current.clientHeight) setOutOfScope(true);
    else setOutOfScope(false);

    setScrollPosition(e.currentTarget.scrollY);
  };

  useEffect(() => {
    setScrollPosition(window.scrollY);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <Grid
      ref={ref}
      templateColumns={"45fr 55fr"}
      maxW={"13xl"}
      mx="auto"
      pt="64"
      mb="96"
    >
      <GridItem pb={"13.1rem"}>
        <Text
          color={"primary.600"}
          fontSize="14"
          fontWeight="medium"
          maxWidth="50ch"
          lineHeight="tall"
          marginBottom="8"
          letterSpacing={".25px"}
        >
          A most popular doctor&apos;s appointment site
        </Text>
        <Text
          color={"font.hero"}
          fontSize={"8xl"}
          lineHeight="1.1"
          letterSpacing={"tight"}
          fontWeight="bold"
          mb="32"
        >
          We&apos;re open and welcoming patients.
        </Text>
        <Text
          color={"font.hero"}
          fontSize="16"
          fontWeight="regular"
          maxWidth="60ch"
          lineHeight="tall"
          marginBottom="48"
          // letterSpacing={".25px"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          praesentium totam delectus dolorum error provident aliquid tempore
          voluptas, ex rem, deleniti qui eius. Unde molestias in libero,
          quisquam atque quas.
        </Text>
        <Flex alignItems={"center"} gap="16" mb="80">
          <ButtonFull py="24" px="32" fontSize={"18"}>
            Book Online
          </ButtonFull>
          <ButtonOutline py="24" px="32" fontSize={"18"}>
            Contact Us
          </ButtonOutline>
        </Flex>
        <Text fontSize={"16"} fontWeight="regular" color={"font.hero"}>
          <span style={{ fontWeight: "500" }}>No insurance?</span> Get your
          preventive care for a low monthly fee.
        </Text>
      </GridItem>

      <Image
        src={"img/home-img.svg"}
        w="85%"
        justifySelf={"center"}
        alignSelf={"end"}
      />
    </Grid>
  );
};

export default Hero;
