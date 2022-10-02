import React from "react";
import ScienceAndTechNews from "../../Element/ScienceAdTechNew";
import Footer5 from "../../Layout/footer5";
import Header4 from "../../Layout/header4";
import PageTitle from "../../Layout/PageTitle";
import bnr1 from "../../../images/banner/bnr4.jpg";
 

function ScienceAndTechnology() {
   
  

  return (
    <>
      <Header4 />
      <div
        className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr1 + ")" }}
      >
        <PageTitle motherMenu="Science & tech" activeMenu="Tech" />
      </div>
      <div className="section-full bg-white content-inner">
        <div className="container">
          <div className="max-w600 m-auto text-center m-b30">
            <h6 className="m-t0">
              Stay Updated with Science and Technology news
            </h6>
            <h2 className="m-t0">
              Latest tech and science news around the world
            </h2>
          </div>

       <ScienceAndTechNews   />
        </div>
      </div>

      <Footer5 />
    </>
  );
}

export default ScienceAndTechnology;
