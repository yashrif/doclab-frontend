import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

import theme from "../../styling/theme.jsx";

const PersonCard = ({ category, id, person, setSelectedPerson }) => {
  const style = {
    icon: {
      fontSize: "1.2rem",
      "--ionicon-stroke-width": "4.8rem",
      transition: "all .3s",
    },

    iconAndText: {
      fontSize: "1.2rem",
      display: "flex",
      gap: "0.4rem",
      alignItems: "center",
    },
  };

  return (
    <>
      <style>
        {`
          .person-card:hover h3,
          .person-card:hover p{
            color: #fff !important;
          }

          .person-card:hover .icon-star ion-icon{
            color: #fdd65e !important;
          }

          .person-card:hover .icon-location ion-icon{
            color: #bbd8f3 !important;
          }

          .person-card-container::before {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 0.9rem;
            background-image: linear-gradient(145deg,
                rgba(231, 245, 255, 0.15),
                rgba(231, 245, 255, 0.15),
                rgba(77, 171, 247, 0.35),
                rgba(77, 171, 247, 0.6),
                rgba(77, 171, 247, 0.35),
                rgba(77, 171, 247, 0.6),
                rgba(28, 127, 214, 0.75));

            background-image: linear-gradient(145deg,
                #e8f2fb,
                #77b2e6,
                #1c7ed6
              );

            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s linear;
          }
          .person-card-container:hover::before {
            opacity: 1;
          }
        `}
      </style>
      <Box
        onClick={() => setSelectedPerson(person)}
        onKeyDown={() => {}}
        tabIndex={id}
        role={"button"}
        className="person-card"
        marginBottom="1.2rem"
        transition="all .3s"
        _hover={{
          transform: "scale(1.03)",
          color: "#fff !important",
        }}
        _last={{
          marginBottom: "0",
        }}
      >
        <Box
          className="person-card-container"
          position="relative"
          cursor="pointer"
          padding="1.2rem 2rem"
          overflow="hidden"
          boxShadow="0.4rem 0.4rem 1rem rgba(0, 0, 0, .08)"
          borderRadius=" 0.9rem"
          background="linear-gradient(135deg, #ffff, #fff, #e6f9f0, #cdf3e1, #72e2a5)"
          zIndex="1"
          transition="all 0.3s"
        >
          <Grid
            templateColumns="auto 1fr"
            columnGap={"1.6rem"}
            alignItems="center"
          >
            <Image
              borderRadius="50%"
              objectFit="cover"
              gridRow="1/ -3"
              w="4.8rem"
              h="4.8rem"
              src={
                person[`${category}ImageUUID`]
                  ? "https://ucarecdn.com/" +
                    person[`${category}ImageUUID`] +
                    "/"
                  : faker.image.avatar()
              }
              alt="avatar"
            />

            <Box color="#767676">
              <Flex
                alignItems="baseline"
                columnGap="1.6rem"
                justifyContent="space-between"
                marginBottom=".8rem"
              >
                <Text
                  fontSize="1.4rem"
                  color="#333"
                  fontWeight="500"
                  marginBottom=".2rem"
                >
                  {theme.methods.capitalize(person[`${category}Name`])}
                </Text>
                <Box
                  className="icon-star"
                  sx={{ ...style.iconAndText, alignItems: "baseline" }}
                >
                  <ion-icon
                    style={{
                      ...style.icon,
                      color: "#fcc419",
                    }}
                    name="star-outline"
                  ></ion-icon>
                  <Text color="#333" fontSize="1.05rem" fontWeight="500">
                    {person[`${category}Rating`]}
                  </Text>
                </Box>
              </Flex>

              <Flex gap="1.2rem" fontSize="1.2rem">
                <Box className="icon-location" style={{ ...style.iconAndText }}>
                  <ion-icon
                    style={{
                      ...style.icon,
                      color: "#fa5252",
                    }}
                    name="medkit-outline"
                  ></ion-icon>

                  <Text fontSize="1.2rem">
                    {theme.methods.capitalize(person[`${category}Speciality`])}
                  </Text>
                </Box>

                <Box className="icon-location" style={{ ...style.iconAndText }}>
                  <ion-icon
                    style={{
                      ...style.icon,
                      color: `${theme.typography.colors.primaryFirst.primary}`,
                    }}
                    name="location-outline"
                  ></ion-icon>
                  <Text whiteSpace="nowrap">
                    {person[`${category}SubDistrict`]}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PersonCard;
