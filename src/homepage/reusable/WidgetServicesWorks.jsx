import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetServicesWorks = ({ value, alignItems, textAlign }) => {
  return (
    <Stack
      borderRadius={"2xl"}
      px="24"
      py="16"
      alignItems={alignItems ? alignItems : "start"}
      bg="bg"
      boxShadow={"0 0 2rem rgba(0, 0, 0, 0.05)"}
    >
      <FontAwesomeIcon
        icon={value.icon}
        style={{
          fontSize: "2rem",
          marginBottom: "1.4rem",
          padding: "1.2rem 1rem",
          color: `${value.iconColor}`,
          backgroundColor: `${value.bgColor}`,
          borderRadius: "50%",
        }}
        fixedWidth
      />
      <Text
        fontSize={"18"}
        fontWeight="semibold"
        color={"font.hero"}
        mb={"12"}
        textTransform="capitalize"
      >
        {value.title}
      </Text>
      <Text
        fontSize={"14"}
        fontWeight="medium"
        color={"font.muted"}
        lineHeight={"tall"}
        textAlign={textAlign}
      >
        {value.description}
      </Text>
    </Stack>
  );
};

export default WidgetServicesWorks;
