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
import { subDistrictList } from "../assets/variable/values";
import ButtonFull from "./button/ButtonFull.jsx";
import ButtonOutline from "./button/ButtonOutline.jsx";

const UserProfile = ({ selectedPerson }) => {
  const [editedSelectedPerson, setEditedSelectedPerson] = useState({});
  const [isEdited, setIsEdited] = useState(false);
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
    } else return false;
  };

  useEffect(() => {
    setEditedSelectedPerson(selectedPerson);
  }, [selectedPerson]);

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
                      editedSelectedPerson
                        ? `https://ucarecdn.com/${editedSelectedPerson.doctorImageUUID}/`
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
                  name={"doctorImageUUID"}
                  onChange={(e) => {
                    setEditedSelectedPerson((prevState) => ({
                      ...prevState,
                      ["doctorImageUUID"]: e.uuid,
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
                  <ButtonFull py="16" px="16" fontSize={"14"}>
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
              <EditableInputField
                value={{
                  name: "doctorName",
                  title: "Name",
                  value: editedSelectedPerson?.doctorName,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableDropdown
                value={{
                  name: "doctorGender",
                  title: "Gender",
                  value: editedSelectedPerson?.doctorGender,
                  values: ["Male", "Female"],
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableInputField
                value={{
                  name: "doctorDegrees",
                  title: "Degrees",
                  value: editedSelectedPerson?.doctorDegrees,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableInputField
                value={{
                  name: "doctorSpeciality",
                  title: "Speciality",
                  value: editedSelectedPerson?.doctorSpeciality,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableInputField
                value={{
                  name: "doctorClinicName",
                  title: "Clinic Nmae",
                  value: editedSelectedPerson?.doctorClinicName,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableDropdown
                value={{
                  name: "doctorSubDistrict",
                  title: "Sub-District",
                  value: editedSelectedPerson?.doctorSubDistrict,
                  values: subDistrictList,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableInputField
                value={{
                  name: "doctorLocation",
                  title: "Location",
                  value: editedSelectedPerson?.doctorLocation,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableInputField
                value={{
                  name: "doctorExperience",
                  title: "Joining Year",
                  value: editedSelectedPerson?.doctorExperience,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableInputField
                value={{
                  name: "doctorVisitingFee",
                  title: "Visiting Fee",
                  value: editedSelectedPerson?.doctorVisitingFee,
                }}
                setOnInputChange={setOnInputChange}
              />

              <GridItem colSpan={2}>
                <hr style={{ borderTop: "1px solid #f2efef" }} />
              </GridItem>

              <EditableTextArea
                value={{
                  name: "doctorInfo",
                  title: "Bio",
                  value: editedSelectedPerson?.doctorInfo,
                }}
                setOnInputChange={setOnInputChange}
              />
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
