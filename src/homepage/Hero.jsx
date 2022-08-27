import React from "react";
import { Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import HeroImage from "../assets/img/hero.png";
import ButtonFull from "../reusable/button/ButtonFull.jsx";
import ButtonOutline from "../reusable/button/ButtonOutline.jsx";

const Hero = () => {
  return (
    <Grid templateColumns={"45fr 55fr"} px="32" maxW={"13xl"} mx="auto" pt="48" pb="96">
      <GridItem>
        <Text
          color={"primary.600"}
          fontSize="14"
          fontWeight="semibold"
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
          fontWeight="semibold"
          maxWidth="60ch"
          lineHeight="tall"
          marginBottom="48"
          letterSpacing={".25px"}
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
        <Text fontSize={"16"} fontWeight="medium" color={"font.hero"}>
          <Text display={"inline-block"} fontWeight="semibold">
            No insurance?
          </Text>{" "}
          Get your preventive care for a low monthly fee.
        </Text>
      </GridItem>

      <Image src={HeroImage} w="50%" justifySelf={"center"} />
    </Grid>
  );
};

export default Hero;
