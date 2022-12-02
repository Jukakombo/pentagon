import React, { useEffect, useState } from "react";
import timetable from "./timetable.jpg";
import Header from "./../../Layout/Header1";
import Footer5 from "./../../Layout/footer5";
import PageTitle from "../../Layout/PageTitle";
import bnr from "./../../../images/banner/bnr2.jpg";
import { client } from "../../../sanityClient";

function ExamTimeTable() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="timetable"]{
      description, imageUrl{
        asset -> {
          _id,
          url
        }, alt
      },
       
    }`
      )
      .then((data) => {
        setTimetable(data);
      });
  }, []);
 
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="Exam Timetable " activeMenu="Exam Timetable " />
      </div>

          
          {timetable?.map((item)=>(

            <>
      <div className="container">
        <div className="section-head text-black text-center">
          <h4 className="text-gray-dark m-b10">About </h4>
          <h2 className="box-title m-tb0">
            Examination time table
            <span className="bg-primary"></span>
          </h2>

         
          <p>
            {item.description}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section-head text-center">
          {/* <div className=" row dzseth  m-b30"> */}
          <div className="col-lg-12 col-md-12 col-sm-10 m-b30 center ">
            <img src={item?.imageUrl?.asset?.url} data-tilt alt="time_table" />
            {/* </div> */}
          </div>
        </div>
      </div>
      </>
      ))}
      <Footer5 />
    </>
  );
}

export default ExamTimeTable;
