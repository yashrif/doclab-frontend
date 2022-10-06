import {
  Box,
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
import { ArrowForwardIcon } from "@chakra-ui/icons";
import apiGet from "../../hooks/apiPost.jsx";
import { SERVER } from "../../assets/variable/values";

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
  const DATE_FORMAT = {
    // weekday: "short",
    month: "short",
    day: "numeric",
  };

  const formattedDate = () => {
    const offset = selectedDate.getTimezoneOffset();
    const date = new Date(selectedDate.getTime() - offset * 60 * 1000);
    return `${date.toISOString().split("T")[0]}T${time}`;
  };

  const closePopUp = () => {
    setLoading(false);
    setSuccessful(false);
    onClose();
  };

  // Submit appointment
  const [successResponse, , fetchSuccess] = apiGet();

  useEffect(() => {
    if (loading)
      fetchSuccess(
        `${SERVER}/appointment/post`,
        {
          doctorId: selectedPerson.doctorID,
          appointmentSlotStartTime: formattedDate(),
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
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        // onClick={() => console.log("clicked")}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="auto"
          backdropBlur="2px"
        />
        <ModalContent my="auto" p="2rem" borderRadius="11px">
          <ModalCloseButton onClick={closePopUp} p="2rem" />
          <ModalHeader alignSelf="center" fontSize="1.8rem " color="blue.700">
            Request Appointment
          </ModalHeader>
          <ModalHeader
            fontSize="1.4rem"
            mt="0.3rem"
            color="gray.400"
            textAlign="center"
          >
            {`On ${selectedDate.toLocaleDateString(
              "en-US",
              DATE_FORMAT
            )} at ${time} ${period} with ${selectedPerson.doctorName}`}
          </ModalHeader>
          {localStorage.getItem("patientToken") != null ? (
            <ModalFooter
              display="flex"
              mt="2.6rem"
              justifyContent="space-evenly"
            >
              {successful ? (
                <Text fontSize="1.4rem" color="blue.400" textAlign="center">
                  Appointment submitted
                </Text>
              ) : (
                <Button
                  size="lg"
                  onClick={() => setLoading(true)}
                  isLoading={loading}
                >
                  <Text mr="0.4rem">Submit</Text>
                  <ArrowForwardIcon />
                </Button>
              )}
            </ModalFooter>
          ) : (
            <Text
              fontSize="1.4rem"
              mt="1rem"
              color="blue.400"
              p="1rem"
              textAlign="center"
            >
              Please log in as patient to request for appointment
            </Text>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppointmentPopUp;
