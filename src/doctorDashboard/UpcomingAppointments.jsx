import React from "react";
import { Text, Grid, Image, GridItem, Stack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const UpcomingAppointmets = () => {
  let renderedWidgets = [];

  for (let i = 0; i < 3; i++) {
    renderedWidgets.push(
      <>
        <style>
          {`
          @keyframes slide-up {
            0% {
              opacity: 0;
              transform: translateX(${10 * (i + 0.5)}rem);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-down {
            0% {
              opacity: 0;
              transform: translateY(-15rem);
            }
            100% {
              opacity: 1;
              transform: translateY(0rem);
            }
          }
      `}
        </style>
        <Grid
          opacity={setTimeout(() => {
            return "0";
          }, 1500)}
          role="group"
          cursor="pointer"
          maxH="full"
          key={i}
          templateColumns="auto 1fr"
          columnGap="20"
          alignItems="center"
          justifyContent="start"
          bg="linear-gradient(150deg, #fdfdfd, #fdfdfd, #fdfdfd, #fdfdfd, #8bc2f354, #8bc2f3da)"
          px="24"
          py="12"
          borderRadius="2xl"
          boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)"
          animation={`slide-up ${0.3 * (i + 1)}s ease-in-out`}
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
      </>
    );
  }

  return (
    <Stack maxH="full" spacing="16" alignSelf="center" overflow="hidden">
      {renderedWidgets}
    </Stack>
  );
};

export default UpcomingAppointmets;
