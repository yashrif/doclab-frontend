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
}) => {
  return (
    <ModalContent my="auto" p="2rem" borderRadius="11px">
      <ModalCloseButton onClick={onModalClose} p="2rem" />
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
              h="3rem"
              variant="outline"
              ref={initialRef}
              name="doctorEmail"
              pl="36"
              placeholder="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl mt="2.4rem" display="flex" alignItems="center">
          <PasswordInput
            password={password}
            setPassword={setPassword}
            initialRef={initialRef}
          />
        </FormControl>
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
            setDoLogin(1 - doLogin);
          }}
        >
          Login
        </ButtonFull>
        <Button onClick={() => setCurrWindow("signUpWindow")} size="lg">
          <Text mr="0.4rem">Sign Up</Text>
          <ArrowForwardIcon />
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default LoginForm;
