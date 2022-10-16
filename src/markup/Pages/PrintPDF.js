import React, { useRef } from "react";

// import bnr from "./../../images/banner/bnr9.jpg";
// import services1 from "./../../images/our-services/pic6.jpg";

// import PageTitle from "../Layout/PageTitle";

// import AdmisionIntro from "./addmission/AdmisionIntro";
 
// import SchoolRequirement from "./addmission/SchoolRequirement";
// import MandatoryRequiment from "./addmission/MandatoryRequiment";
// import LastPage from "./addmission/LastPage";
// import RulesAndRegulation from "./addmission/RulesAndRegulation";
// import ContinuationNB from "./addmission/ContinuationNB";
// import WhyPentagonIsUnique from "./addmission/WhyPentagonIsUnique";
// import HousePentagon from "./addmission/HousePentagon";
// import TalentSkill from "./addmission/TalentSkill";
import CompleteForm from "./addmission/CompleteForm";
 
export default class PrintPDF extends React.Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="container">
            
            {/* form */}
            <CompleteForm />
           
          </div>
        </div>
      </>
    );
  }
}
