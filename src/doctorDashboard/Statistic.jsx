import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

const Statistic = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "4.8rem",
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
          style={{ color: value.iconColor, fontSize: "3rem" }}
        ></ion-icon>
        <Stack spacing="0">
          <span
            style={{ fontSize: "1.6rem", fontWeight: "700", color: "#333" }}
          >
            {value.count}
          </span>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#888",
              ...style.icon,
            }}
          >
            {value.category}
          </div>
        </Stack>
      </Flex>
    );
  });

  return (
    <>
      <Text fontSize="2xl" color="font.focused" fontWeight="bold" mb="16">
        Statistic
      </Text>
      <Flex
        bg="bg"
        justifyContent="space-around"
        py="24"
        borderRadius="2xl"
        boxShadow="0 0.2rem 0.4rem rgba(0, 0, 0, 0.01)"
      >
        {renderedStatistic}
      </Flex>
    </>
  );
};

export default Statistic;
