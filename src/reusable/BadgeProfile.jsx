import React from "react";
import { faker } from "@faker-js/faker";
import { Image } from "@chakra-ui/react";

const BadgeProfile = ({ imageuuid }) => {
  return (
    <Image
      src={
        imageuuid
          ? "https://ucarecdn.com/" + imageuuid + "/"
          : faker.image.avatar()
      }
      alt="Profile"
      w="14"
      borderRadius="full"
    />
  );
};

export default BadgeProfile;
