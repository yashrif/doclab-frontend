import {
  ModalBody,
  FormControl,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
  Flex,
  Box,
} from "@chakra-ui/react";
import { subDistrictList } from "../../assets/variable/values";
import PasswordInput from "./PasswordInput.jsx";
import { TbMail } from "react-icons/tb";
import { Widget } from "@uploadcare/react-widget";
import { useState, useEffect } from "react";
import { validateEmail } from "../../assets/variable/values.js";

const PatientSignup = ({
  handleSignupChange,
  signupInfo,
  refInput,
  setSignupInfo,
  doSignup,
}) => {
  const [inputBlankWarning, setInputBlankWarning] = useState(false);
  useEffect(() => {
    if (
      doSignup != null &&
      (signupInfo.patientName == "" ||
        signupInfo.patientPhone == "" ||
        signupInfo.patientGender == "" ||
        signupInfo.patientSubDistrict == "" ||
        signupInfo.authEmail == "" ||
        signupInfo.patientImageUUID == "" ||
        !validateEmail(signupInfo.authEmail))
    )
      setInputBlankWarning(true);
  }, [doSignup]);

  return (
    <ModalBody mt="1.8rem" pb="1.4rem">
      <FormControl display="flex" alignItems="center">
        <Input
          errorBorderColor="red.400"
          isInvalid={signupInfo.patientName == "" && inputBlankWarning}
          ref={refInput}
          h="3.4rem"
          variant="flushed"
          placeholder="Full Name"
          onChange={handleSignupChange}
          value={signupInfo.patientName}
          name="patientName"
        />
      </FormControl>

      <FormControl mt="1rem" display="flex" alignItems="center" type="tel">
        <Input
          errorBorderColor="red.300"
          isInvalid={signupInfo.patientPhone == "" && inputBlankWarning}
          h="3.4rem"
          variant="flushed"
          placeholder="Phone no"
          onChange={handleSignupChange}
          value={signupInfo.patientPhone}
          name="patientPhone"
        />
      </FormControl>

      {/* <FormControl mt='1rem' >
        <Input h='3.4rem' variant='flushed' placeholder='Affiliated Hospital'
          onChange={handleSignupChange}
          value={signupInfo.doctorClinicName}
          name="doctorClinicName" />
      </FormControl> */}

      <Flex gap={"24"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Select
          errorBorderColor="red.300"
          isInvalid={signupInfo.patientGender == "" && inputBlankWarning}
          placeholder="Select Gender"
          name="patientGender"
          mt="2.4rem"
          onChange={handleSignupChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
        <Select
          errorBorderColor="red.300"
          isInvalid={signupInfo.patientSubDistrict == "" && inputBlankWarning}
          fontSize={"md"}
          name="patientSubDistrict"
          mt="2.4rem"
          onChange={handleSignupChange}
          placeholder="Select Sub-District"
        >
          {subDistrictList.map((ele) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
        </Select>
      </Flex>

      <FormControl mt="2.4rem">
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
            placeholder="User Email"
            type="email"
            errorBorderColor="red.300"
            isInvalid={
              !validateEmail(signupInfo.authEmail) ||
              (signupInfo.authEmail == "" && inputBlankWarning)
            }
            name="authEmail"
            pl="36"
            onChange={handleSignupChange}
            value={signupInfo.authEmail}
          />
        </InputGroup>
      </FormControl>

      <FormControl mt="2.4rem" display="flex" alignItems="center">
        <PasswordInput
          inputBlankWarning={inputBlankWarning}
          setPassword={(val) =>
            setSignupInfo((prevState) => ({
              ...prevState,
              ["authPassword"]: val,
            }))
          }
          password={signupInfo.authPassword}
        />
      </FormControl>

      <FormControl display="flex" mt="24" alignItems="center">
        <Box
          border={
            signupInfo.patientImageUUID == "" && inputBlankWarning
              ? "2px solid"
              : "none"
          }
          borderColor={
            signupInfo.patientImageUUID == "" && inputBlankWarning
              ? "red.300"
              : "black"
          }
          borderRadius="4px"
        >
          <Widget
            onChange={(fileInfo) =>
              setSignupInfo((prevState) => ({
                ...prevState,
                ["patientImageUUID"]: fileInfo.uuid,
              }))
            }
            publicKey="6c3c08a73b43963de87b"
            clearable
            imagesOnly
            previewStep
            imageShrink="420x210"
            tabs="file gdrive url"
            crop="1:1"
          />
        </Box>
      </FormControl>
    </ModalBody>
  );
};
export default PatientSignup;
