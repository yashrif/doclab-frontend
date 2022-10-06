import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
// import { faker } from "@faker-js/faker";
import { MdOutlineSchedule } from "react-icons/md";

const TimelineUpcomingAppointments = ({ i, dots, acceptedAppointment }) => {
  return (
    <>
      <style>
        {`
              @keyframes slide-up {
                0% {
                  opacity: 0;
                  transform: translateY(${10 * (i + 0.5)}rem);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
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
        // opacity={setTimeout(() => {
        //   return "0";
        // }, 1500)}
        // role="group"
        // cursor="pointer"
        // maxH="full"
        templateColumns="auto 1fr"
        columnGap="24"
        // alignItems="center"
        // justifyContent="start"
        // bg="linear-gradient(150deg, #fdfdfd, #fdfdfd, #fdfdfd, #fdfdfd, #8bc2f354, #8bc2f3da)"
        px="32"
        // py="12"
        // borderRadius="2xl"
        // boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)"
        // animation={`slide-up ${0.3 * (i + 1)}s ease-in-out`}
        // transition="all 0.3s ease-in-out"
        // _hover={{
        //   bg: "primary.400",
        // }}
      >
        <Grid templateColumns={"1fr"} templateRows={"auto 1fr"} rowGap={"4"}>
          <GridItem
            alignSelf={"start"}
            padding={"8"}
            border={"2px solid #a5d8ff"}
            borderRadius={"50%"}
          >
            <MdOutlineSchedule fontSize="2rem" color="#74c0fc" />
          </GridItem>

          {dots ? (
            <GridItem
              borderLeft={"3.2px dotted #a5d8ff"}
              justifySelf={"center"}
              alignSelf={"stretch"}
            ></GridItem>
          ) : (
            ""
          )}
        </Grid>

        <GridItem
          opacity={setTimeout(() => {
            return "0";
          }, 1500)}
          animation={`slide-up ${0.3 * (i + 1)}s ease-in-out`}
          transition="all 0.3s ease-in-out"
        >
          <Text color={"gray.400"} fontSize={"12"} fontWeight="medium">
            Appointment
          </Text>
          <Text fontSize={"16"} fontWeight={"medium"} color={"font.general"}>
            {acceptedAppointment.appointmentTime}
          </Text>
          <Text fontSize={"12"} color={"font.muted"}>
            with &nbsp;
            <Text
              fontWeight={"medium"}
              display={"inline-block"}
              color={"font.general"}
            >
              {acceptedAppointment.patientName}
            </Text>
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default TimelineUpcomingAppointments;
