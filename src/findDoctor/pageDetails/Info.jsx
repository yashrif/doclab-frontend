import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import theme from "../../styling/theme.jsx";

const Info = ({ selectedPerson, category }) => {
  let starIcon = [];
  for (let i = 0; i < Math.floor(selectedPerson[`${category}Rating`]); i++) {
    starIcon.push(
      <ion-icon
        key={i + 1}
        style={{
          color: "#fab005",
        }}
        name="star"
      ></ion-icon>
    );
  }

  if (!Number.isInteger(selectedPerson[`${category}Rating`]))
    starIcon.push(
      <ion-icon
        key={Math.floor(selectedPerson[`${category}Rating`]) + 1}
        style={{
          color: "#fab005",
        }}
        name="star-half"
      ></ion-icon>
    );

  return (
    <Flex p="4.8rem 8.6rem" rowGap="2.4rem" justifyContent="space-between">
      <Stack>
        <Text fontSize="1.6rem" fontWeight="500" mb={"4"}>
          {selectedPerson[`${category}SubDistrict`]}
        </Text>

        <Stack spacing="1.2rem" fontSize="1.4rem">
          <Text fontWeight="500">{selectedPerson[`${category}Rating`]}</Text>
          <Flex gap=".4rem" alignItems="center">
            {starIcon}
          </Flex>
        </Stack>

        <Text
          fontSize="1.6rem"
          fontWeight="500"
          color={`${theme.typography.colors.primaryFirst.primary}`}
          pt={".8rem"}
          mb="1.6rem"
        >
          {selectedPerson[`${category}ClinicName`]}
        </Text>

        <Text fontSize="1.6rem" marginBottom="2rem" lineHeight="1.6">
          {selectedPerson[`${category}Location`]}
        </Text>
      </Stack>
      <Box>
        <Text fontSize="1.6rem" fontWeight="500" mb="1rem">
          Sat &mdash; Fri
        </Text>
        <Text fontSize="1.4rem" marginBottom="1.6rem">
          07:00 AM &mdash; 10:00 PM
        </Text>
        <Text fontSize="1.4rem" color="#777">
          Check calender for more info
        </Text>
      </Box>
      <Box>
        <Text fontSize="1.6rem" fontWeight="500" mb=".4rem">
          <span style={{ marginRight: ".2rem" }}>&#2547;</span>
          {selectedPerson[`${category}VisitingFee`]}
        </Text>
        <Text fontSize="1.4rem" color="#777" marginBottom="2rem">
          For new patient
        </Text>
        <Text fontSize="1.6rem" fontWeight="500" marginBottom=".4rem">
          <span style={{ marginRight: ".2rem" }}>&#2547;</span>
          {parseInt(selectedPerson[`${category}VisitingFee`] * 2) / 3}
        </Text>
        <Text fontSize="1.4rem" color="#777">
          For old patient
        </Text>
      </Box>
    </Flex>
  );
};

export default Info;
