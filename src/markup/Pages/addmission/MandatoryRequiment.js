import React from "react";
import bg19 from "./../../../images/addmission/watermark.png";
import Tick from "./Tick";

function MandatoryRequiment() {
  return (
    <>
      <div
        className="section-full p-tb10 our-support content-inner-2 mandetory"
        style={{
          backgroundImage: "url(" + bg19 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60%",
          backgroundPosition: "center",
        }}
      >
        <h5>
          NB: fee paid is not returnable in case of any problem or change of
          mind!
        </h5>
        <div className="school__reaquirement">
          <div className="letterAlpha col-lg-2 col-md-1 col-sm-0.5">
            <h1>A</h1>
          </div>
          <div className="letterRules col-lg-7 col-md-6 col-sm-10 ">
            <h3>Other school requirements which mandatory</h3>
            <Tick p="One [01] ream paper is compulsary for all classes" />
            <Tick p="Two [02] Toilet Papers once a year senior two and three(S.3) only" />
            <Tick p="One [01] Brush,senior four(S.4) only" />
            <Tick p="One [01] Hard brooms,senior one(S.1) only" />
            <Tick p="Mukwano chairs, green senior one, blue senior two, yellow/light blue for senior three and four (for new students only)" />
          </div>
        </div>
        <div className="school__reaquirement">
          <div className="letterAlpha col-lg-2 col-md-1 col-sm-0.5">
            <h1>B</h1>
          </div>
          <div className="letterRules col-lg-7 col-md-6 col-sm-10 ">
            <h3>senior one to senior three</h3>
            <Tick p="Blue trauser and skirts for both boys and girls respectively.The skirt must reach the knee for all girls and of normal size acceptable to the moral conducts of the public skin tied is prohibited." />
            <Tick p="Short-sleeve shirts for both boys and girls." />
            <Tick p="White long socks for girls,  worn below the knees." />
            <Tick p="Short white shocks for boys, compulsory. No other type of shocks is acceptable." />
            <Tick p=" Black leather belts for both boys and girls." />
            <Tick p=" Flat black shoes/leather shoes for both boys and girls." />
            <Tick p="Blue neck-ties for both boys and girls." />
          </div>
        </div>
      </div>
      <div
        className="school__reaquirement"
        style={{
          backgroundImage: "url(" + bg19 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60%",
          backgroundPosition: "center",
        }}
      >
        <div className="letterAlpha col-lg-2 col-md-1 col-sm-0.5">
          <h1>...</h1>
        </div>
        <div className="letterRules col-lg-7 col-md-6 col-sm-10 ">
          <h3>Form Four</h3>
          <Tick p="Long sleeve white shirts  for both boys and girls." />
          <Tick p="Red skirt for girls" />
          <Tick p="Red trauser for boys" />
          <Tick p="White long socks for girls and short ones for boys" />
          <Tick p=" Black leather belts for both boys and girls." />
          <Tick p=" Flat black shoes shoes for both boys and girls." />
          <Tick p="Blue neck-ties for both boys and girls." />
          <h3>T-shirt Senior one to senior four</h3>

          <Tick p="S.1: Green colour" />
          <Tick p="S.2: Blue colour" />
          <Tick p="S.3: Yellow colour" />
          <Tick p="S.4: White colour" />
          <h6>Suits for Students</h6>
          <p>Optional: prices are determined by the markets prices</p>
        </div>
      </div>
      <div
        className="school__reaquirement"
        style={{
          backgroundImage: "url(" + bg19 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50%",
          backgroundPosition: "center",
        }}
      >
        <div className="letterAlpha col-lg-2 col-md-1 col-sm-0.5">
          <h1>C</h1>
        </div>
        <div className="letterRules col-lg-7 col-md-6 col-sm-10 ">
          <h3>student's personal requirements</h3>
          <Tick p="12 Exercices book" />
          <Tick p="Mathematical Sets" />
          <Tick p="Scientific Calculator" />
          <Tick p="12 Pencils" />
          <Tick p="03 Big rubbers" />
          <Tick p=" 03 Pencil sharpeners" />
          <Tick p="12 Pens" />
          <Tick p="Face mask and sanitizer per each student" />
          <Tick p="Spring file(FOR NEW STUDENT ONLY)" />
           
        </div>
      </div>
    </>
  );
}

export default MandatoryRequiment;
