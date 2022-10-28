import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Button,
  Text,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import apiPost from "../../hooks/apiPost.jsx";
import { SERVER, DATE_FORMAT } from "../../assets/variable/values";
import theme from "../../styling/theme.jsx";
const AppointmentPopUp = ({
  children,
  time,
  selectedPerson,
  period,
  selectedDate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const formattedDate = () => {
    const temp = time.split(":");
    const offset = selectedDate.getTimezoneOffset();
    const date = new Date(selectedDate.getTime() - offset * 60 * 1000);
    return `${date.toISOString().split("T")[0]}T${
      period == "PM" && temp[0] < 12
        ? [parseInt(temp[0]) + 12, temp[1]].join(":")
        : time
    }`;
  };

  const closePopUp = () => {
    setLoading(false);
    setSuccessful(false);
    onClose();
  };

  // Submit appointment
  const [successResponse, , fetchSuccess] = apiPost();

  useEffect(() => {
    // console.log(formattedDate());
    if (loading)
      fetchSuccess(
        `${SERVER}/appointment/post`,
        {
          doctorId: selectedPerson.doctorID,
          appointmentSlotDate: formattedDate(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            TOKEN: localStorage.getItem("patientToken"),
          },
        }
      );
  }, [loading]);

  useEffect(() => {
    if (successResponse != null && successResponse.appointmentId != null) {
      setLoading(false);
      setSuccessful(true);
    }
  }, [successResponse]);

  return (
    <>
      <Box onClick={onOpen} ref={finalRef}>
        {children}
      </Box>
      <Modal
        closeonoverlayclick="true"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        onOverlayClick={closePopUp}
        // onClick={() => console.log("clicked")}
      >
        <ModalOverlay
          closeonoverlayclick="true"
          bg="blackAlpha.300"
          backdropFilter="auto"
          backdropBlur="2px"
        />
        <ModalContent my="auto" py="24" px="12" borderRadius="11px">
          <ModalCloseButton onClick={closePopUp} m={"4"} />
          <ModalHeader
            fontSize="2xl"
            fontWeight={"bold"}
            color="blue.700"
            mb="1.2rem"
            textAlign={"center"}
          >
            Request Appointment
          </ModalHeader>
          {localStorage.getItem("patientToken") != null ? (
            <ModalFooter
              display="flex"
              justifyContent="space-evenly"
              flexDir={"column"}
              alignItems="flex-start"
            >
              <Text fontSize="lg" color="gray" textAlign={"center"}>
                {`Make an appointment on ${selectedDate.toLocaleDateString(
                  "en-US",
                  DATE_FORMAT
                )} at ${time} ${period} with Dr. ${selectedPerson.doctorName}.`}
              </Text>
              {successful ? (
                <Text
                  fontSize="lg"
                  color="blue.400"
                  mt="1.6rem"
                  textAlign="center"
                  w="full"
                >
                  Appointment submitted
                </Text>
              ) : (
                <Flex
                  width="full"
                  px="2rem"
                  mt="1.8rem"
                  justifyContent={"space-between"}
                >
                  <Button
                    variant={"outline"}
                    alignSelf={"center"}
                    size="lg"
                    onClick={onClose}
                    px="3.2rem"
                  >
                    Cancel
                  </Button>
                  <Button
                    alignSelf={"center"}
                    size="lg"
                    color={theme.typography.colors.primaryFirst.primary}
                    onClick={() => setLoading(true)}
                    isLoading={loading}
                    px="3.2rem"
                  >
                    Submit
                  </Button>
                </Flex>
              )}
            </ModalFooter>
          ) : (
            <Text fontSize="lg" pl="1.4rem" color="gray.400">
              Please log in as patient to request for appointment.
            </Text>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppointmentPopUp;
