import React from "react";
import {
  Stack,
  Image,
  StackItem,
  Center,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const WidgetOverview = () => {
  return (
    <Stack
      height={"full"}
      spacing={"20"}
      padding="24px 24px"
      borderRadius={"2xl"}
      boxShadow={"0 0 24px rgba(28, 126, 214, .1)"}
    >
      <StackItem>
        <Center>
          <Image
            src={faker.image.avatar()}
            borderRadius="50%"
            w={"36"}
            h="36"
          />
        </Center>
      </StackItem>
      <StackItem>
        <Center fontWeight={"medium"} fontSize="xl">
          {faker.name.findName()}
        </Center>
      </StackItem>
      <StackItem>
        <Stack spacing={"12"}>
          <Flex gap={"20"}>
            <Text fontSize={"md"} color="font.muted">
              Gender
            </Text>
            <Spacer />
            <Text fontSize={"md"} fontWeight="medium" color={"#333"}>
              Male
            </Text>
          </Flex>
          {/* <Flex gap={"20"}>
            <Text fontSize={"md"} color="font.muted">
              Birthday
            </Text>
            <Spacer />
            <Text fontSize={"md"} fontWeight="medium" color={"#333"}>
              {new Date().toLocaleDateString()}
            </Text>
          </Flex> */}
          <Flex gap={"20"}>
            <Text fontSize={"md"} color="font.muted">
              Age
            </Text>
            <Spacer />
            <Text fontSize={"md"} fontWeight="medium" color={"#333"}>
              20
            </Text>
          </Flex>
          <Flex gap={"20"}>
            <Text fontSize={"md"} color="font.muted">
              Hight
            </Text>
            <Spacer />
            <Text fontSize={"md"} fontWeight="medium" color={"#333"}>
              5
            </Text>
          </Flex>
          <Flex gap={"20"}>
            <Text fontSize={"md"} color="font.muted">
              Weight
            </Text>
            <Spacer />
            <Text fontSize={"md"} fontWeight="medium" color={"#333"}>
              50kg
            </Text>
          </Flex>
        </Stack>
      </StackItem>

      <Spacer />

      <StackItem>
        <Stack spacing={"12"}>
          <Center>
            <Flex gap="8" alignItems={"center"}>
              <IoLocationOutline fontSize="1.6rem" color="#555" />
              <Text fontSize={"lg"} fontWeight="medium" color={"#333"}>
                {faker.address.cityName()}
              </Text>
            </Flex>
          </Center>
          <Center>
            <Flex gap="8" alignItems={"center"}>
              <BsTelephone fontSize="1.6rem" color="#555" />
              <Text
                fontSize={"lg"}
                fontWeight="medium"
                color={"#333"}
                textAlign="center"
              >
                {faker.phone.number()}
              </Text>
            </Flex>
          </Center>
        </Stack>
      </StackItem>
    </Stack>
  );
};

export default WidgetOverview;