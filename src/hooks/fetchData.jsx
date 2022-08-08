import { useState } from "react";
import axios from "axios";

const fetchData = () => {
  const [data, fetchData] = useState([]);
  const [error, setError] = useState(null);

  const fetch = async (category) => {
    const response = await axios
      .get(`https://doclab-backend.herokuapp.com/${category}`)
      .catch(setError);

    fetchData(response.data);
  };

  return [data, error, fetch];
};

export default fetchData;
