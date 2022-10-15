import React from "react";
import { Text, Grid, Image, GridItem } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const WidgetUpcomingAppointments = ({ i }) => {
  return (
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
            fontWeight="medium"
            mb="4"
            color="focused"
            _groupHover={{ color: "#fff" }}
          >
            {faker.name.fullName()}
          </Text>
          <Text
            fontSize="10"
            fontWeight="regular"
            color="font.muted"
            _groupHover={{ color: "#dfdfdf" }}
          >
            {new Date().toLocaleTimeString()}
          </Text>
          <Text
            fontSize="12"
            fontWeight="regular"
            color="general"
            _groupHover={{ color: "#efefef" }}
          >
            {faker.lorem.words(3)}
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default WidgetUpcomingAppointments;
