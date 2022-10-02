import { useState } from "react";
import axios from "axios";

const apiPut = () => {
  const [data, fetchData] = useState(1);
  const [error, setError] = useState(null);

  const fetch = async (url,headers) => {
    const response = await axios
      .put(url,headers)
      .catch(setError);

    fetchData(response.data);
  };

  return [data, error, fetch];
};

export default apiPut;
