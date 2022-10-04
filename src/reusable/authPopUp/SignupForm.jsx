import {
  ModalContent,
  ModalFooter,
  Button,
  ModalHeader,
  Text,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import DoctorSignupForm from "./DoctorSignupForm.jsx";
import PatientSignupForm from "./PatientSignupForm.jsx";
import ButtonFull from "../button/ButtonFull.jsx";
const SignupForm = ({
  setCatagory,
  setCurrWindow,
  loading,
  setSignupInfo,
  signupInfo,
  doSignup,
  setDoSignup,
  onModalClose,
}) => {
  const [docNow, setDocNow] = useState(true);
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, [docNow]);
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <ModalContent my="auto" px="36" py={"24"} borderRadius="11px">
      <ModalCloseButton onClick={onModalClose} p="2rem" />
      <ModalHeader textAlign="center" fontSize="2.4rem " color="blue.700">
        Sign Up
      </ModalHeader>
      <ModalHeader
        textAlign="center"
        fontSize="1.4rem"
        color="gray.400"
        fontWeight={"medium"}
      >
        Enter your details
      </ModalHeader>
      <Box display="flex" mt="2.4rem" justifyContent={"center"}>
        <Button
          onClick={() => {
            setDocNow(true);
            setCatagory("doctor");
            refInput.current.focus();
          }}
          colorScheme="none"
          variant="none"
          textDecoration="none"
          fontSize={12}
          fontWeight="medium"
          letterSpacing=".25px"
          px={5}
          py={12}
          color={docNow ? "font.light" : "font.general"}
          border="none"
          // borderRadius="xl"
          borderRadius="5px"
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          // boxShadow={`inset 0 0 0 0.25rem ${theme.colors.primary.base}`}
          transition="all 0.3s"
          bg={docNow ? "primary.400" : "gray.200"}
          _hover={{
            color: "#fff",
            bg: docNow ? "primary.500" : "gray.400",
            //boxShadow: `inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0.2rem .2rem rgba(28, 126, 214, 0.5)`,
          }}
        >
          Doctor
        </Button>
        <Button
          onClick={() => {
            setDocNow(false);
            refInput.current.focus();
            setCatagory("patient");
          }}
          colorScheme="none"
          variant="none"
          textDecoration="none"
          fontSize={12}
          fontWeight="medium"
          letterSpacing=".25px"
          px={5}
          color={!docNow ? "font.light" : "font.general"}
          border="none"
          // borderRadius="xl"

          borderRadius="5px"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          // boxShadow={`inset 0 0 0 0.25rem ${theme.colors.primary.base}`}
          transition="all 0.3s"
          bg={!docNow ? "primary.400" : "gray.200"}
          _hover={{
            color: "#fff",
            bg: !docNow ? "primary.500" : "gray.400",
            //boxShadow: `inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0.2rem .2rem rgba(28, 126, 214, 0.5)`,
          }}
        >
          Patient
        </Button>
      </Box>

      {docNow ? (
        <DoctorSignupForm
          handleSignupChange={handleSignupChange}
          signupInfo={signupInfo}
          refInput={refInput}
          setSignupInfo={setSignupInfo}
        />
      ) : (
        <PatientSignupForm
          handleSignupChange={handleSignupChange}
          signupInfo={signupInfo}
          refInput={refInput}
          setSignupInfo={setSignupInfo}
        />
      )}

      <ModalFooter display="flex" mt="1.8rem" justifyContent="space-evenly">
        <ButtonFull
          isLoading={loading}
          py="1.4rem"
          px="16"
          fontSize={"14"}
          borderRadius={"lg"}
          fontWeight={"medium"}
          color={"#fff"}
          onClick={() => {
            setDoSignup(1 - doSignup);
          }}
        >
          SignUp
        </ButtonFull>
        <Button onClick={() => setCurrWindow("logInWindow")} size="lg">
          <Text mr="0.4rem">Login</Text>
          <ArrowForwardIcon />
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default SignupForm;
