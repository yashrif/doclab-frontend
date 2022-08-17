import {
  Box, Modal, ModalBody,
  ModalOverlay, ModalContent, FormControl, Input,
  ModalFooter, Button,
  useDisclosure, ModalHeader, ModalCloseButton
  , Text, Select, InputGroup, InputLeftElement
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon, UnlockIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { subDistrictList } from "../../variable/Values.jsx";

const loginUrl = "http://doclab-backend.herokuapp.com/doctor/login";
const signupUrl = "http://doclab-backend.herokuapp.com/doctor/post";

const LoginPopUp = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [password, setPassword] = useState("");
  const [doLogin, setDoLogin] = useState(1);
  const [doSignup, setDoSignup] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [currWindow, setCurrWindow] = useState('signInWindow')
  const [signupInfo, setSignupInfo] = useState({
    "doctorName": "",
    "doctorGender": "",
    "doctorSubDistrict": "",
    "doctorSpeciality": "",
    "doctorClinicName": "",
    "doctorEmail": "",
    "doctorPassword": "",
    "doctorLocation": ""
  })
  const handleSignupChange = e => {
    const { name, value } = e.target;
    setSignupInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleOnCLose = () => {
    setCurrWindow('signInWindow');
    onClose();
  }
  useEffect(() => {
    /*
    try
    email: "emon2"
    password: "123456"
    */
    const credentials = { email: email, password: password };
    const fetchLoginToken = async () => {
      await axios.post(loginUrl, credentials).then((res) => {
        const token = res;
        localStorage.setItem('token', token.data);
        setCurrWindow('logIn  Success')
        console.log(token.data);
      }).catch(() => { });
      setLoading(false);
    };

    if (email != '') {
      setLoading(true);
      fetchLoginToken();
    }

  }, [doLogin]);

  useEffect(() => {

    const fetchLoginToken = async () => {
      await axios.post(signupUrl, signupInfo).then(() => {

        setCurrWindow('signUpSuccess')
      }).catch(() => { });
      setLoading(false);
    };

    if (signupInfo.doctorEmail != '') {
      setLoading(true);
      fetchLoginToken();
    }

  }, [doSignup]);
  const signInWindow = <Box>
    <ModalContent mt='8rem' p='2rem' borderRadius='11px'>
      <ModalCloseButton />
      <ModalHeader alignSelf='center' fontSize='2.4rem ' color='blue.700'>Welcome Back</ModalHeader>
      <ModalHeader fontSize='1.4rem' color='gray.400'>Enter your credentials  to access your account</ModalHeader>

      <ModalBody mt='2.4rem ' pb='1.4rem' display='flex' flexDirection='column'
      >


        <FormControl mt='1rem' display='flex' alignItems='center'>
          <InputGroup >
            <InputLeftElement
              pointerEvents="none"

              size="xs"
            ><EmailIcon w='2.4rem' h='2rem' color='blue' mr='1rem' />
            </InputLeftElement>
            <Input h='3rem' ref={initialRef} variant='flushed' placeholder='User Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>
        </FormControl>


        <FormControl mt='2.4rem' display='flex' alignItems='center'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"

              size="xs"
            > <UnlockIcon w='2.4rem' h='2rem' mr='1rem' color='blue' />
            </InputLeftElement>
            <Input h='3.6rem' variant='flushed' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} value={password} />
          </InputGroup>
        </FormControl>

      </ModalBody>

      <ModalFooter display='flex' mt='1.8rem' justifyContent='space-evenly'>
        <Button isLoading={loading} colorScheme='blue' size='lg' onClick={() => {
          setDoLogin(1 - doLogin);
        }}>
          Login
        </Button>
        <Button onClick={() => setCurrWindow('signUpWindow')} size='lg'>
          <Text mr='0.4rem'>Sign Up</Text>
          <ArrowForwardIcon /></Button>
      </ModalFooter>
    </ModalContent>
  </Box>;



  const signUpWindow = <Box>
    <ModalContent mt='8rem' p='2rem' borderRadius='11px'>
      <Box display='flex' flexDir='column' alignItems='center'>
        <ModalHeader alignSelf='center' fontSize='2.4rem ' color='blue.700'>Sign Up</ModalHeader>
        <ModalHeader fontSize='1.4rem' color='gray.400'>Enter your details</ModalHeader>
      </Box>
      <ModalBody mt='2.4rem ' pb='1.4rem' display='flex' flexDirection='column'
      >

        <FormControl display='flex' alignItems='center'>
          <Input h='3.4rem' variant='flushed' placeholder='Full Name'
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

        <FormControl display='flex' mt='1rem' alignItems='center'>
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
        <Select name="doctorSubDistrict" mt='2.4rem' h='2.8rem'
          onChange={handleSignupChange} placeholder='Select Sub-Distric'>
          {
            subDistrictList.map((ele) => <option value={ele} key={ele}>{ele}</option>)}

        </Select>

        <FormControl mt='2.4rem' display='flex' alignItems='center'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"

              size="xs"
            > <EmailIcon w='2rem' mr='1rem' h='2rem' color='blue' />
            </InputLeftElement>
            <Input h='3rem' variant='flushed' placeholder='Email'
              name="doctorEmail"
              onChange={handleSignupChange} value={signupInfo.doctorEmail} />
          </InputGroup>
        </FormControl>

        <FormControl mt='2.4rem' display='flex' alignItems='center'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"

              size="xs"
            > <UnlockIcon w='2.4rem' h='2rem' mr='1rem' color='blue' />
            </InputLeftElement>
            <Input h='3.4rem' variant='flushed' placeholder='Password'
              name="doctorPassword"
              onChange={handleSignupChange} value={signupInfo.doctorPassword} />
          </InputGroup>
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
        <Button onClick={handleOnCLose} size='lg'>
          <Text mr='0.4rem'>Cancel</Text>
        </Button>
      </ModalFooter>
    </ModalContent>
  </Box>
  const signUpSuccess = <Box>
    <ModalContent mt='8rem' p='2rem' borderRadius='11px'>
      <ModalCloseButton />
      <ModalHeader alignSelf='center' fontSize='2.4rem ' color='blue.700'>Sign Up Succesful!</ModalHeader>
      <ModalHeader fontSize='1.4rem' color='gray.400'>Go to Login page to Login</ModalHeader>

      <ModalFooter display='flex' mt='1.8rem' justifyContent='space-evenly'>

        <Button onClick={() => setCurrWindow('signInWindow')} size='lg'>
          <ArrowBackIcon />
          <Text ml='0.4rem'>Login</Text>
        </Button>
      </ModalFooter>
    </ModalContent>
  </Box>

  const signInSuccess = <Box></Box>
  return (
    <>
      <Box onClick={onOpen} ref={finalRef}>
        {children}
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        <Box>
          {/* {(loginOrSignup ?
          signInWindow : (signupSuccess ?
            signUpWindow :
            signUpSuccess))
             }*/

            (() => {
              switch (currWindow) {
                case 'signInWindow':
                  return signInWindow
                case 'signUpWindow':
                  return signUpWindow;
                case 'signUpSuccess':
                  return signUpSuccess;
                case 'signInSuccess':
                  return signInSuccess;
              }
            })()
          }</Box>
      </Modal>
    </>
  );


}
export default LoginPopUp;