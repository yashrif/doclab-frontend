import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "4rem",
    },
  };

  const NavBar = [
    {
      icon: "grid-outline",
      title: "Dashboard",
    },
    {
      icon: "calendar-clear-outline",
      title: "Calendar",
    },
    {
      icon: "pie-chart-outline",
      title: "Statistics",
    },
    {
      icon: "person-outline",
      title: "Profile",
    },
    {
      icon: "chatbox-outline",
      title: "Chat",
    },
  ];

  const renderedNavList = NavBar.map((value, index) => {
    return (
      <Flex
        key={index}
        alignItems="center"
        columnGap="12"
        px="24"
        py="12"
        // bg="bgDarker"
        borderRadius="2xl"
        fontSize="lg"
        fontWeight="medium"
        color="font.muted"
      >
        <ion-icon
          name={value.icon}
          style={{ fontSize: "2rem", ...style.icon }}
        ></ion-icon>
        <Text>{value.title}</Text>
      </Flex>
    );
  });

  return (
    <Center my="48">
      <Stack spacing="12">
        <Center fontSize="4xl" color="font.focused" fontWeight="bold" mb="16">
          DocLab
        </Center>
        {renderedNavList}
      </Stack>
    </Center>
  );
};

export default NavBar;
