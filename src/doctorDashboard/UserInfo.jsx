import React from "react";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Statistic from "./Statistic.jsx";
// import PendingAppointments from "./PendingAppointments.jsx";
import PendingAppointments from "./PendingAppointments.jsx";
import ProfileCard from "../reusable/ProfileCard.jsx";

const UserInfo = ({
  selectedPerson,
  allAppointments,
  setChangedAppointmentId,
  setAcceptedAppointment,
  changedAppointmentId,
}) => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows="auto auto 1fr"
      gap="16"
      height="full"
      width="ful"
      fontSize="xl"
      color="font.focused"
      bg="bgDarker"
      borderRadius="3xl"
      py="16"
      px="24"
      // overflow="hidden"
      // alignItems="stretch"
    >
      <GridItem>
        {selectedPerson ? (
          <ProfileCard
            category="doctor"
            selectedPerson={selectedPerson}
            entity={[
              "Name",
              "Speciality",
              "Degrees",
              "Rating",
              "Info",
              "Experience",
              "Verification",
            ]}
          />
        ) : (
          <Center minH="48">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.base"
              size="xl"
            />
          </Center>
        )}
      </GridItem>

      <GridItem>
        <Statistic
          selectedPerson={selectedPerson}
          allAppointments={allAppointments}
        />
      </GridItem>

      {/* <GridItem>
        <PendingAppointments />
      </GridItem> */}

      <GridItem overflow="hidden">
        <PendingAppointments
          allAppointments={allAppointments}
          setChangedAppointmentId={setChangedAppointmentId}
          setAcceptedAppointment={setAcceptedAppointment}
          changedAppointmentId={changedAppointmentId}
        />
      </GridItem>
    </Grid>
  );
};

export default UserInfo;
