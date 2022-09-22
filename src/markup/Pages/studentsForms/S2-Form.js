import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { client } from "../../../sanityClient";
import { useState } from "react";

export default function S2Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    gender: "",
    classYear: "",
    dateOfBirth: "",
    address: "",
    contact: "",
    profilePicture: "",
    fatherName: "",
    motherName: "",

     
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    fullName,
    idNumber,
    gender,
    dateOfBirth,
    address,
    contact,
    classYear,
    motherName,
    fatherName,profilePicture
  } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "senior2Form",
      fullName: formData.fullName,
      idNumber: formData.idNumber,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      address: formData.address,
      contact: formData.contact,
      motherName: formData.motherName,
      fatherName: formData.fatherName,
      profilePicture:formData.profilePicture,
      classYear: formData.classYear,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    setFormData({
      fullName: "",
      idNumber: "",
      gender: "",
      email: "",
      dateOfBirth: "",
      address: "",
      contact: "",
      motherName: "",
      fatherName: "",
      profilePicture:"",
      classYear: "",
     
    });
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
  };
  return (
    <Box 
      sx={{
        "& .MuiTextField-root": { m: 1, width: "54.5ch" },
      }}
      noValidate
      autoComplete="off"
    >
        <form>
      <div>
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <Typography
            style={{ textDecoration: "underline", fontSize: "1.5rem" }}
          >
            {" "}
            Senior-2 Registration Form
          </Typography>
          <p>Falsifying information on this form will result in prosecution.</p>
        </div>
        
        <TextField
          label="Full Name"
          id="outlined-size-small"
          size="small"
          name="fullName"
          value={fullName}
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="I.D Number: e.g PIC/2022/S00001"
          id="outlined-size-small"
          size="small"
          name="idNumber"
          value={idNumber}
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="Gender"
          id="outlined-size-small"
          size="small"
          value={gender}
          name="gender"
          onChange={handleChangeInput}
          required
        />

        <TextField
          label="Class"
          id="outlined-size-small"
          size="small"
          value={classYear}
          name="classYear"
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="D.O.B"
          id="outlined-size-small"
          size="small"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="Address"
          id="outlined-size-small"
          size="small"
          name="address"
          value={address}
          onChange={handleChangeInput}
          required
        />
        <TextField
          label="Contact/Email"
          id="outlined-size-small"
          size="small"
          value={contact}
          onChange={handleChangeInput}
          required
          name="contact"
        />
        <TextField
          label="Father's Name"
          id="outlined-size-small"
          size="small"
          required
          name="fatherName"
          value={fatherName}
          onChange={handleChangeInput}
        />
        <TextField
          label="Mother's Name"
          id="outlined-size-small"
          size="small"
          value={motherName}
          name="motherName"
          onChange={handleChangeInput}
          required
        />
         <TextField
          
          id="outlined-size-small"
          type="file"
          size="small"
          value={profilePicture}
          name="profilePicture"
          onChange={handleChangeInput}
          required
        />
      </div>
      {isFormSubmitted && (
        <div className="col-lg-12 site-button">
          Congratulations on successfully enrolling in Pentagon International
          College. Please be patient as we will respond in a timely manner.{" "}
        </div>
      )}
      <Button onClick={handleSubmit} variant="contained" fullWidth>
        {!loading ? "Submit" : "Saving..."}
      </Button>
      </form>
    </Box>
  );
}
