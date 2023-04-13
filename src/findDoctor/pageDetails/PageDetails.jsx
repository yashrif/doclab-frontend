import React, { useState } from "react";
import { Box, Grid, Stack } from "@chakra-ui/react";

import ProfileCard from "../../reusable/ProfileCard.jsx";
import TimeSlot from "./TimeSlots.jsx";
import Navigation from "./Navigation.jsx";
import Reviews from "./Reviews.jsx";
import Info from "./Info.jsx";
import Consult from "./Consult.jsx";
import theme from "../../styling/theme.jsx";

const PageDetails = ({ category, selectedPerson }) => {
  const [selectedNav, setSelectedNav] = useState(0);

  return (
    <Box
      className="section"
      alignSelf="stretch"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <Grid
        w="ful"
        h="full"
        templateColumns="11fr 4fr"
        templateRows="auto 1fr"
        alignItems="stretch"
        columnGap={theme.typography.sectionGap.medium}
        rowGap={theme.typography.sectionGap.mediumLow}
        overflow="hidden"
      >
        <Box
          // alignSelf="stretch"
          boxShadow="0 0 2.4rem rgba(0, 0, 0, .05)"
        >
          <ProfileCard
            category={category}
            selectedPerson={selectedPerson}
            entity={[
              "Name",
              "Speciality",
              "Degrees",
              "Rating",
              "Info",
              "ConsultancyCount",
              "Experience",
              "Verification",
            ]}
          />
        </Box>

        <Box boxShadow="0 0 2.4rem rgba(0, 0, 0, .05)" overflow="hidden">
          <TimeSlot category={category} selectedPerson={selectedPerson} />
        </Box>

        <Stack
          gridColumn="1 / -1"
          alignSelf="stretch"
          backgroundColor={theme.typography.colors.background.personCard}
          borderRadius="1.1rem"
          overflow="hidden"
          boxShadow="0 0 2.4rem rgba(0, 0, 0, .05)"
        >
          <Navigation
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />
          {selectedNav === 0 && (
            <Info selectedPerson={selectedPerson} category={category} />
          )}
          {selectedNav === 1 && <Reviews />}
          {selectedNav === 2 && (
            <Consult selectedPerson={selectedPerson} category={category} />
          )}
        </Stack>
      </Grid>
    </Box>
  );
};

export default PageDetails;
