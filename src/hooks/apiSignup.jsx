import { useState } from "react";
import axios from "axios";
import { SERVER } from "../assets/variable/values";

const apiLogin = () => {
  const [data, fetchData] = useState();
  const [error, setError] = useState();

  const signupValidate = (catagory, data) => {

    if (catagory == "doctor") {
      if (data["doctorName"] == "" ||
        data["doctorGender"] == "" ||
        data["doctorSubDistrict"] == "" ||
        data["doctorSpeciality"] == "" ||
        data["doctorClinicName"] == "" ||
        data["doctorLocation"] == "" ||
        data["doctorImageUUID"] == ""
        
        )
        return false;
      else return true;

    }
    else if (catagory == "patient") {
      if (data["patientName"] == "" ||
        data["patientGender"] == "" ||
        data["patientPhone"] == "" ||
        data["patientSubDistrict"] == "" ||
        data["patientImageUUID"] == "")
        return false;
      else return true;
    }
    else return false;
  }

  const fetch = async (data, catagory) => {
    const url = `${SERVER}/${catagory}/add`;
    var credentials = null;
    if (catagory == "doctor")
      credentials = {
        doctorName: data["doctorName"],
        doctorGender: data["doctorGender"],
        doctorSubDistrict: data["doctorSubDistrict"],
        doctorSpeciality: data["doctorSpeciality"],
        doctorClinicName: data["doctorClinicName"],
        doctorLocation: data["doctorLocation"],
        doctorImageUUID : data["doctorImageUUID"]

      }
    else if (catagory == "patient")
      credentials = {
        patientName: data["patientName"],
        patientGender: data["patientGender"],
        patientPhone: data["patientPhone"],
        patientSubDistrict: data["patientSubDistrict"],
        patientImageUUID : data["patientImageUUID"]
      }

    axios.post(`${SERVER}/auth/signup`, {
      authEmail: data["authEmail"],
      authPassword: data["authPassword"]
    })
      .then((response) => {
        return axios.post(`${SERVER}/auth/getToken`, response.data);
      })
      .then((response) => {
        return axios.post(url, credentials, { headers: { TOKEN: response.data } });
      })

      .then((response) => {
        fetchData(response.data)
      }).catch(setError);
  }

  return [data, error, fetch, signupValidate];
};

export default apiLogin;
