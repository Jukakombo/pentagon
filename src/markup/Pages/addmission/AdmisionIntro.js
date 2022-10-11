import React from "react";
import "./index.css";
// images
import image1 from "./../../../images/addmission/bg1.jpg";
import image2 from "./../../../images/addmission/bg2.jpg";
import image3 from "./../../../images/addmission/bg3.jpg";
import image4 from "./../../../images/addmission/bg4.jpg";
 

function AdmisionIntro() {
  return (
    <>
    <div className="firstPage">

   
      <div className="header__section">
        <h4 className="text-center">
          Pentagon International Modern Mixed Secondary School - Juba
        </h4>
        <h4 className="text-center">
          MOTTO: <span className="best_among_all">Best among all</span>
        </h4>
      </div>
      {/* images */}
      <div
        className="row 
      "
        style={{ paddingTop: "20px" }}
      >
        <div className="col-lg-6 col-md-12 m-b30 about-img ">
          <img src={image1} data-tilt alt="" />
        </div>{" "}
        <div className="col-lg-6 col-md-12 m-b30 about-img ">
          <img src={image2} data-tilt alt="" />
        </div>{" "}
        <div className="col-lg-6 col-md-12 m-b30 about-img ">
          <img src={image3} data-tilt alt="" />
        </div>
        <div className="col-lg-6 col-md-12 m-b30 about-img ">
          <img src={image4} data-tilt alt="" />
        </div>
      </div>
      {/* contacts */}
      <div className="header__contact">
        <h1>Tel: +211(0)920032333 || +211(0)928104000 ||  +211(0)928617175 </h1>
      </div>
      </div>
      
    </>
  );
}

export default AdmisionIntro;
