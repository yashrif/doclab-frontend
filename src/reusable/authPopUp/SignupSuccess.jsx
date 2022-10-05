import {
  ModalContent,
  ModalFooter,
  Button,
  ModalHeader,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const signUpSuccess = ({ setCurrWindow, onModalClose }) => {
  return (
    <ModalContent my="auto" p="2rem" borderRadius="11px">
      <ModalCloseButton onClick={onModalClose} p="2rem" />
      <ModalHeader textAlign="center" fontSize="2.4rem " color="blue.700">
        Sign Up Succesful!
      </ModalHeader>
      <ModalHeader textAlign="center" fontSize="1.4rem" color="gray.400">
        Go to Login page to Login
      </ModalHeader>

      <ModalFooter display="flex" mt="1.8rem" justifyContent="space-evenly">
        <Button onClick={() => setCurrWindow("logInWindow")} size="lg">
          <ArrowBackIcon />
          <Text ml="0.4rem">Login</Text>
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default signUpSuccess;
