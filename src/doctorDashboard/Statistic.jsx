import React from "react";
import { Flex, Stack, Text, Box } from "@chakra-ui/react";

const Statistic = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "3.6rem",
    },
  };

  const Statistic = [
    {
      icon: "people-outline",
      iconColor: "#01d1ec",
      count: 100,
      category: <Text>Patients</Text>,
    },
    {
      icon: "document-text-outline",
      iconColor: "#2a70fc",
      count: 100,
      category: "Reports",
    },
    {
      icon: "chatbubble-outline",
      iconColor: "#ca58ff",
      count: 100,
      category: "Consultaions",
    },
    {
      icon: "happy-outline",
      iconColor: "#ef008f",
      count: 100,
      category: "Experience",
    },
  ];

  const renderedStatistic = Statistic.map((value, index) => {
    return (
      <Flex key={index} alignItems="center" columnGap="16">
        <ion-icon
          name={value.icon}
          style={{ color: value.iconColor, fontSize: "3rem", ...style.icon }}
        ></ion-icon>
        <Stack spacing="0">
          <span
            style={{ fontSize: "1.4rem", fontWeight: "700", color: "#333" }}
          >
            {value.count}
          </span>
          <Box fontSize="12" fontWeight="medium" color="#888">
            {value.category}
          </Box>
        </Stack>
      </Flex>
    );
  });

  return (
    <>
      {/* <Text fontSize="xl" color="font.focused" fontWeight="bold" mb="12">
        Statistic
      </Text> */}
      <Flex
        bg="bg"
        justifyContent="space-around"
        py="20"
        borderRadius="2xl"
        boxShadow="0 0.2rem 0.4rem rgba(0, 0, 0, 0.01)"

        // border="1px solid #e6e6e6"
      >
        {renderedStatistic}
      </Flex>
    </>
  );
};

export default Statistic;
