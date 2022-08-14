import { Box, Center, Flex, Text } from "@chakra-ui/react";
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
    {
      icon: "log-out-outline",
      title: "Log out",
    },
  ];

  const renderedNavList = NavBar.map((value, index) => {
    return (
      <Flex
        cursor="pointer"
        key={index}
        alignItems="center"
        columnGap="12"
        px="24"
        py="16"
        borderRadius="2xl"
        fontSize="lg"
        fontWeight="semibold"
        color="font.muted"
        transition="all 0.3s"
        _hover={{
          color: "font.focused",
          backgroundColor: "bgDarker",
        }}
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
    <Center h="full" alignItems="start">
      <Flex
        mx="12"
        pb="36"
        direction="column"
        h="full"
        justifyContent="space-between"
      >
        <Box>{renderedNavList.slice(0, -1)}</Box>
        <Box>{renderedNavList.slice(-1)}</Box>
      </Flex>
    </Center>
  );
};

export default NavBar;
