import { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = ({ loginUrl, setLoginToken, setloggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doLogin, setDoLogin] = useState(1);

  useEffect(() => {
    /*
    try
    email: "emon2"
    password: "123456"
    */
    const credentials = { email: email, password: password };
    const fetchLoginToken = async () => {
      await axios.post(loginUrl, credentials).then((res) => {
        setLoginToken(res.data);
        setloggedIn(true);
      });
    };
    fetchLoginToken();
  }, [doLogin]);
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignitems: "center",
        }}
      >
        <input
          style={{ height: "35px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          style={{ height: "35px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={() => {
            setDoLogin(1 - doLogin);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
