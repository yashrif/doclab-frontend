import { Box, Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm.jsx";
import { useState } from "react";
import SignupForm from "./SignupForm.jsx";
import LoginSuccess from "./LogInSuccess.jsx";
import SignupSuccess from "./SignupSuccess.jsx";
import { useEffect } from "react";
import { validateEmail, initialSignup } from "../../assets/variable/values.js";
import apiLogin from "../../hooks/apiLogin.jsx";
import apiSignup from "../../hooks/apiSignup.jsx";

// fetch functions
// const [signupData, signupError, signupFetch] = apiSignup();

const AuthPopUp = ({ children, setIsLoggedIn, initialWindow }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [password, setPassword] = useState("");
  const [doLogin, setDoLogin] = useState(1);
  const [doSignup, setDoSignup] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [currWindow, setCurrWindow] = useState(
    initialWindow ? initialWindow : "logInWindow"
  );
  const [signupInfo, setSignupInfo] = useState(initialSignup);
  const [catagory, setCatagory] = useState("doctor");

  const onModalClose = () => {
    setCurrWindow(initialWindow ? initialWindow : "logInWindow");
    setPassword("");
    setEmail("");
    setSignupInfo(initialSignup);
    onClose();
  };

  // Login API connections

  const [loginData, loginError, loginFetch] = apiLogin();

  useEffect(() => {
    const credentials = { authEmail: email, authPassword: password };
    if (validateEmail(email ?? "") && password.length < 21) {
      setLoading(true);
      console.log(credentials);
      loginFetch(credentials);
    }
  }, [doLogin]);

  useEffect(() => {
    if (loginData != undefined) {
      setCurrWindow("signInSuccess");
      if (loginData.authDoctor != null)
        localStorage.setItem("doctorToken", loginData.authToken);
      else if (loginData.authPatient != null)
        localStorage.setItem("patientToken", loginData.authToken);

      console.log(loginData);

      setLoading(false);
    }
  }, [loginData]);

  useEffect(() => {
    if (loginError != undefined) {
      console.log(loginError);

      setLoading(false);
    }
  }, [loginError]);

  // Signup API connections
  const [signupData, signupError, signupFetch, signupValidate] = apiSignup();

  useEffect(() => {
    if (signupValidate(catagory, signupInfo)) {
      setLoading(true);
      signupFetch(signupInfo, catagory);
      console.log(signupInfo);
    }
  }, [doSignup]);

  useEffect(() => {
    if (signupData != undefined) {
      setCurrWindow("signUpSuccess");
      console.log(signupData);

      setLoading(false);
    }
  }, [signupData]);

  useEffect(() => {
    if (signupError != undefined) {
      console.log(signupError);
      setLoading(false);
    }
  }, [signupError]);

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
        size="xl"
        onClick={() => console.log("clicked")}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="auto"
          backdropBlur="2px"
        />
        {(() => {
          switch (currWindow) {
            case "logInWindow":
              return (
                <LoginForm
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
              );
            case "signUpWindow":
              return (
                <SignupForm
                  initialRef={initialRef}
                  setCurrWindow={setCurrWindow}
                  loading={loading}
                  setLoading={setLoading}
                  onModalClose={onModalClose}
                  signupInfo={signupInfo}
                  setSignupInfo={setSignupInfo}
                  setDoSignup={setDoSignup}
                  doSignup={doSignup}
                  setCatagory={setCatagory}
                />
              );
            case "signUpSuccess":
              return (
                <SignupSuccess
                  onModalClose={onModalClose}
                  setCurrWindow={setCurrWindow}
                />
              );
            case "signInSuccess":
              return (
                <LoginSuccess
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrWindow={setCurrWindow}
                  onModalClose={onModalClose}
                />
              );
          }
        })()}
      </Modal>
    </>
  );
};
export default AuthPopUp;
