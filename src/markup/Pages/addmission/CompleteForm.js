import React from "react";
import { useHistory } from "react-router-dom";

import image4 from "./../../../images/addmission/svgLogo.png";
import bg19 from "./../../../images/addmission/watermark.png";

function CompleteForm() {
  const history = useHistory();
  const studentDatas = JSON.parse(localStorage.getItem("studentData"));
  const {
    studentFirstName,
    studentSecondName,
    studentLastName,
    gender,
    nationality,
    language,
    applyingFor,
    previousSchool,
    previousClass,
    fatherFirstName,
    fatherLastName,
    fatherMidleName, 
    gradeMarksScore,
    occupation,fatherTelephoneNumber,
    hobbies, alergicTo,chronicDiseases,address, position
  } = studentDatas;

  if (!studentDatas) {
    history.push("/admission-file");
  }
  return (
    <div
      className="p-t30"
      style={{
        backgroundImage: "url(" + bg19 + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: "center",
      }}
    >
      <div
        className="col-lg-10 col-md-12 m-b30 about-img "
        style={{ textAlign: "center", border: "1px solid black",padding: "10px"}}
      >
        <img
          src={image4}
          data-tilt
          alt="Admision_Form"
          style={{ textAlign: "center" }}
        />
        <h5>Personal Information</h5>

        <>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">First Name: {studentFirstName} </th>
                <th scope="col">Midle Name: {studentSecondName} </th>
                <th scope="col">Sur Name: {studentLastName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gender: {gender}</td>
                <td>Nationality: {nationality}</td>
                <td>Language: {language}</td>
              </tr>
              <tr>
                <td>Class Applying for: {applyingFor}</td>
                <td>Previous Class: {previousClass}</td>
                <td>Grade/Marks Scored: {gradeMarksScore} </td>
              </tr>
              <tr>
                <td colspan="2">Previous School: {previousSchool}</td>
                <td>Hobbies: {hobbies} </td>
              </tr>
              <tr>
                <td colspan="2">Chronic Diseases If Any: {chronicDiseases}</td>
                <td>Alergic to: {alergicTo}</td>
              </tr>
            </tbody>
          </table>
          <h5>Parent's Detail</h5>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">First Name: {fatherFirstName} </th>
                <th scope="col">Midle Name: {fatherMidleName} </th>
                <th scope="col">Sur Name: {fatherLastName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Occupation: {occupation}</td>
                <td>Position: {position}</td>
                <td>Address: {address}</td>
              </tr>

              <tr>
                <td colspan="2">Telephone Number: {fatherTelephoneNumber}</td>
                <td>Signature: ....................... </td>
              </tr>
            </tbody>
          </table>
        </>

        <h5>
          Aplicant Signature: .............................. Principal’s
          Signature: .............................. Date: 15/2022
        </h5>
        <br />
        <div className="rules">
        <h3>NB: Attach  all the following documents</h3>
        <p>1: Registration the first document You saved as pdf</p>
        <p>2: The second document you downloaded</p>
        <p>3: If you are coming from another school provide the coppies of it also</p>
        <p>4: Online Registration is compulsory </p>
        <p>5: In Complete documents will be rejected</p>
        </div>
      </div>
    </div>
  );
}

export default CompleteForm;
