import React, { useEffect, useState } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Text,
} from "@chakra-ui/react";

const EditableInputField = ({ value, setOnInputChange }) => {
  const [isFirstClick, setIsFirstClick] = useState(true);

  useEffect(() => {
    setIsFirstClick(true);
  }, [value]);

  return (
    <>
      {value ? (
        <>
          <Text
            py={"4"}
            fontSize={"14"}
            color={"font.general"}
            fontWeight={"medium"}
            boxShadow="0 0 0 .2rem trasnparent"
          >
            {value.title}
          </Text>
          <Editable
            value={
              value &&
              (value.value?.length > 0 || typeof value.value == "number")
                ? value.value
                : isFirstClick
                ? "Empty..."
                : ""
            }
            onMouseLeave={() => {
              if (!(value.value?.length > 0 || typeof value.value == "number"))
                setIsFirstClick(true);
            }}
            onClick={() => {
              setIsFirstClick(false);
            }}
          >
            <EditablePreview
              py={"4"}
              px={"16"}
              fontSize={"14"}
              color={
                value.value?.length > 0 || typeof value.value == "number"
                  ? "font.general"
                  : "#bbb"
              }
            />
            <EditableInput
              w={"auto"}
              name={value.name}
              onChange={setOnInputChange}
              _focus={{
                boxShadow: "0 0 0 .2rem rgba(28, 126, 214, .35)",
              }}
              py={"4"}
              px={"16"}
              fontSize={"14"}
              color={"font.general"}
              borderRadius={"lg"}
            />
          </Editable>
        </>
      ) : null}
    </>
  );
};

export default EditableInputField;
