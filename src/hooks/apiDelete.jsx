import { useState } from "react";
import axios from "axios";

const apiDelete = () => {
  const [data, fetchData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = async (url, headers) => {
    const response = await axios.delete(url, headers).catch(setError);

    fetchData(response.data);
  };

  return [data, error, fetch];
};

export default apiDelete;
