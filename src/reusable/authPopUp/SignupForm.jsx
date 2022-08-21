import {
  ModalBody,
  ModalContent, FormControl, Input,
  ModalFooter, Button,
  ModalHeader
  , Text, Select, InputGroup, InputLeftElement,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import { subDistrictList } from "../../assets/variable/values.js";
import PasswordInput from "./PaswordInput.jsx";


const SignupForm = ({
  initialRef,
  setCurrWindow,
  loading,
  setSignupInfo,
  signupInfo,
  doSignup,
  setDoSignup,
  onModalClose
}) => {
  const handleSignupChange = e => {
    const { name, value } = e.target;
    setSignupInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (

    <ModalContent my='auto' p='2rem' borderRadius='11px'>
      <ModalCloseButton onClick={onModalClose} p='2rem' />
      <ModalHeader textAlign='center' fontSize='2.4rem ' color='blue.700'>Sign Up</ModalHeader>
      <ModalHeader textAlign='center' fontSize='1.4rem' color='gray.400'>Enter your details</ModalHeader>

      <ModalBody mt='1.8rem' pb='1.4rem' >

        <FormControl display='flex' alignItems='center'>
          <Input ref={initialRef} h='3.4rem' variant='flushed' placeholder='Full Name'
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
              name="doctorEmail" pl='3rem'
              onChange={handleSignupChange} value={signupInfo.doctorEmail} />
          </InputGroup>
        </FormControl>

        <FormControl mt='2.4rem' display='flex' alignItems='center'>

          <PasswordInput
            setPassword={(val) =>
              setSignupInfo(prevState => ({
                ...prevState,
                ["doctorPassword"]: val
              }))
            }
            password={signupInfo.doctorPassword}
          />
        </FormControl>

        <FormControl display='flex' mt='1rem' alignItems='center'>
          <Input h='3.4rem' variant='flushed' placeholder='Location'
            onChange={handleSignupChange}
            value={signupInfo.doctorLocation}
            name="doctorLocation" />
        </FormControl>

      </ModalBody>

      <ModalFooter display='flex' mt='1.8rem' justifyContent='space-evenly'>
        <Button isLoading={loading} colorScheme='blue' size='lg' onClick={() => {
          setDoSignup(1 - doSignup);
        }} >
          SignUp
        </Button>
        <Button onClick={() =>
          setCurrWindow('logInWindow')} size='lg'>
          <Text mr='0.4rem'>Login</Text>
          <ArrowForwardIcon />
        </Button>
      </ModalFooter>
    </ModalContent>

  );
}

export default SignupForm;