import React from "react";
import Calendar from "react-calendar";
import { Box, Icon } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
// import dayjs from "dayjs";

const App = ({ selectedDate, setSelectedDate }) => {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const tileDisabled = ({ date }) => {
    return date < yesterday;
  };

  return (
    <Box boxShadow="0 0.4rem 0.8rem rgba(0, 0, 0, 0.08)" borderRadius="3xl">
      <Calendar
        tileDisabled={tileDisabled}
        onChange={setSelectedDate}
        value={selectedDate}
        // formatDay={(locale, selectedDate) => dayjs(selectedDate).format("DD")}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Box>
  );
};

export default App;
