import React from "react";
import {
  Box,
  Stack,
  Text,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCapsules,
  faTooth,
  faEye,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import ButtonFull from "../reusable/button/ButtonFull.jsx";

const Services = () => {
  const ServiceWidget = [
    {
      icon: faBrain,
      iconColor: "#4263eb",
      bgColor: "#dbe4ff",
      title: "Neuorology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
    {
      icon: faCapsules,
      iconColor: "#37b24d",
      bgColor: "#d3f9d8",
      title: "Medicine",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
    {
      icon: faEye,
      iconColor: "#1098ad",
      bgColor: "#c5f6fa",
      title: "Eye Surgery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
    {
      icon: faTooth,
      iconColor: "#f59f00",
      bgColor: "#fff3bf",
      title: "Dentistry",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
  ];

  const ServiceList = [
    { text: "Top Specialist Doctor" },
    { text: "State of the art doctor service" },
    { text: "discount for all medical treatment" },
    { text: "Appointment is quick and easy" },
  ];

  const renderedServiceWidget = ServiceWidget.map((value, index) => {
    return (
      <GridItem
        key={index}
        borderRadius={"2xl"}
        boxShadow={"0 0 2rem rgba(0, 0, 0, 0.05)"}
        px="24"
        py="16"
      >
        <Stack>
          <FontAwesomeIcon
            icon={value.icon}
            style={{
              fontSize: "2rem",
              marginBottom: "1.4rem",
              padding: "1.2rem 1rem",
              color: `${value.iconColor}`,
              backgroundColor: `${value.bgColor}`,
              borderRadius: "50%",
            }}
            fixedWidth
          />
          <Text
            fontSize={"18"}
            fontWeight="semibold"
            color={"font.hero"}
            mb={"12"}
            textTransform="capitalize"
          >
            {value.title}
          </Text>
          <Text
            fontSize={"14"}
            fontWeight="medium"
            color={"font.muted"}
            lineHeight={"tall"}
          >
            {value.description}
          </Text>
        </Stack>
      </GridItem>
    );
  });

  const renderedServiceList = ServiceList.map((value, index) => {
    return (
      <ListItem
        key={index}
        fontSize={"18"}
        fontWeight="medium"
        color={"font.muted"}
        lineHeight={"tall"}
      >
        {value.text}
      </ListItem>
    );
  });

  return (
    <Box py="96">
      <Text
        textTransform={"uppercase"}
        textAlign={"center"}
        fontSize={"16"}
        fontWeight={"semibold"}
        color={"primary.base"}
        pb={"16"}
      >
        Services
      </Text>
      <Text
        textTransform={"capitalize"}
        textAlign="center"
        color={"font.hero"}
        fontSize="4.4rem"
        fontWeight={"bold"}
        lineHeight="1.2"
        marginBottom="9.6rem"
      >
        The best quality services you can get
      </Text>

      <Grid templateColumns="5fr 3fr" gap={"64"}>
        <Grid templateColumns={"repeat(2, 1fr)"} gap="24">
          {renderedServiceWidget}
        </Grid>
        <GridItem>
          <Text
            textTransform={"capitalize"}
            color={"font.hero"}
            fontSize="4xl"
            fontWeight={"bold"}
            lineHeight="short"
            mb="48"
          >
            We always ensure best medical treatment for your health
          </Text>

          <UnorderedList spacing={"24"} mb="48" pl="8">
            {renderedServiceList}
          </UnorderedList>

          <ButtonFull py="24" px="32" fontSize={"18"}>
            Book Appointment
          </ButtonFull>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Services;
