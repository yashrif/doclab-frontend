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
import { TbMail } from "react-icons/tb";
import { Widget } from "@uploadcare/react-widget";
const DoctorSignup = ({
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
          value={signupInfo.doctorName}
          name="doctorName"
        />
      </FormControl>

      <FormControl mt="1rem" display="flex" alignItems="center">
        <Input
          h="3.4rem"
          variant="flushed"
          placeholder="Speciality"
          onChange={handleSignupChange}
          value={signupInfo.doctorSpeciality}
          name="doctorSpeciality"
        />
      </FormControl>

      <FormControl mt="1rem">
        <Input
          h="3.4rem"
          variant="flushed"
          placeholder="Affiliated Hospital"
          onChange={handleSignupChange}
          value={signupInfo.doctorClinicName}
          name="doctorClinicName"
        />
      </FormControl>

      <Select
        placeholder="Select Gender"
        name="doctorGender"
        mt="2.4rem"
        h="2.8rem"
        onChange={handleSignupChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select
        name="doctorSubDistrict"
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

      <FormControl display="flex" mt="1rem" alignItems="center">
        <Input
          h="3.4rem"
          variant="flushed"
          placeholder="Location"
          onChange={handleSignupChange}
          value={signupInfo.doctorLocation}
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
            h="3rem"
            variant="outline"
            placeholder="User Email"
            type="email"
            name="authEmail"
            pl="36"
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

      <FormControl display="flex" mt="2.4rem" alignItems="center">
        <Widget
          onChange={(fileInfo) =>
            setSignupInfo((prevState) => ({
              ...prevState,
              ["doctorImageUUID"]: fileInfo.uuid,
            }))
          }
          publicKey="6c3c08a73b43963de87b"
          clearable
          imagesOnly
          previewStep
          imageShrink="200x210"
          tabs="file gdrive url"
        />
      </FormControl>
    </ModalBody>
  );
};
export default DoctorSignup;
