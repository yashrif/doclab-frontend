import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  keyframes,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Widget } from "@uploadcare/react-widget";
import Avatar from "../assets/img/avatar.png";
import EditableInputField from "./EditableInputField.jsx";
import EditableTextArea from "./EditableTextArea.jsx";
import EditableDropdown from "./EditableDropdown.jsx";
import { SERVER, DoctorKeys, PatientKeys } from "../assets/variable/values";
import ButtonFull from "./button/ButtonFull.jsx";
import ButtonOutline from "./button/ButtonOutline.jsx";
import apiPost from "../hooks/apiPost.jsx";

const UserProfile = ({
  selectedPerson,
  reloadSelectedPerson,
  setReloadSelectedPerson,
}) => {
  const [editedSelectedPerson, setEditedSelectedPerson] = useState({});
  const [isEdited, setIsEdited] = useState(false);
  const [response, , postPerson] = apiPost();
  const [saving, setSaving] = useState(false);
  const [submitEditedPerson, setSubmitEditedPerson] = useState(null);
  const [inputFields, setInputFields] = useState([]);
  const [isDoctor, setIsDoctor] = useState(true);
  const [category, setCategory] = useState("");
  const widgetRef = useRef();

  const objectCompare = (object1, object2) => {
    if (object1 && object2) {
      if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
      }
      for (let key of Object.keys(object1)) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
      return true;
    } else return true;
  };

  useEffect(() => {
    setIsDoctor(localStorage.getItem("doctorToken") ? true : false);
  });

  useEffect(() => {
    if (isDoctor) {
      setInputFields(DoctorKeys(editedSelectedPerson));
      setCategory("doctor");
    } else {
      setInputFields(PatientKeys(editedSelectedPerson));
      setCategory("patient");
    }
  }, [isDoctor, editedSelectedPerson]);

  useEffect(() => {
    setSaving(false);
    setEditedSelectedPerson(selectedPerson);
  }, [selectedPerson]);

  useEffect(() => {
    if (submitEditedPerson != null) {
      setSaving(true);
      postPerson(`${SERVER}/${category}/update`, editedSelectedPerson);
    }
  }, [submitEditedPerson]);

  useEffect(() => {
    if (!objectCompare(response, editedSelectedPerson)) {
      setReloadSelectedPerson(!reloadSelectedPerson);
    }
  }, [response]);

  const setOnInputChange = (e) => {
    setEditedSelectedPerson((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.value?.length <= 200
          ? e.target.value
          : editedSelectedPerson[e.target.name],
    }));
  };

  useEffect(() => {
    setIsEdited(objectCompare(selectedPerson, editedSelectedPerson));
  }, [editedSelectedPerson]);

  const fadeIn = keyframes`
  0% { opacity: 0; }
  `;

  const animationFadeIn = `${fadeIn} .3s ease-in-out`;

  return (
    <>
      <style>
        {`
          .uploadcare--widget__button,
          .uploadcare--widget__text {
            display: none;
          }

          .uploadcare--dialog .uploadcare--progress__canvas{
            display: none;
          }

          .uploadcare--progress__canvas{
            height: 2.4rem;
            width: 2.4rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }

          .uploadcare--progress_type_canvas{
            color: #3491e4;
          }
    `}
      </style>
      <Box
        h="full"
        m=".8rem 1.6rem 12.6rem 0"
        marginBottom={"64rem"}
        borderRadius={"3xl"}
        bg="bgContainer3"
        overflowY="scroll"
        overflowX="hidden"
        px="96"
        py="36"
      >
        {editedSelectedPerson ? (
          <>
            <style>
              {`
                .user-image::before {
                  position: absolute;
                  content: "";
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  border-radius: 50%;
                  height: 12.8rem;
                  width: 12.8rem;
                  background-image: linear-gradient(145deg,
                    rgba(0, 0, 0, 0.1),
                    rgba(0, 0, 0, 0.15),
                    rgba(0, 0, 0, 0.2)
                    );

                  z-index: 5;
                  opacity: 0;
                  transition: all 0.3s linear;
                }

                .user-image:hover::before {
                  opacity: 1;
                }
                `}
            </style>
            <Box
              h={"80"}
              bg={
                "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)"
              }
              borderRadius={"base"}
              borderTopLeftRadius={"7.5rem"}
              borderBottomRightRadius={"7.5rem"}
            ></Box>

            <Grid
              px={"32"}
              templateColumns={"auto auto 1fr"}
              transform={"translate(0, -25%)"}
              alignItems={"center"}
              gap={"32"}
            >
              <Box position={"relative"} display={"inline-block"}>
                <Box
                  className="user-image"
                  borderRadius={"50%"}
                  role={"button"}
                  onClick={() => widgetRef.current.openDialog()}
                  position="relative"
                >
                  <Image
                    src={
                      editedSelectedPerson &&
                      editedSelectedPerson[`${category}ImageUUID`]
                        ? `https://ucarecdn.com/${
                            editedSelectedPerson[`${category}ImageUUID`]
                          }/`
                        : Avatar
                    }
                    boxSize={"12.8em"}
                    objectFit={"cover"}
                    borderRadius="50%"
                    transition={"all .3s"}
                  />
                </Box>
                <Widget
                  ref={widgetRef}
                  name={`${category}ImageUUID`}
                  onChange={(e) => {
                    setEditedSelectedPerson((prevState) => ({
                      ...prevState,
                      [`${category}ImageUUID`]: e.uuid,
                    }));
                  }}
                  publicKey="6c3c08a73b43963de87b"
                  clearable
                  imagesOnly
                  previewStep
                  imageShrink="420x420"
                  tabs="file gdrive url"
                  crop="8:10"
                />
              </Box>

              <Box>
                <Text fontSize={"24"} fontWeight={"medium"}>
                  Profile
                </Text>
                <Text fontSize={"14"}>Update your personal details.</Text>
              </Box>

              {!isEdited && (
                <Flex justifySelf={"end"} gap={"8"} animation={animationFadeIn}>
                  <ButtonOutline
                    py="16"
                    px="16"
                    fontSize={"14"}
                    borderColor={"#f5f5f5"}
                    onClick={() => {
                      setEditedSelectedPerson(selectedPerson);
                    }}
                  >
                    Cancel
                  </ButtonOutline>
                  <ButtonFull
                    py="16"
                    px="16"
                    fontSize={"14"}
                    isLoading={saving}
                    onClick={() => {
                      submitEditedPerson == null
                        ? setSubmitEditedPerson(true)
                        : setSubmitEditedPerson(!submitEditedPerson);
                    }}
                  >
                    Save
                  </ButtonFull>
                </Flex>
              )}
            </Grid>

            <Grid
              // pt={"36"}
              w={"80%"}
              templateColumns={"auto 1fr"}
              alignItems={"center"}
              columnGap="128"
              rowGap={"16"}
            >
              {inputFields?.length > 0 &&
                inputFields?.map((value, index, arr) => {
                  return (
                    <React.Fragment key={index}>
                      {value.type === "textArea" ? (
                        <EditableTextArea
                          value={value}
                          setOnInputChange={setOnInputChange}
                        />
                      ) : value.type === "dropDown" ? (
                        <EditableDropdown
                          value={value}
                          setOnInputChange={setOnInputChange}
                        />
                      ) : (
                        <EditableInputField
                          value={value}
                          setOnInputChange={setOnInputChange}
                        />
                      )}

                      {index < arr.length - 1 && (
                        <GridItem colSpan={2}>
                          <hr style={{ borderTop: "1px solid #f2efef" }} />
                        </GridItem>
                      )}
                    </React.Fragment>
                  );
                })}
            </Grid>
          </>
        ) : (
          <Center h={"full"}>
            <Spinner color="primary.base" h={"20"} w={"20"} thickness=".4rem" />
          </Center>
        )}
      </Box>
    </>
  );
};

export default UserProfile;
