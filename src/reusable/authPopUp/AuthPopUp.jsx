import { Box, Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm.jsx";
import { useState } from "react";
import SignUpForm from "./SignUpForm.jsx";
import LoginSuccess from "./LogInSuccess.jsx";
import SignUpSuccess from "./SignUpSuccess.jsx";
import { useEffect } from "react";
import { validateEmail, initialSignUp } from "../../assets/variable/values.js";
import apiLogin from "../../hooks/apiLogin.jsx";
import apiSignUp from "../../hooks/apiSignUp.jsx";

// fetch functions
// const [signUpData, signUpError, signUpFetch] = apiSignUp();

const AuthPopUp = ({ children, setIsLoggedIn, initialWindow }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [password, setPassword] = useState("");
  const [doLogin, setDoLogin] = useState(null);
  const [doSignUp, setDoSignUp] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [currWindow, setCurrWindow] = useState(
    initialWindow ? initialWindow : "logInWindow"
  );
  const [signUpInfo, setSignUpInfo] = useState(initialSignUp);
  const [category, setCategory] = useState("doctor");

  const onModalClose = () => {
    setCurrWindow(initialWindow ? initialWindow : "logInWindow");
    setPassword("");
    setEmail("");
    setSignUpInfo(initialSignUp);
    onClose();
  };

  // Login API connections

  const [loginData, loginError, loginFetch, setLoginError] = apiLogin();

  useEffect(() => {
    const credentials = { authEmail: email, authPassword: password };
    if (validateEmail(email ?? "") && password.length < 21) {
      setLoading(true);
      // console.log(credentials);
      loginFetch(credentials);
    } else if (email != "" || password != "")
      setLoginError({
        response: {
          status: 404,
        },
      });
  }, [doLogin]);

  useEffect(() => {
    if (loginData != undefined) {
      setCurrWindow("signInSuccess");
      if (loginData.authDoctor != null)
        localStorage.setItem("doctorToken", loginData.authToken);
      else if (loginData.authPatient != null)
        localStorage.setItem("patientToken", loginData.authToken);

      // console.log(loginData);

      setLoading(false);
    }
  }, [loginData]);

  useEffect(() => {
    if (loginError != undefined) {
      setLoading(false);
    }
  }, [loginError]);

  // SignUp API connections
  const [signUpData, signUpError, signUpFetch, signUpValidate] = apiSignUp();

  useEffect(() => {
    if (signUpValidate(category, signUpInfo)) {
      setLoading(true);
      signUpFetch(signUpInfo, category);
      // console.log(signUpInfo);
    }
  }, [doSignUp]);

  useEffect(() => {
    if (signUpData != undefined) {
      setCurrWindow("signUpSuccess");
      // console.log(signUpData);

      setLoading(false);
    }
  }, [signUpData]);

  useEffect(() => {
    if (signUpError != undefined) {
      // console.log(signUpError);
      setLoading(false);
    }
  }, [signUpError]);

  const clearAll = () => {
    setDoSignUp(null);
    setDoLogin(null);
    setSignUpInfo(initialSignUp);
    setCurrWindow("logInWindow");
    setPassword("");
    setDoLogin(null);
    setDoSignUp(null);
    setEmail("");
    setLoading(false);
  };
  return (
    <>
      <style>
        {`
          .uploadcare--widget__button {
            display: none;
          }
        `}
      </style>
      <Box onClick={onOpen} ref={finalRef}>
        {children}
      </Box>

      <Modal
        closeonoverlayclick="true"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        onOverlayClick={clearAll}
        // onClick={() => console.log("clicked")}
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
                  loginError={loginError}
                  clearAll={clearAll}
                />
              );
            case "signUpWindow":
              return (
                <SignUpForm
                  initialRef={initialRef}
                  setCurrWindow={setCurrWindow}
                  loading={loading}
                  setLoading={setLoading}
                  onModalClose={onModalClose}
                  signUpInfo={signUpInfo}
                  setSignUpInfo={setSignUpInfo}
                  setDoSignUp={setDoSignUp}
                  doSignUp={doSignUp}
                  setCategory={setCategory}
                  clearAll={clearAll}
                />
              );
            case "signUpSuccess":
              return (
                <SignUpSuccess
                  onModalClose={onModalClose}
                  setCurrWindow={setCurrWindow}
                  clearAll={clearAll}
                />
              );
            case "signInSuccess":
              return (
                <LoginSuccess
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrWindow={setCurrWindow}
                  onModalClose={onModalClose}
                  clearAll={clearAll}
                />
              );
          }
        })()}
      </Modal>
    </>
  );
};
export default AuthPopUp;
