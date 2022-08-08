import { useState, useEffect } from "react";
import LoginForm from "./LoginForm.jsx";

const Login = () => {
  // This token will be used later for CRUD operations to bkend
  const [loginToken, setLoginToken] = useState("");
  //Current login status
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    console.log(loginToken);
  }, [loggedIn]);

  const loginUrl = "http://doclab-backend.herokuapp.com/doctor/login";
  return (
    <>
      {loggedIn ? (
        <p >Logged in Doctor</p>
      ) : (
        <LoginForm
          loginUrl={loginUrl}
          setLoginToken={setLoginToken}
          setloggedIn={setloggedIn}
        />
      )}
    </>
  );
};

export default Login;
