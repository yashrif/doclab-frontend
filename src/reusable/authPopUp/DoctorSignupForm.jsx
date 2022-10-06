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
import { useEffect, useState } from "react";
import { validateEmail } from "../../assets/variable/values.js";

const DoctorSignUp = ({
  handleSignUpChange,
  signUpInfo,
  refInput,
  setSignUpInfo,
  doSignUp,
}) => {
  const [inputBlankWarning, setInputBlankWarning] = useState(false);
  useEffect(() => {
    if (
      doSignUp != null &&
      (signUpInfo.doctorName == "" ||
        signUpInfo.doctorSpeciality == "" ||
        signUpInfo.doctorClinicName == "" ||
        signUpInfo.doctorGender == "" ||
        signUpInfo.doctorSubDistrict == "" ||
        signUpInfo.doctorLocation == "" ||
        signUpInfo.authEmail == "" ||
        signUpInfo.doctorImageUUID == "" ||
        signUpInfo.authPassword == "" ||
        !validateEmail(signUpInfo.authEmail))
    ) {
      setInputBlankWarning(true);
    }
  }, [doSignUp]);

  return (
    <ModalBody mt="1.8rem" pb="1.4rem">
      <FormControl display="flex" alignItems="center">
        <Input
          errorBorderColor="red.300"
          borderColor={
            signUpInfo.doctorName == "" && inputBlankWarning ? "red" : "black"
          }
          ref={refInput}
          h="3.4rem"
          variant="flushed"
          placeholder="Full Name"
          onChange={handleSignUpChange}
          value={signUpInfo.doctorName}
          name="doctorName"
        />
      </FormControl>

      <FormControl mt="1rem" display="flex" alignItems="center">
        <Input
          errorBorderColor="red.300"
          isInvalid={signUpInfo.doctorSpeciality == "" && inputBlankWarning}
          h="3.4rem"
          variant="flushed"
          placeholder="Speciality"
          onChange={handleSignUpChange}
          value={signUpInfo.doctorSpeciality}
          name="doctorSpeciality"
        />
      </FormControl>

      <FormControl mt="1rem">
        <Input
          errorBorderColor="red.300"
          isInvalid={signUpInfo.doctorClinicName == "" && inputBlankWarning}
          h="3.4rem"
          variant="flushed"
          placeholder="Affiliated Hospital"
          onChange={handleSignUpChange}
          value={signUpInfo.doctorClinicName}
          name="doctorClinicName"
        />
      </FormControl>

      <Flex gap={"24"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Select
          errorBorderColor="red.300"
          isInvalid={signUpInfo.doctorGender == "" && inputBlankWarning}
          fontSize={"md"}
          placeholder="Select Gender"
          name="doctorGender"
          mt="2.4rem"
          onChange={handleSignUpChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>

        <Select
          errorBorderColor="red.300"
          isInvalid={signUpInfo.doctorSubDistrict == "" && inputBlankWarning}
          fontSize={"md"}
          name="doctorSubDistrict"
          mt="2.4rem"
          onChange={handleSignUpChange}
          placeholder="Select Sub-District"
        >
          {subDistrictList.map((ele) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
        </Select>
      </Flex>

      <FormControl display="flex" mt="1rem" alignItems="center">
        <Input
          errorBorderColor="red.300"
          isInvalid={signUpInfo.doctorLocation == "" && inputBlankWarning}
          h="3.4rem"
          variant="flushed"
          placeholder="Location"
          onChange={handleSignUpChange}
          value={signUpInfo.doctorLocation}
          name="doctorLocation"
        />
      </FormControl>

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
            errorBorderColor="red.300"
            isInvalid={
              !validateEmail(signUpInfo.authEmail) ||
              (signUpInfo.authEmail == "" && inputBlankWarning)
            }
            h="3rem"
            variant="outline"
            placeholder="User Email"
            type="email"
            name="authEmail"
            pl="36"
            onChange={handleSignUpChange}
            value={signUpInfo.authEmail}
          />
        </InputGroup>
      </FormControl>

      <FormControl mt="2.4rem" display="flex" alignItems="center">
        <PasswordInput
          inputBlankWarning={inputBlankWarning}
          setPassword={(val) =>
            setSignUpInfo((prevState) => ({
              ...prevState,
              ["authPassword"]: val,
            }))
          }
          password={signUpInfo.authPassword}
        />
      </FormControl>

      <FormControl display="flex" mt="24" alignItems="center">
        <Box
          border={
            signUpInfo.doctorImageUUID == "" && inputBlankWarning
              ? "2px solid"
              : "none"
          }
          borderColor={
            signUpInfo.doctorImageUUID == "" && inputBlankWarning
              ? "red.300"
              : "black"
          }
          borderRadius="4px"
        >
          <Widget
            onChange={(fileInfo) =>
              setSignUpInfo((prevState) => ({
                ...prevState,
                ["doctorImageUUID"]: fileInfo.uuid,
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
export default DoctorSignUp;
