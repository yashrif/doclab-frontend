import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import WidgetSchedule from "./widgets/WidgetSchedule.jsx";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiStethoscopeLine } from "react-icons/ri";
import { FaCapsules } from "react-icons/fa";
import { TIME_FORMAT } from "../assets/variable/values.js";

const WidgetScheduleWidgets = ({ appointments }) => {
  useEffect(() => {
    if (appointments)
      appointments.sort((first, second) => {
        new Date(first.appointmentSlotDate) >
        new Date(second.appointmentSlotDate)
          ? -1
          : new Date(first.appointmentSlotDate) <
            new Date(second.appointmentSlotDate)
          ? 1
          : 0;
      });
  }, [appointments]);

  const iconStyle = {
    fontSize: "2rem",
    color: "#555",
  };

  const widgetContent = [
    {
      bg: "#f4f2ff",
      heading: "Next Appointment",
      icon: <HiOutlineCalendar {...iconStyle} />,
      content:
        appointments.length > 0
          ? `${new Date(
              appointments[0].appointmentSlotDate
            ).toLocaleDateString()}, ${new Date(
              appointments[0].appointmentSlotDate
            ).toLocaleTimeString([], TIME_FORMAT)}`
          : "No appointments",
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
      <WidgetSchedule
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

export default WidgetScheduleWidgets;
