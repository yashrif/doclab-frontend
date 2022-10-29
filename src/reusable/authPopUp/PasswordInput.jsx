import { useState } from "react";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiLockOpen } from "react-icons/bi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import theme from "../../styling/theme.jsx";

const PasswordInput = ({
  password,
  setPassword,
  inputBlankWarning,
  setCredentialErrorMessage,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const eyeIcon = {
    width: "1.6rem",
    height: "1.6rem",
    color: theme.colors.primary.base,
  };

  return (
    <>
      <InputGroup size="md" display="flex" alignContent="center">
        <InputLeftElement pointerEvents="none" size="xs">
          <BiLockOpen
            style={{
              width: "1.8rem",
              height: "1.8rem",
              margin: ".4rem 0 0 auto",
              color: theme.colors.primary.base,
            }}
          />
        </InputLeftElement>
        <Input
          errorBorderColor="red.300"
          isInvalid={password == "" && inputBlankWarning}
          h="3.4rem"
          pl="36"
          pr="4.5rem"
          variant="outline"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          onChange={(e) => {
            if (setCredentialErrorMessage != null)
              setCredentialErrorMessage("");
            setPassword(e.target.value);
          }}
          value={password}
        />
        <InputRightElement width="5rem" mt="0.4rem">
          <Button size="sm" onClick={handleClick} bg={"transparent"}>
            {show ? (
              <VscEyeClosed style={eyeIcon} />
            ) : (
              <VscEye style={eyeIcon} />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default PasswordInput;
