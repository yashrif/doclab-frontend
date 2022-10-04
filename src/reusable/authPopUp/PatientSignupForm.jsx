import {
  ModalBody,
  FormControl,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { subDistrictList } from "../../assets/variable/values";
import PasswordInput from "./PasswordInput.jsx";
import { EmailIcon } from "@chakra-ui/icons";
import { Widget } from "@uploadcare/react-widget";

const PatientSignup = ({
  handleSignupChange,
  signupInfo,
  refInput,
  setSignupInfo,
}) => {
  return (
    <ModalBody mt="1.8rem" pb="1.4rem">
      <FormControl display="flex" alignItems="center">
        <Input
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

      <Select
        placeholder="Select Gender"
        name="patientGender"
        mt="2.4rem"
        h="2.8rem"
        onChange={handleSignupChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select
        name="patientSubDistrict"
        mt="2.4rem"
        onChange={handleSignupChange}
        placeholder="Select Sub-Distric"
      >
        {subDistrictList.map((ele) => (
          <option value={ele} key={ele}>
            {ele}
          </option>
        ))}
      </Select>

      <FormControl mt="2.4rem">
        <InputGroup>
          <InputLeftElement pointerEvents="none" size="xs">
            {" "}
            <EmailIcon w="1.8rem" h="1.8rem" mt="auto" ml="1rem" color="blue" />
          </InputLeftElement>
          <Input
            h="3rem"
            variant="outline"
            placeholder="User Email"
            type="email"
            name="authEmail"
            pl="3rem"
            onChange={handleSignupChange}
            value={signupInfo.authEmail}
          />
        </InputGroup>
      </FormControl>

      <FormControl mt="2.4rem" display="flex" alignItems="center">
        <PasswordInput
          setPassword={(val) =>
            setSignupInfo((prevState) => ({
              ...prevState,
              ["authPassword"]: val,
            }))
          }
          password={signupInfo.authPassword}
        />
      </FormControl>

      <FormControl display="flex" mt="1.4rem" alignItems="center">
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
          tabs="file gdrive url"
          imageShrink="200x210"
        />
      </FormControl>
    </ModalBody>
  );
};
export default PatientSignup;
