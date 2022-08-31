import React from "react";
import { Flex, Image, Td, Text, Tr } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const WidgetAppointment = () => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "3.6rem",
    },
  };

  const ActionIcons = [
    {
      icon: "close-circle-outline",
      iconColor: "#ff6b6b",
    },
    {
      icon: "checkmark-circle-outline",
      iconColor: "#40c057",
    },
  ];

  const renderedActionIcons = ActionIcons.map((value, index) => {
    return (
      <ion-icon
        key={index}
        name={value.icon}
        style={{ color: value.iconColor, fontSize: "2rem", ...style.icon }}
      ></ion-icon>
    );
  });

  return (
    <Tr
      cursor="pointer"
      color="font.focused"
      fontSize="lg"
      fontWeight="regular"
      transition="all 0.3s"
      borderRadius="2xl"
      _hover={{ boxShadow: "0 0.6rem 1.2rem rgba(0, 0, 0, 0.08)" }}
    >
      <Td overflow="hidden" py="8" px="16">
        <Flex columnGap="12" alignItems="center">
          <Image
            src={faker.image.avatar()}
            alt="avatar"
            boxSize="3.6rem"
            borderRadius="full"
          />
          <Text>{faker.name.findName()}</Text>
        </Flex>
      </Td>
      <Td overflow="hidden" px="16">
        {Math.floor(Math.random() * 80)}
      </Td>
      <Td overflow="hidden" px="16">
        {new Date().toDateString()}
      </Td>
      <Td overflow="hidden" px="16">
        {new Date().toLocaleTimeString()}
      </Td>
      <Td>
        <Flex alignItems="center" columnGap="12">
          {renderedActionIcons}
        </Flex>
      </Td>
    </Tr>
  );
};

export default WidgetAppointment;
