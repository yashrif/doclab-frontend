import React from "react";
import { Box, Stack, Text, Grid, GridItem } from "@chakra-ui/react";

const Services = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "3.6rem",
    },
  };

  const ServiceList = [
    {
      icon: "eye-outline",
      iconColor: "#4263eb",
      bgColor: "#dbe4ff",
      title: "Eye Surgery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum aperiam placeat commodi hic nostrum adipisci nulla neque, velit eligendi veniam soluta natus. Nisi molestias nostrum praesentium exercitationem amet accusamus!",
    },
    {
      icon: "eye-outline",
      iconColor: "#37b24d",
      bgColor: "#d3f9d8",
      title: "Eye Surgery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum aperiam placeat commodi hic nostrum adipisci nulla neque, velit eligendi veniam soluta natus. Nisi molestias nostrum praesentium exercitationem amet accusamus!",
    },
    {
      icon: "eye-outline",
      iconColor: "#1098ad",
      bgColor: "#c5f6fa",
      title: "Eye Surgery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum aperiam placeat commodi hic nostrum adipisci nulla neque, velit eligendi veniam soluta natus. Nisi molestias nostrum praesentium exercitationem amet accusamus!",
    },
    {
      icon: "eye-outline",
      iconColor: "#f59f00",
      bgColor: "#fff3bf",
      title: "Eye Surgery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum aperiam placeat commodi hic nostrum adipisci nulla neque, velit eligendi veniam soluta natus. Nisi molestias nostrum praesentium exercitationem amet accusamus!",
    },
  ];

  const renderedList = ServiceList.map((value, index) => {
    return (
      <GridItem key={index}>
        <Stack>
          <ion-icon
            style={{
              fontSize: "2.4rem",
              ...style.icon,
              marginBottom: "1.6rem",
              padding: "1.2rem",
              color: `${value.iconColor}`,
              backgroundColor: `${value.bgColor}`,
              borderRadius: "50%",
            }}
            name={value.icon}
          ></ion-icon>
          <Text
            fontSize={"18"}
            fontWeight="semibold"
            color={"font.hero"}
            mb={"12"}
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

      <Grid templateColumns={"repeat(4, 1fr)"} gap="16">
        {renderedList}
      </Grid>
    </Box>
  );
};

export default Services;
