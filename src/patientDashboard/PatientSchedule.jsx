import React from "react";
import { Grid } from "@chakra-ui/react";
import WidgetNextAppointment from "./widgets/WidgetSchedule.jsx";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiStethoscopeLine } from "react-icons/ri";
import { FaCapsules } from "react-icons/fa";

const WidgetNextAppointmentWidgets = () => {
  const iconStyle = {
    fontSize: "2rem",
    color: "#555",
  };

  const widgetContent = [
    {
      bg: "#f4f2ff",
      heading: "Next Appointment",
      icon: <HiOutlineCalendar {...iconStyle} />,
      content: new Date().toLocaleDateString(),
    },
    {
      bg: "#fff2ec",
      heading: "Next Checkup",
      icon: <RiStethoscopeLine {...iconStyle} />,
      content: new Date().toLocaleDateString(),
    },
    {
      bg: "#d3f9d8",
      heading: "Medicine",
      icon: <FaCapsules {...iconStyle} />,
      content: "Napa Extra 11.00 PM",
    },
  ];

  const renderedWidgetList = widgetContent.map((value, key) => {
    return (
      <WidgetNextAppointment
        key={key}
        icon={value.icon}
        bg={value.bg}
        heading={value.heading}
        content={value.content}
      />
    );
  });

  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap="16">
      {renderedWidgetList}
    </Grid>
  );
};

export default WidgetNextAppointmentWidgets;
