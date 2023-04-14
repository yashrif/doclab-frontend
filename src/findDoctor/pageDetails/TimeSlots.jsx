import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  SlideFade,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";

import AppointmentPopUp from "../../reusable/appointmentPopUp/AppointmentPopUp.jsx";
import theme from "../../styling/theme.jsx";
import { DATE_FORMAT } from "../../assets/variable/values.js";

const TimeSlot = ({ selectedPerson }) => {
  const TODAY = new Date();
  const TOMORROW = new Date();
  TOMORROW.setDate(TOMORROW.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [increment, setIncrement] = useState(0);
  const {
    isOpen: isResetOpen,
    onOpen: onResetOpen,
    onClose: onResetClose,
  } = useDisclosure();

  useEffect(() => {
    let tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + increment);
    // console.log(tempDate);
    setSelectedDate(tempDate);

    if (increment == 0) onResetClose();
    else onResetOpen();
  }, [increment]);

  const style = {
    icon: {
      fontSize: "1.4rem",
      "--ionicon-stroke-width": "4.8rem",
    },

    iconRounded: {
      padding: ".4rem",
      borderRadius: "50%",
    },

    iconAndText: {
      display: "flex",
      alignItems: "center",
      gap: ".8rem",
    },
    span: {
      fontColor: "#333",
      fontWeight: "600",
      marginRight: ".4rem",
    },
  };

  // console.log("selected date: " + selectedDate.toLocaleDateString());

  const renderedDate = (
    <Text
      borderBottom="1px solid blue"
      color="#333"
      fontWeight="600"
      paddingBottom=".3rem"
    >
      {selectedDate.toLocaleDateString() === TODAY.toLocaleDateString()
        ? "Today"
        : selectedDate.toLocaleDateString() === TOMORROW.toLocaleDateString()
        ? "Tomorrow"
        : selectedDate.toLocaleDateString("en-US", DATE_FORMAT)}
    </Text>
  );

  const scheduleGenerator = (times, period) => {
    const render = times.map((time, index) => {
      return (
        <Box
          key={index}
          as={"button"}
          tabIndex={index}
          onClick={() => {}}
          onKeyDown={() => {}}
        >
          <AppointmentPopUp
            time={time}
            selectedPerson={selectedPerson}
            period={period}
            selectedDate={selectedDate}
          >
            <Button
              colorScheme="twitter"
              variant="outline"
              fontSize="1rem"
              fontWeight="500"
              padding=".4rem .8rem"
              borderRadius=".5rem"
              whiteSpace="nowrap"
            >
              {time} {period}
            </Button>
          </AppointmentPopUp>
        </Box>
      );
    });

    return render;
  };

  return (
    <>
      <style>
        {`
         .time-slot--date ion-icon:hover {
          background-color: rgba(28, 126, 214) !important;
          box-shadow: inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0 1.2rem rgba(28, 126, 214, 0.5) !important;
         }

         .time-slot--date ion-icon:active {
            transform: scale(1.2);
         }

         ::-webkit-scrollbar {
          height: .8rem;
         }
        `}
      </style>
      <Box
        fontSize="1.4rem"
        p="1.6rem 1.6rem 0"
        backgroundColor={theme.typography.colors.background.personCard}
        borderRadius="1.1rem"
        borderBottomRightRadius="1.1rem"
        height="100%"
      >
        <Box
          className="time-slot--date"
          style={{
            position: "relative",
            fontSize: "1.3rem",
            display: "flex",
            gap: "1.2rem",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2.4rem",
          }}
        >
          <ion-icon
            role={"button"}
            tabIndex={0}
            onClick={() => {
              if (
                selectedDate.toLocaleDateString() !== TODAY.toLocaleDateString()
              ) {
                setIncrement(increment - 1);
              }
            }}
            style={{
              ...style.icon,
              ...style.iconRounded,
              fontSize: "1.4rem",
              padding: ".4rem",
              color: "#fff",
              backgroundColor: "rgba(28, 126, 214, .70)",
              boxShadow: "0 .4rem .4rem rgba(0, 0, 0, .15)",
              cursor: "pointer",
              transition: "all .3s",
            }}
            name="chevron-back-outline"
          ></ion-icon>

          <SlideFade
            in={isResetOpen}
            offsetY="-2rem"
            onClick={() => {
              setIncrement(0);
            }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              zIndex: "100",
            }}
          >
            <ion-icon
              style={{
                ...style.icon,
                ...style.iconRounded,
                fontSize: "1.4rem",
                padding: ".4rem",
                color: "#fff",
                backgroundColor: "rgba(28, 126, 214, .70)",
                boxShadow: "0 -.4rem .4rem rgba(0, 0, 0, .15)",
                cursor: "pointer",
                transition: "all .3s",
                transform: "rotateX(180deg) translate(-50%, -50%)",
              }}
              name="refresh-outline"
            ></ion-icon>
          </SlideFade>

          {renderedDate}

          <ion-icon
            role={"button"}
            tabIndex={0}
            onClick={() => {
              setIncrement(increment + 1);
            }}
            style={{
              ...style.icon,
              ...style.iconRounded,
              fontSize: "1.4rem",
              padding: ".4rem",
              color: "#fff",
              backgroundColor: "rgba(28, 126, 214, .70)",
              boxShadow: "0 .4rem .4rem rgba(0, 0, 0, .15) ",
              cursor: "pointer",
              transition: "all .3s",
            }}
            name="chevron-forward-outline"
          ></ion-icon>
        </Box>

        <Box paddingBottom="1.2rem" overflowX="scroll" marginBottom=".4rem">
          <Text
            fontSize="1.3rem"
            fontWeight="500"
            color={theme.colors.font.focused}
            margin=".8rem 0"
          >
            Morning
          </Text>
          <Flex gap=".8rem" padding=".4rem">
            {scheduleGenerator(
              [
                "07:00",
                "07:30",
                "08:00",
                "08:30",
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
              ],
              "AM"
            )}
          </Flex>
          <Text
            fontSize="1.3rem"
            fontWeight="500"
            color={`${theme.colors.font.focused}`}
            margin=".8rem 0"
          >
            Evening
          </Text>
          <Flex gap=".8rem" p="0 .4rem">
            {scheduleGenerator(
              [
                "12:00",
                "12:30",
                "01:00",
                "05:00",
                "05:30",
                "06:00",
                "06:30",
                "07:00",
                "07:30",
                "08:00",
                "08:30",
                "09:00",
                "09:30",
                "10:00",
              ],
              "PM"
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default TimeSlot;
