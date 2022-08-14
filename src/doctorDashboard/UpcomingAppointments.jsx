import React from "react";
import { Text, Grid, Image, GridItem, Stack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const UpcomingAppointmets = () => {
  let renderedWidgets = [];

  for (let i = 0; i < 3; i++) {
    renderedWidgets.push(
      <Grid
        role="group"
        cursor="pointer"
        maxH="full"
        key={i}
        templateColumns="auto 1fr"
        columnGap="20"
        alignItems="center"
        justifyContent="start"
        bg="linear-gradient(150deg, #fff, #fff, #fff, #fff, #8bc2f354, #8bc2f3da)"
        px="24"
        py="12"
        borderRadius="2xl"
        boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease-in-out"
        _hover={{
          bg: "primary.400",
        }}
      >
        <GridItem>
          <Image
            src={faker.image.avatar()}
            w="20"
            borderRadius="full"
            alt="avatar"
          />
        </GridItem>
        <GridItem>
          <Text
            fontSize="14"
            fontWeight="semibold"
            mb="4"
            color="focused"
            _groupHover={{ color: "#fff" }}
          >
            {faker.name.findName()}
          </Text>
          <Text
            fontSize="10"
            fontWeight="medium"
            color="font.muted"
            _groupHover={{ color: "#dfdfdf" }}
          >
            {new Date().toLocaleTimeString()}
          </Text>
          <Text
            fontSize="12"
            fontWeight="medium"
            color="general"
            _groupHover={{ color: "#efefef" }}
          >
            {faker.lorem.words(3)}
          </Text>
        </GridItem>
      </Grid>
    );
  }

  return (
    <Stack maxH="full" spacing="16" alignSelf="center">
      {renderedWidgets}
    </Stack>
  );
};

export default UpcomingAppointmets;
