import React, { useState } from "react";
import Calendar from "react-calendar";
import { Box } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import dayjs from "dayjs";

const App = () => {
  const [date, setDate] = useState(new Date());

  // if(date.getDay() > 0 && date.getDay() < 10)
  // setDate()

  return (
    <Box boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.08)" borderRadius="3xl">
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) => dayjs(date).format("DD")}
      />
    </Box>
  );
};

export default App;
