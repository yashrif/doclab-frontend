import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import {
  faCapsules,
  faTooth,
  faEye,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import WidgetServicesWorks from "./reusable/WidgetServicesWorks.jsx";
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

  return (
    <Box mb="96" id="services">
      <HeadingPrimary>Services</HeadingPrimary>
      <HeadingSecondary>The best quality services you can get</HeadingSecondary>

      <Grid templateColumns="4fr 3fr" alignItems="center">
        <Grid templateColumns={"repeat(2, 1fr)"} gap="24">
          {renderedServiceWidget}
        </Grid>
        <GridItem>
          <Box boxSize={"115%"}>
            <Image
              boxSize="100%"
              objectFit="cover"
              src="img/book-img.svg"
              alt=""
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Services;
