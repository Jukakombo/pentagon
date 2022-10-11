import React from "react";
import Header from "./../Layout/Header1";
import bnr from "./../../images/banner/bnr9.jpg";
import services1 from "./../../images/our-services/pic6.jpg";

import Footer5 from "./../Layout/footer5";
import PageTitle from "../Layout/PageTitle";
import AdmisionIntro from "./addmission/AdmisionIntro";
import Form from "./addmission/Form";
function AdmissionFiles() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <PageTitle
            motherMenu="School Add Mission"
            activeMenu="Admission Zone"
          />
        </div>
        <div className="container">
            <AdmisionIntro />
            {/* form */}
            <Form />
        </div>
      </div>
      <Footer5 />
    </>
  );
}

export default AdmissionFiles;
