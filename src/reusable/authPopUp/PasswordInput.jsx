import { useState } from "react";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiLockOpen } from "react-icons/bi";

const PasswordInput = ({ password, setPassword }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup size="md" display="flex" alignContent="center">
        <InputLeftElement pointerEvents="none" size="xs">
          <BiLockOpen
            style={{
              width: "1.8rem",
              height: "1.8rem",
              margin: ".4rem 0 0 auto",
              color: "blue",
            }}
          />
        </InputLeftElement>
        <Input
          h="3.4rem"
          pl="36"
          pr="4.5rem"
          variant="outline"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <InputRightElement width="5rem" mt="0.4rem">
          <Button size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default PasswordInput;
