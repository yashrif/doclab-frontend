import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  faCapsules,
  faTooth,
  faEye,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { MdCheckCircle } from "react-icons/md";
import WidgetServicesWorks from "./reusable/WidgetServicesWorks.jsx";
import ButtonFull from "../reusable/button/ButtonFull.jsx";
import HeadingPrimary from "./reusable/HeadingPrimary.jsx";
import HeadingSecondary from "./reusable/HeadingSecondary.jsx";

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
      <GridItem key={index}>
        <WidgetServicesWorks
          value={value}
          isBoxShadow={true}
          alignItems="center"
          textAlign={"center"}
        />
      </GridItem>
    );
  });

  const renderedServiceList = ServiceList.map((value, index) => {
    return (
      <ListItem
        key={index}
        fontSize={"16"}
        fontWeight="regular"
        color={"font.muted"}
        lineHeight={"tall"}
        textTransform="capitalize"
      >
        <ListIcon
          as={MdCheckCircle}
          color="primary.400"
          mr="12"
          boxSize={"8"}
        />
        {value.text}
      </ListItem>
    );
  });

  return (
    <Box py="96">
      <HeadingPrimary>Services</HeadingPrimary>
      <HeadingSecondary>The best quality services you can get</HeadingSecondary>

      <Grid templateColumns="5fr 3fr" gap={"64"} alignItems="center">
        <Grid templateColumns={"repeat(2, 1fr)"} gap="24">
          {renderedServiceWidget}
        </Grid>
        <GridItem>
          <Text
            textTransform={"capitalize"}
            color={"font.hero"}
            fontSize="4xl"
            fontWeight={"semibold"}
            lineHeight="short"
            mb="32"
          >
            We always ensure best medical treatment for your health
          </Text>

          <List spacing={"24"} mb="48" pl="8">
            {renderedServiceList}
          </List>

          <ButtonFull py="24" px="32" fontSize={"18"}>
            Read More
          </ButtonFull>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Services;
