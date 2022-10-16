import React from "react";
import Header from "./../Layout/Header1";
import bnr from "./../../images/banner/bnr9.jpg";
// import services1 from "./../../images/our-services/pic6.jpg";

import Footer5 from "./../Layout/footer5";
import PageTitle from "../Layout/PageTitle";
import AdmisionIntro from "./addmission/AdmisionIntro";
import Form from "./addmission/Form";
import SchoolRequirement from "./addmission/SchoolRequirement";
import MandatoryRequiment from "./addmission/MandatoryRequiment";
import LastPage from "./addmission/LastPage";
import RulesAndRegulation from "./addmission/RulesAndRegulation";
import ContinuationNB from "./addmission/ContinuationNB";
import WhyPentagonIsUnique from "./addmission/WhyPentagonIsUnique";
import HousePentagon from "./addmission/HousePentagon";
import TalentSkill from "./addmission/TalentSkill";
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
            motherMenu="Admission Form"
            activeMenu="Admission Zone"
          />
        </div>
        <div className="container">
            <AdmisionIntro />
            {/* form */}
            <Form />
            {/* school Requirement */}
            <SchoolRequirement />
            {/* compulsary requirement */}
            <MandatoryRequiment />
            {/*  Rules and regulation*/} 
            <RulesAndRegulation />
            {/* contuation */}
            <ContinuationNB />
            <WhyPentagonIsUnique />
            {/* house pentagon */}
            <HousePentagon />
            {/* talent skill */}
            <TalentSkill />
            {/* last page */}
            <LastPage />
        </div>
      </div>
      <Footer5 />
    </>
  );
}

export default AdmissionFiles;
