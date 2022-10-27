import React, { useState } from "react";
import {
  Editable,
  EditablePreview,
  EditableTextarea,
  keyframes,
  Text,
} from "@chakra-ui/react";

const EditableTextArea = ({ value, setOnInputChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const fadeIn = keyframes`
  0% { opacity: 0; }
  `;

  const animationFadeIn = `${fadeIn} .3s ease-in-out`;

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
      <Editable
        onEdit={() => setIsEditing(true)}
        onSubmit={() => setIsEditing(false)}
        value={value ? value.value : ""}
        position={"relative"}
        w={"50rem"}
        _before={{
          content: `"${200 - value?.value?.length}"`,
          display: `${isEditing ? "block" : "none"}`,
          position: "absolute",
          bottom: "1rem",
          right: ".6rem",
          color: "font.light",
          fontWeight: "medium",
          fontSize: "10",
          bg: "primary.300",
          px: "8",
          py: "4",
          borderRadius: "3xl",
          animation: animationFadeIn,
        }}
      >
        <EditablePreview
          height={"10rem"}
          w="full"
          py={"4"}
          px={"16"}
          fontSize={"14"}
          color={"font.general"}
          _hover={{
            boxShadow: `${
              value && value.value?.length < 200
                ? "0 0 0 .2rem rgba(28, 126, 214, .35)"
                : "0 0 0 .2rem rgba(200, 0, 0, .35)"
            }`,
          }}
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
