import React from "react";
import timetable from "./timetable.jpg";
import Header from "./../../Layout/Header1";
import Footer5 from "./../../Layout/footer5";
import PageTitle from "../../Layout/PageTitle";
import bnr from "./../../../images/banner/bnr2.jpg";

function ExamTimeTable() {
  return (
    <>
      <Header />
      <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <PageTitle motherMenu="Exam Timetable " activeMenu="Exam Timetable " />
          </div>
      <div className="container">
        <div className="section-head text-center">
          {/* <div className=" row dzseth  m-b30"> */}
          <div className="col-lg-12 col-md-12 col-sm-10 m-b30 center ">
            <img src={timetable} data-tilt alt="organigram" />
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer5 />
    </>
  );
}

export default ExamTimeTable;
