import {
  ModalBody, FormControl, Input, Select, InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { subDistrictList } from "../../assets/variable/values";
import PasswordInput from "./PaswordInput.jsx";
import { EmailIcon } from "@chakra-ui/icons";
const DoctorSignup = ({
  handleSignupChange,
  signupInfo,
  refInput,
  setSignupInfo

}) => {

  return (
    <ModalBody mt='1.8rem' pb='1.4rem' >

      <FormControl display='flex' alignItems='center'>
        <Input ref={refInput} h='3.4rem' variant='flushed' placeholder='Full Name'
          onChange={handleSignupChange}
          value={signupInfo.doctorName}
          name="doctorName" />
      </FormControl>

      <FormControl mt='1rem' display='flex' alignItems='center'>
        <Input h='3.4rem' variant='flushed' placeholder='Speciality'
          onChange={handleSignupChange}
          value={signupInfo.doctorSpeciality}
          name="doctorSpeciality" />
      </FormControl>

      <FormControl mt='1rem' >
        <Input h='3.4rem' variant='flushed' placeholder='Affiliated Hospital'
          onChange={handleSignupChange}
          value={signupInfo.doctorClinicName}
          name="doctorClinicName" />
      </FormControl>



      <Select placeholder='Select Gender'
        name="doctorGender" mt='2.4rem'
        h='2.8rem'
        onChange={handleSignupChange}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </Select>
      <Select name="doctorSubDistrict" mt='2.4rem'
        onChange={handleSignupChange} placeholder='Select Sub-Distric'>
        {
          subDistrictList.map((ele) => <option value={ele} key={ele}>{ele}</option>)}

      </Select>

      <FormControl mt='2.4rem'>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"

            size="xs"
          > <EmailIcon w='1.8rem' h='1.8rem' mt='auto'
            ml='1rem'
            color='blue' />
          </InputLeftElement>
          <Input h='3rem' variant='outline' placeholder='User Email' type='email'
            name="authEmail" pl='3rem'
            onChange={handleSignupChange} value={signupInfo.authEmail} />
        </InputGroup>
      </FormControl>

      <FormControl mt='2.4rem' display='flex' alignItems='center'>

        <PasswordInput
          setPassword={(val) =>
            setSignupInfo(prevState => ({
              ...prevState,
              ["authPassword"]: val
            }))
          }
          password={signupInfo.authPassword}
        />
      </FormControl>

      <FormControl display='flex' mt='1rem' alignItems='center'>
        <Input h='3.4rem' variant='flushed' placeholder='Location'
          onChange={handleSignupChange}
          value={signupInfo.doctorLocation}
          name="doctorLocation" />
      </FormControl>

    </ModalBody>
  );

}
export default DoctorSignup;