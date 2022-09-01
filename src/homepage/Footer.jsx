import React from "react";
import { Box, Flex, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
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
    <Box py="64">
      <Grid templateColumns="1.5fr 1fr 1fr 1fr">
        <GridItem justifySelf={"center"}>
          <Box mb={"24"}>
            <Link href="/">
              <Image src={logo} h="24" />
            </Link>
          </Box>
          <Flex gap={"28"} mb="32">
            {renderedLinkIcons}
          </Flex>
          <Text fontSize={"14"} color="font.muted" lineHeight={"tall"}>
            Copyright &copy; 2022 by DocLab.
            <br />
            All rights reserved.
          </Text>
        </GridItem>

        <GridItem justifySelf={"center"}>
          <Text
            fontSize={"18"}
            fontWeight={"500"}
            mb={"36"}
            color="font.general"
          >
            Contact Us
          </Text>

          <Flex flexDirection="column" gap={"24"}>
            <Link
              href={`tel:${faker.phone.number()}`}
              fontSize={"16"}
              color={"font.muted"}
              transition="all .3s"
              _hover={{
                color: "#555",
              }}
            >
              {faker.phone.number()}
            </Link>
            <Link
              href={`mailto: hello@doclab.com`}
              fontSize={"16"}
              color={"font.muted"}
              transition="all .3s"
              _hover={{
                color: "#555",
              }}
            >
              hello@doclab.com
            </Link>
          </Flex>
        </GridItem>

        <GridItem justifySelf={"center"}>
          <Text
            fontSize={"18"}
            fontWeight={"500"}
            mb={"36"}
            color="font.general"
          >
            Account
          </Text>

          <Flex flexDirection="column" gap={"24"}>
            <Link
              href={`/`}
              fontSize={"16"}
              color={"font.muted"}
              transition="all .3s"
              _hover={{
                color: "#555",
              }}
            >
              Create account
            </Link>
            <Link
              href={`/`}
              fontSize={"16"}
              color={"font.muted"}
              transition="all .3s"
              _hover={{
                color: "#555",
              }}
            >
              Sign in
            </Link>
          </Flex>
        </GridItem>

        <GridItem justifySelf={"center"}>
          <Text
            fontSize={"18"}
            fontWeight={"500"}
            mb={"36"}
            color="font.general"
          >
            Support
          </Text>

          <Flex flexDirection={"column"} gap={"24"}>
            {["Help Center", "FAQ", "Cookies Settings"].map((value, key) => {
              return (
                <Link
                  key={key}
                  href={`mailto: hello@doclab.com`}
                  fontSize={"16"}
                  color={"font.muted"}
                  transition="all .3s"
                  _hover={{
                    color: "#555",
                  }}
                >
                  {value}
                </Link>
              );
            })}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
