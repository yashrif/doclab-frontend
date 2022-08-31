import { useState } from "react";
import axios from "axios";

const apiPost = () => {
  const [data, fetchData] = useState([]);
  const [error, setError] = useState(null);

  const fetch = async (url,data,config) => {
    const response = await axios
      .post(url,data,config)
      .catch(setError);

    fetchData(response.data);
  };

  return [data, error, fetch];
};

export default apiPost;
