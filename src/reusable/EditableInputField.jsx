import React, { useEffect, useState, useRef } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Text,
} from "@chakra-ui/react";

const EditableInputField = ({ value, setOnInputChange }) => {
  const [isFirstClick, setIsFirstClick] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current?.contains(event.target)) return;

      setIsFirstClick(true);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

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
            ref={ref}
            onClick={() => {
              setIsFirstClick(false);
            }}
            value={
              value &&
              (value.value?.length > 0 || typeof value.value == "number")
                ? value.value
                : isFirstClick
                ? "Empty..."
                : ""
            }
            w={"25rem"}
            transition={"all .3s"}
          >
            <EditablePreview
              w={"full"}
              py={"4"}
              px={"16"}
              fontSize={"14"}
              color={
                value.value?.length > 0 || typeof value.value == "number"
                  ? "font.general"
                  : "#bbb"
              }
              _hover={{
                boxShadow: "0 0 0 .2rem rgba(28, 126, 214, .35)",
              }}
            />
            <EditableInput
              w={"full"}
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
