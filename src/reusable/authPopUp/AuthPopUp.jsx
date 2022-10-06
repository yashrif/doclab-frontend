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

  return (
    <>
      <style>
        {`
          .uploadcare--widget__button {
            padding: .4rem .8rem !important;
            background-color: #e2e8f0;
            border: 0px solid #e2e8f0;
            border-radius: 4px;
            color: #555;
            font-size: 1.2rem !important;
            font-weight: 500 !important;
          }

          .uploadcare--widget__button:hover,
          .uploadcare--widget__button:active {
            background-color: #1b77cb;
            color: #fff;
          }
        `}
      </style>
      <Box onClick={onOpen} ref={finalRef}>
        {children}
      </Box>

      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
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
                />
              );
            case "signUpSuccess":
              return (
                <SignUpSuccess
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
