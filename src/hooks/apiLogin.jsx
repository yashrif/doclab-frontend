import { useState } from "react";
import axios from "axios";
import { SERVER } from "../assets/variable/values";

const apiLogin = () => {
  const [data, fetchData] = useState();
  const [error, setError] = useState();
  const url = `${SERVER}/auth/login`;

  const fetch = async (credentials) => {
    const response = await axios.post(url, credentials).catch(setError);
    fetchData(response.data);
  };

  return [data, error, fetch, setError];
};

export default apiLogin;
