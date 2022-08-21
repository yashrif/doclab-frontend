import {
  Box, Modal,
 ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm.jsx";
import { useState } from "react";
import SignupForm from "./SignupForm.jsx";
import LoginSuccess from "./LogInSuccess.jsx";
import SignupSuccess from "./SignupSuccess.jsx";
import { useEffect } from "react";
import axios from "axios";
import { validateEmail, initialSignup } from "../../assets/variable/values.js";
const loginUrl = "http://doclab24.herokuapp.com/doctor/login";
const signupUrl = "http://doclab24.herokuapp.com/doctor/post";

const AuthPopUp = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [password, setPassword] = useState("");
  const [doLogin, setDoLogin] = useState(1);
  const [doSignup, setDoSignup] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [currWindow, setCurrWindow] = useState('logInWindow')
  const [signupInfo, setSignupInfo] = useState(initialSignup)

  const onModalClose = ()=>{
    setCurrWindow('logInWindow');
    setPassword('');
    setEmail('');
    setSignupInfo(initialSignup);
    onClose();
  }
  useEffect(() => {
    const credentials = { email: email, password: password };
    const fetchLoginToken = async () => {
      await axios.post(loginUrl, credentials).then((res) => {
        const token = res;
        localStorage.setItem('doctorToken', token.data);
        setCurrWindow('signInSuccess')
        console.log(token.data);
      }).catch(() => { console.log('errors') });
      setLoading(false);
    };
    const validate = () => {
      return validateEmail(email) &&
        true;
    }
    if (validate()) {
      setLoading(true);
      fetchLoginToken();
    }



  }, [doLogin]);


  useEffect(() => {

    const fetchLoginToken = async () => {
      await axios.post(signupUrl, signupInfo).then((res) => {
        const token = res.data;
        localStorage.setItem('doctorToken',token);
        setCurrWindow('signUpSuccess');
        console.log(localStorage.getItem('doctorToken'));
      }).catch(() => { });
      setLoading(false);
    };

    const validate = () => {
      return validateEmail(signupInfo.doctorEmail) &&
        true;
    }
    if (validate()) {
      setLoading(true);
      fetchLoginToken();
    }

  }, [doSignup]);



  return (
    <>
      <Box onClick={onOpen} ref={finalRef}>
        {children}
      </Box>

      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        onClick={() => console.log("clicked")}
      >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        {
          (() => {
            switch (currWindow) {
              case 'logInWindow':
                return <LoginForm
                  initialRef={initialRef}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setCurrWindow={setCurrWindow}
                  setPassword={setPassword}
                  doLogin={doLogin}
                  loading={loading}
                  setDoLogin={setDoLogin}
                  setLoading={setLoading}
                  onModalClose={onModalClose}
                />
              case 'signUpWindow':
                return <SignupForm
                  initialRef={initialRef}
                  setCurrWindow={setCurrWindow}
                  loading={loading}
                  setLoading={setLoading}
                  onModalClose={onModalClose}
                  signupInfo={signupInfo}
                  setSignupInfo={setSignupInfo}
                  setDoSignup={setDoSignup}
                  doSignup={doSignup}
                />;
              case 'signUpSuccess':
                return <SignupSuccess
                  onModalClose={onModalClose}
                  setCurrWindow={setCurrWindow}
                />;
              case 'signInSuccess':
                return <LoginSuccess
                  setCurrWindow={setCurrWindow}
                 onModalClose={onModalClose}
                />;
            }
          })()
        }
      </Modal>
    </>
  );


}
export default AuthPopUp;