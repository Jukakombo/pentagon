import React from 'react'
import bg19 from "./../../../images/addmission/watermark.png";

function MandatoryRequiment() {
  return (
    <>
        <div
        className="section-full p-tb10 our-support content-inner-2"
        style={{
          backgroundImage: "url(" + bg19 + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
        }}
      >
        <h4>NB: fee paid is not returnable in case of any problem or change of mind!</h4>
      </div>
    </>
  )
}

export default MandatoryRequiment