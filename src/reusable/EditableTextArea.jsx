import {
  Editable,
  EditablePreview,
  EditableTextarea,
  Text,
} from "@chakra-ui/react";
import React from "react";

const EditableTextArea = ({ value, setOnInputChange }) => {
  return (
    <>
      <Text
        pt={"12"}
        alignSelf={"flex-start"}
        fontSize={"14"}
        color={"font.general"}
        fontWeight={"medium"}
      >
        {value.title}
      </Text>
      <Editable value={value ? value.value : ""}>
        <EditablePreview
          height={"10rem"}
          w="full"
          py={"4"}
          px={"16"}
          fontSize={"14"}
          color={"font.general"}
        />
        <EditableTextarea
          height={"10rem"}
          w="full"
          resize={"none"}
          name={value.name}
          onChange={setOnInputChange}
          py={"4"}
          px={"16"}
          fontSize={"14"}
          color={"font.general"}
          borderRadius={"lg"}
          _focus={{
            boxShadow: `${
              value && value.value?.length < 200
                ? "0 0 0 .2rem rgba(28, 126, 214, .35)"
                : "0 0 0 .2rem rgba(200, 0, 0, .35)"
            }`,
          }}
        />
      </Editable>
    </>
  );
};

export default EditableTextArea;
