import React, { useEffect, useRef, useState } from "react";
import {
  ModalBody,
  FormControl,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import { subDistrictList } from "../../assets/variable/values";
import PasswordInput from "./PasswordInput.jsx";
import { TbMail } from "react-icons/tb";
import { Widget } from "@uploadcare/react-widget";
import { validateEmail } from "../../assets/variable/values.js";
import Avatar from "../../assets/img/avatar.png";
import theme from "../../styling/theme.jsx";

const DoctorSignUp = ({
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
    <>
      <style>
        {`
          .user-image::before {
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            height: 7.2rem;
            width: 7.2rem;
            background-image: linear-gradient(145deg,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.2)
              );

            z-index: 5;
            opacity: 0;
            transition: all 0.3s linear;
          }

          .user-image:hover::before {
            opacity: 1;
          }

          .user-image::after {
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            height: 7.2rem;
            width: 7.2rem;
            background-image: linear-gradient(145deg,
              rgba(240, 62, 62, 0.25),
              rgba(240, 62, 62, 0.5),
              rgba(240, 62, 62, 0.75)
              );

            z-index: 5;
            opacity: ${
              signUpInfo.doctorImageUUID == "" && inputBlankWarning ? 1 : 0
            };
            transition: all 0.3s linear;
          }
        `}
      </style>
      <ModalBody>
        <FormControl
          display="flex"
          mt="20"
          mb="4"
          alignItems="center"
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box
            borderRadius={"50%"}
            className="user-image"
            role={"button"}
            onClick={() => widgetRef.current.openDialog()}
            position="relative"
          >
            <Image
              src={imgPath ? imgPath : Avatar}
              boxSize={"7.2rem"}
              objectFit={"cover"}
              borderRadius="50%"
              transition={"all .3s"}
            />
          </Box>

          <Widget
            ref={widgetRef}
            onChange={(fileInfo) => {
              setSignUpInfo((prevState) => ({
                ...prevState,
                ["doctorImageUUID"]: fileInfo.uuid,
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
            errorBorderColor="red.300"
            isInvalid={signUpInfo.doctorName == "" && inputBlankWarning}
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
                  color: theme.colors.primary.base,
                }}
              />
            </InputLeftElement>
            <Input
              errorBorderColor="red.300"
              isInvalid={
                (!validateEmail(signUpInfo.authEmail) && inputBlankWarning) ||
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
      </ModalBody>
    </>
  );
};
export default DoctorSignUp;
