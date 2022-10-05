import {
  ModalContent,
  ModalFooter,
  Button,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const LoginSuccess = ({ onModalClose, setIsLoggedIn }) => {
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <ModalContent my="auto" p="2rem" borderRadius="11px">
      <ModalHeader
        textAlign="center"
        alignSelf="center"
        fontSize="2.4rem "
        color="blue.700"
      >
        Logged In!
      </ModalHeader>
      <ModalHeader textAlign="center" fontSize="1.4rem" color="gray.400">
        Go to your dashboard to see your Infos
      </ModalHeader>

      <ModalFooter display="flex" mt="2.6rem" justifyContent="space-evenly">
        <Button onClick={onModalClose} size="lg">
          <Text mr="0.4rem">Close</Text>
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default LoginSuccess;
