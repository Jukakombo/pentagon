import React from "react";
import "./index.css";
// images
 
// import image2 from "./../../../images/addmission/bg2.jpg";
 
import image5 from "./../../../images/addmission/logoCircles.png";
import image6 from "./../../../images/addmission/bg5.jpg";
import image7 from "./../../../images/addmission/bg6.jpg";
import image8 from "./../../../images/addmission/bg7.jpg";
import image9 from "./../../../images/addmission/bg5.jpg";


function LastPage() {
  return (
    <>
      <div className="lastPage">
        
        <div
          className="row" 
       style={{ paddingTop: "20px" }}
        >
          <div className="col-lg-6 col-md-12 m-b30 about-img ">
            <img src={image6} data-tilt alt="" />
          </div>{" "}
          <div className="col-lg-6 col-md-12 m-b30 about-img ">
            <img src={image7} data-tilt alt="" />
          </div>{" "}
        </div>
        <div className="center__best_among__all">
        <img src={image5} data-tilt alt="" />

        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 m-b30 about-img ">
            <img src={image8} data-tilt alt="" />
          </div>
          <div className="col-lg-6 col-md-12 m-b30 about-img ">
            <img src={image9} data-tilt alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LastPage;
