import { useState } from "react";
import axios from "axios";

const apiPost = () => {
  const [data, fetchData] = useState([]);
  const [error, setError] = useState(null);

  const fetch = async (url,data) => {
    const response = await axios
      .post(url,data)
      .catch(setError);

    fetchData(response.data);
  };

  return [data, error, fetch];
};

export default apiPost;
