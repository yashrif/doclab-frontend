import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const WidgetActivities = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "4.8rem",
    },
  };

  let renderedList = [];

  for (let i = 0; i < 2; i++) {
    renderedList.push(
      <Text
        key={i}
        fontSize={"12"}
        fontWeight="regular"
        letterSpacing={".25px"}
      >
        {new Date().toLocaleString()}
      </Text>
    );
  }

  return (
    <Flex
      direction={"column"}
      borderLeft={"5px solid #fa5252"}
      px="32"
      py="24"
      borderRadius={"2xl"}
      boxShadow={"0 0 24px rgba(28, 126, 214, .1)"}
    >
      <Flex alignItems={"center"} mb="12">
        <Text fontSize={"2xl"} fontWeight="medium" letterSpacing={".5px"}>
          Recent Activities
        </Text>

        <Spacer />

        <ion-icon
          style={{
            color: "#555",
            fontSize: "1.6rem",
            ...style.icon,
          }}
          name="arrow-forward-outline"
        ></ion-icon>
      </Flex>

      <Flex direction={"column"} gap="8">
        {renderedList}
      </Flex>
    </Flex>
  );
};

export default WidgetActivities;
