import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

import theme from "../../styling/theme.jsx";

const Accordion = ({ selectedPerson, category, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const SlideDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-2rem);
    }
    100% {
    opacity: 1;
    transform: translateY(0rem);
    }
  `;

  return (
    <Box
      as="button"
      role="button"
      tabIndex={number}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => {}}
      p="2.2rem 2.4rem 2.4rem"
      borderRadius=".9rem  "
      boxShadow="0 0 1.6rem rgba(0, 0, 0, 0.08)"
      borderTop={`.4rem solid ${
        isOpen ? theme.typography.colors.primaryFirst.tints[0] : "transparent"
      }`}
    >
      <Grid
        templateColumns="auto 1fr auto"
        columnGap="1.6rem"
        rowGap="1.2rem"
        alignItems="center"
      >
        <Box
          fontWeight={`${isOpen ? "600" : "500"}`}
          fontSize="1.6rem"
          color={isOpen ? "primaryFirst.0" : "#cad0d6"}
          letterSpacing=".1rem"
        >
          {String(number).padStart(2, 0)}
        </Box>
        <Heading
          textAlign={"left"}
          fontSize="1.6rem"
          fontWeight={isOpen ? "600" : "500"}
          color={isOpen ? "primaryFirst.500" : "#333"}
        >
          {faker.lorem.sentence()}
        </Heading>
        <ion-icon
          style={{
            fontSize: "2rem",
            letterSpacing: ".25rem",
            color: theme.typography.colors.primaryFirst.tints[0],
          }}
          name={`chevron-${isOpen ? "up" : "down"}-outline`}
        ></ion-icon>
        {/* <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>
          {Math.floor(Math.random() * 5)} Years
        </p> */}

        <GridItem
          colSpan={2}
          display={isOpen ? "block" : "none"}
          animation={`${SlideDown} .15s ease-in-out`}
        >
          <Text
            fontSize="1.4rem"
            lineHeight="1.4"
            mb="2.4rem"
            textAlign={"left"}
          >
            {faker.lorem.paragraph(3)}
          </Text>

          <Box ml="0rem">
            <Grid
              templateColumns="auto 1fr"
              columnGap="1.2rem"
              rowGap=".8rem"
              alignItems="center"
            >
              <ion-icon
                style={{
                  transform: "rotateX(180deg)",
                  fontSize: "2rem",
                  color: theme.typography.colors.primaryFirst.tints[0],
                }}
                name="arrow-redo-outline"
              ></ion-icon>
              <Heading
                as="h3"
                textAlign={"left"}
                fontSize="1.4rem"
                fontWeight="500"
                letterSpacing=".015rem"
              >
                {selectedPerson[`${category}Name`]}
              </Heading>
              <Text
                gridColumn="2"
                fontSize="1.4rem"
                lineHeight="1.4"
                textAlign={"left"}
              >
                {faker.lorem.paragraph(5)}
              </Text>
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Accordion;
