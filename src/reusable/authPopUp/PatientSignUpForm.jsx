import React, { useState, useEffect, useRef } from "react";
import {
  ModalBody,
  FormControl,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
  Flex,
  Image,
} from "@chakra-ui/react";
import { subDistrictList } from "../../assets/variable/values";
import PasswordInput from "./PasswordInput.jsx";
import { TbMail } from "react-icons/tb";
import { Widget } from "@uploadcare/react-widget";
import { validateEmail } from "../../assets/variable/values.js";
import Avatar from "../../assets/img/avatar.png";

const PatientSignUp = ({
  handleSignUpChange,
  signUpInfo,
  refInput,
  setSignUpInfo,
  doSignUp,
}) => {
  const [inputBlankWarning, setInputBlankWarning] = useState(false);
  const [imgPath, setImgPath] = useState("");
  const widgetRef = useRef();

  useEffect(() => {
    if (
      doSignUp != null &&
      (signUpInfo.patientName == "" ||
        signUpInfo.patientPhone == "" ||
        signUpInfo.patientGender == "" ||
        signUpInfo.patientSubDistrict == "" ||
        signUpInfo.authEmail == "" ||
        signUpInfo.patientImageUUID == "" ||
        !validateEmail(signUpInfo.authEmail))
    )
      setInputBlankWarning(true);
  }, [doSignUp]);

  return (
    <ModalBody>
      <FormControl
        display="flex"
        mt="20"
        mb="4"
        alignItems="center"
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Image
          src={imgPath ? imgPath : Avatar}
          boxSize={"7.2rem"}
          p={0}
          role={"button"}
          onClick={() => widgetRef.current.openDialog()}
          border={
            signUpInfo.patientImageUUID == "" && inputBlankWarning
              ? "2px solid"
              : "2px solid"
          }
          borderColor={
            signUpInfo.patientImageUUID == "" && inputBlankWarning
              ? "red.300"
              : "#777"
          }
          objectFit={"cover"}
          borderRadius="50%"
          transition={"all .3s"}
          _hover={{
            backgroundColor: "#000",
            opacity: "0.5",
          }}
        />
        <Widget
          ref={widgetRef}
          onChange={(fileInfo) => {
            setSignUpInfo((prevState) => ({
              ...prevState,
              ["patientImageUUID"]: fileInfo.uuid,
            }));
            setImgPath(fileInfo.cdnUrl);
          }}
          publicKey="6c3c08a73b43963de87b"
          clearable
          imagesOnly
          previewStep
          imageShrink="420x420"
          tabs="file gdrive url"
          crop="8:10"
        />
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <Input
          errorBorderColor="red.400"
          isInvalid={signUpInfo.patientName == "" && inputBlankWarning}
          ref={refInput}
          h="3.4rem"
          variant="flushed"
          placeholder="Full Name"
          onChange={handleSignUpChange}
          value={signUpInfo.patientName}
          name="patientName"
        />
      </FormControl>

      <FormControl mt="1rem" display="flex" alignItems="center" type="tel">
        <Input
          errorBorderColor="red.300"
          isInvalid={signUpInfo.patientPhone == "" && inputBlankWarning}
          h="3.4rem"
          variant="flushed"
          placeholder="Phone no"
          onChange={handleSignUpChange}
          value={signUpInfo.patientPhone}
          name="patientPhone"
        />
      </FormControl>

      {/* <FormControl mt='1rem' >
        <Input h='3.4rem' variant='flushed' placeholder='Affiliated Hospital'
          onChange={handleSignUpChange}
          value={signUpInfo.doctorClinicName}
          name="doctorClinicName" />
      </FormControl> */}

      <Flex gap={"24"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Select
          errorBorderColor="red.300"
          isInvalid={signUpInfo.patientGender == "" && inputBlankWarning}
          placeholder="Select Gender"
          name="patientGender"
          mt="2.4rem"
          onChange={handleSignUpChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
        <Select
          errorBorderColor="red.300"
          isInvalid={signUpInfo.patientSubDistrict == "" && inputBlankWarning}
          fontSize={"md"}
          name="patientSubDistrict"
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
              (!validateEmail(signUpInfo.authEmail) && inputBlankWarning) ||
              (signUpInfo.authEmail == "" && inputBlankWarning)
            }
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
    </ModalBody>
  );
};
export default PatientSignUp;
