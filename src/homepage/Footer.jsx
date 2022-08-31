import React from "react";
import { Box, Flex, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/img/logo.png";

const Footer = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "3.6rem",
    },
  };

  const LinkIcons = [
    { icon: "logo-facebook", color: "#767676" },
    { icon: "logo-instagram", color: "#767676" },
    { icon: "logo-twitter", color: "#767676" },
  ];

  const renderedLinkIcons = LinkIcons.map((value, index) => {
    return (
      <Link key={index} href="/">
        <ion-icon
          style={{ color: `${value.color}`, fontSize: "2.4rem", ...style.icon }}
          name={value.icon}
        ></ion-icon>
      </Link>
    );
  });

  return (
    <Box py="96">
      <Grid templateColumns="1.5fr 1fr 1fr">
        <GridItem>
          <Link href="/">
            <Image src={logo} h="24" mb={"32"} />
          </Link>
          <Flex gap={"28"} mb="64">
            {renderedLinkIcons}
          </Flex>
          <Text fontSize={"14"} color="font.muted" lineHeight={"tall"}>
            Copyright &copy; 2022 by DocLab.
            <br />
            All rights reserved.
          </Text>
        </GridItem>

        <GridItem>
          <Text
            fontSize={"18"}
            fontWeight={"500"}
            mb={"40"}
            color="font.general"
          >
            Contact Us
          </Text>
        </GridItem>

        <GridItem>
          <Text
            fontSize={"18"}
            fontWeight={"500"}
            mb={"40"}
            color="font.general"
          >
            Support
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
