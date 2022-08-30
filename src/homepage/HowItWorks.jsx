import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import {
  faUserDoctor,
  faMapLocationDot,
  faCalendarPlus,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import WidgetServicesWorks from "./reusable/WidgetServicesWorks.jsx";
import HeadingPrimary from "./reusable/HeadingPrimary.jsx";
import HeadingSecondary from "./reusable/HeadingSecondary.jsx";

const HowItWorks = () => {
  const Steps = [
    {
      icon: faUserDoctor,
      iconColor: "#1098ad",
      bgColor: "#c5f6fa",
      title: "Search Doctor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
    {
      icon: faMapLocationDot,
      iconColor: "#7048e8",
      bgColor: "#e5dbff",
      title: "Choose your location",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
    {
      icon: faCalendarPlus,
      iconColor: "#f03e3e",
      bgColor: "#ffe3e3",
      title: "Schedule Appointment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
    {
      icon: faLightbulb,
      iconColor: "#f59f00",
      bgColor: "#fff3bf",
      title: "Get your solution",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit velit eligeonem amet accusamus!",
    },
  ];

  const renderedSteps = Steps.map((value, index) => {
    return (
      <GridItem key={index}>
        <WidgetServicesWorks
          value={value}
          alignItems="center"
          textAlign={"center"}
        />
      </GridItem>
    );
  });

  return (
    <Box py={"96"}>
      <HeadingPrimary>How it works</HeadingPrimary>
      <HeadingSecondary>Easy steps to get your solution</HeadingSecondary>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={"24"}>
        {renderedSteps}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
