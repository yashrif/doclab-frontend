import {
  ModalBody,
  ModalContent,
  FormControl,
  Input,
  ModalFooter,
  Button,
  ModalHeader,
  Text,
  InputGroup,
  InputLeftElement,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { TbMail } from "react-icons/tb";
import PasswordInput from "./PasswordInput.jsx";
import ButtonFull from "../button/ButtonFull.jsx";
import { useEffect, useState } from "react";
import { validateEmail } from "../../assets/variable/values.js";

const LoginForm = ({
  initialRef,
  email,
  setEmail,
  password,
  setCurrWindow,
  setPassword,
  doLogin,
  loading,
  setDoLogin,
  onModalClose,
  loginError,
}) => {
  const [inputBlankWarning, setInputBlankWarning] = useState(false);
  const [credentialErrorMessage, setCredentialErrorMessage] = useState("");

  useEffect(() => {
    if (loginError != undefined) {
      if (loginError.response.status == 404)
        setCredentialErrorMessage("Invalid Email/Password");
    }
  }, [loginError]);

  useEffect(() => {
    if (doLogin != null && (email == "" || password == ""))
      setInputBlankWarning(true);
    setCredentialErrorMessage("");
  }, [doLogin]);

  return (
    <ModalContent my="auto" px="36" py="24" borderRadius="11px">
      <ModalCloseButton
        onClick={() => {
          setDoLogin(null);
          onModalClose();
        }}
        p="2rem"
      />
      <ModalHeader alignSelf="center" fontSize="2.4rem " color="blue.700">
        Welcome Back
      </ModalHeader>
      <ModalHeader fontSize="1.4rem" color="gray.400">
        Enter your credentials to access your account
      </ModalHeader>

      <ModalBody mt="3.6rem">
        <FormControl display="flex" alignItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none" size="xs">
              <TbMail
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  margin: ".4rem 0 0 auto",
                  color: "blue",
                }}
              />
            </InputLeftElement>
            <Input
              errorBorderColor="red.300"
              isInvalid={
                !validateEmail(email) || (email == "" && inputBlankWarning)
              }
              h="3rem"
              variant="outline"
              type="email"
              ref={initialRef}
              name="doctorEmail"
              pl="36"
              placeholder="User Email"
              value={email}
              onChange={(e) => {
                setCredentialErrorMessage("");
                setEmail(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>

        <FormControl mt="2.4rem" display="flex" alignItems="center">
          <PasswordInput
            inputBlankWarning={inputBlankWarning}
            password={password}
            setPassword={setPassword}
            initialRef={initialRef}
            setCredentialErrorMessage={setCredentialErrorMessage}
          />
        </FormControl>
        {credentialErrorMessage != "" && (
          <Text color="red" pt="1.4rem" fontSize={"md"}>
            {credentialErrorMessage}
          </Text>
        )}
      </ModalBody>

      <ModalFooter display="flex" mt="3.6rem" justifyContent="space-evenly">
        <ButtonFull
          isLoading={loading}
          py="1.4rem"
          px="16"
          fontSize={"14"}
          borderRadius={"lg"}
          fontWeight={"medium"}
          color={"#fff"}
          onClick={() => {
            setDoLogin(doLogin ? !doLogin : true);
          }}
        >
          Login
        </ButtonFull>
        <Button
          onClick={() => {
            setDoLogin(null);
            setCredentialErrorMessage("");
            setCurrWindow("signUpWindow");
          }}
          size="lg"
        >
          <Text mr="0.4rem">Sign Up</Text>
          <ArrowForwardIcon />
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default LoginForm;
