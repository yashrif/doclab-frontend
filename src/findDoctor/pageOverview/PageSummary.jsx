import React from "react";
import { Box, Flex, keyframes, Stack, Text } from "@chakra-ui/react";

import theme from "../../styling/theme.jsx";

const style = {
  analyticSpan: {
    color: "#333",
    fontWeight: "500",
    marginRight: "0.4rem",
  },
  ionIcon: {
    color: `${theme.typography.colors.primaryFirst.primary}`,
    fontSize: "1.4rem",
    padding: ".4rem",
    borderRadius: "50%",
    backgroundColor: "rgba(166, 216, 255, 0.5)",
    "--ionicon-stroke-width": "4.8rem",
  },

  iconAndText: {
    fontSize: "1.4rem",
    display: "flex",
    gap: "1.2rem",
    alignItems: "center",
  },
};

const fadeOut = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

const PageSummary = ({
  category,
  displayDescription,
  // numberOfPatients,
  numberOfPerson,
}) => {
  return (
    <>
      {displayDescription && (
        <Stack
          spacing="1.2rem"
          marginBottom="1.6rem"
          animation={`${fadeOut} .3s ease-in`}
        >
          <Text
            color={theme.typography.colors.primaryFirst.primary}
            fontSize="1.8rem"
            fontWeight="500"
            letterSpacing="-0.05rem"
            lineHeight="1.1"
          >
            DocLab
          </Text>
          <Text fontSize="1.4rem" lineHeight="1.5" letterSpacing="0.025rem">
            Velit veniam dolor saepe similique pariatur. Voluptas quis doloribus
            fugit inventore et architecto.
          </Text>
        </Stack>
      )}

      {displayDescription && (
        <Flex justifyContent="space-between" gap="1.2rem">
          <Box sx={style.iconAndText}>
            <ion-icon style={style.ionIcon} name="people-outline"></ion-icon>
            <Text>
              <Text as={"span"} sx={style.analyticSpan}>
                {numberOfPerson > 0 ? numberOfPerson : "..."}
              </Text>
              {[category.slice(0, 1).toUpperCase(), category.slice(1)].join(
                ""
              ) + (numberOfPerson > 1 ? "s" : "")}
            </Text>
          </Box>

          <Box sx={style.iconAndText}>
            <ion-icon style={style.ionIcon} name="location-outline"></ion-icon>
            <Text>
              <Text as={"span"} style={style.analyticSpan}>
                65+
              </Text>
              Districts
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default PageSummary;
