import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const WidgetActivities = ({ icon, heading, content, colorBorder, bg }) => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "4.8rem",
    },
  };

  let renderedList = [];

  for (let i = 0; i < 2; i++) {
    renderedList.push(
      <Text key={i} fontSize={"14"} fontWeight="regular" color="font.muted">
        {content[i]}
      </Text>
    );
  }

  return (
    <Flex
      direction={"column"}
      bg={bg ? bg : "#fff"}
      borderLeft={`.7rem solid ${colorBorder}`}
      px="32"
      py="20"
      borderRadius={"2xl"}
      boxShadow={"0 0 24px rgba(28, 126, 214, .1)"}
    >
      <Flex alignItems={"center"} mb="8">
        <Text fontSize={"2xl"} fontWeight="medium">
          {heading}
        </Text>

        <Spacer />

        <ion-icon
          style={{
            color: "#555",
            fontSize: "1.8rem",
            ...style.icon,
          }}
          name={icon}
        ></ion-icon>
      </Flex>

      <Flex direction={"column"} gap="4">
        {renderedList}
      </Flex>
    </Flex>
  );
};

export default WidgetActivities;
