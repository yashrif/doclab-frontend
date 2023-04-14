import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const Review = () => {
  const today = new Date();

  return (
    <Grid p="2.4rem 4.8rem" templateColumns="auto 1fr" columnGap="1.6rem">
      <Avatar size="xl" name="Patient" src={faker.image.avatar()} />
      <Box>
        <Flex alignItems="center" columnGap="1.2rem" marginBottom="1.2rem">
          <Heading as="h3" size="md" fontWeight="500">
            {faker.name.findName()}
          </Heading>
          <Text
            fontSize="1.2rem"
            color="#999"
          >{`${today.toLocaleDateString()} ${today.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`}</Text>
        </Flex>

        <Text fontSize="1.4rem" lineHeight="1.4" mb="1.6rem">
          {faker.lorem.paragraph(3)}
        </Text>
        <Flex justify="space-between" fontSize="1.2rem" color="#999">
          <Flex columnGap="1.2rem">
            <Button
              colorScheme="messenger"
              variant="outline"
              size="sm"
              onClick={() => console.log("clicked")}
            >
              Replay
            </Button>
            <Button
              colorScheme="red"
              variant="outline"
              size="sm"
              onClick={() => console.log("clicked")}
            >
              Like
            </Button>
          </Flex>
          <Flex alignItems="center" columnGap=".8rem">
            <ion-icon
              style={{
                fontSize: "1.4rem",
                color: "red",
                "--ionicon-stroke-width": "4.8rem",
              }}
              name="heart-outline"
            ></ion-icon>
            <span>{Math.floor(Math.random() * 100)}</span>
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Review;
