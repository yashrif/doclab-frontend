import React from "react";
import { Select, Text } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

const EditableDropdown = ({ value, setOnInputChange }) => {
  return (
    <>
      <Text
        fontSize={"14"}
        color={"font.general"}
        fontWeight={"medium"}
        py={"4"}
      >
        {value.title}
      </Text>

      <Select
        icon={"none"}
        w={"25rem"}
        border={"none"}
        outline={"none"}
        boxShadow={"none"}
        placeholder={value.value}
        // py={"4"}
        // px={"12"}
        fontSize={"14"}
        color={"font.general"}
        borderRadius={"lg"}
        transition="all .3s"
        style={{
          padding: ".4rem 1.6rem",
        }}
        _focus={{
          backgroundColor: "#f7faff",
          boxShadow: "0 0 0 .2rem rgba(28, 126, 214, .35)",
        }}
        name={value.name}
        onChange={setOnInputChange}
      >
        {value.values?.map((e, index) =>
          e != value.value ? (
            <option
              style={{ backgroundColor: "#f7faff" }}
              value={e}
              key={index}
            >
              {e}
            </option>
          ) : null
        )}
      </Select>
    </>
  );
};

export default EditableDropdown;
