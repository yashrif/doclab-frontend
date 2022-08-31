import { useState } from "react";
import axios from "axios";

const apiGet = () => {
  const [data, fetchData] = useState([]);
  const [error, setError] = useState(null);

  const fetch = async (url,headers) => {
    const response = await axios
      .get(url,headers)
      .catch(setError);

    fetchData(response.data);
  };

  return [data, error, fetch];
};

export default apiGet;
