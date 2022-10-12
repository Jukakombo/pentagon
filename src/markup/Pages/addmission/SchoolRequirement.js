import React from "react";

function SchoolRequirement() {
  return (
    <>
      <div className="scholFees">
        <h4 className="text-center" style={{ borderBottom: "2px solid black", color:"blue" }}>
          School Requirements
        </h4>
        <div className="row row__padding">
          <div className="col-lg-6 col-md-12 requirement">
            <h5>First Term: SSP 0</h5>
            <h5>Second Term: SSP 55,000</h5>
            <h5>Third Term: SSP 50,000</h5>
            <h5>Total Amount: 105,000 (non-refoundable)</h5>
            <h5>Admission fess non refoundable: continue student ssp 4,000 new student 5ssp 5,000 </h5>
            <h5>Registration fees: ssp 10,000 </h5>
            <h5>Track suit: ssp 20,000 </h5>
            <h5>Uniform: ssp </h5>
            
            <h5>total: ssp 50,000</h5>

          </div>
          <div className="col-lg-6 col-md-12 requirement">
          <h5>t-shirt s2 and s3: ssp 7,000 (continue student)  </h5>
            <h5>neck-tie: ssp 30,000 </h5>
            <h5>school badge: ssp</h5>
            <h5>i.d card: free</h5>
            <h5>report card: free</h5>
            <div className="paymentMode">
            <h5 style={{color:"blue", textDecoration:"underline"}}>Payment details</h5>
            <h5>A/C Name: Pentagon Inter</h5>
            <h5>A/C No. 0402103068422</h5>
            <h5>Bank: Eden Commercial Bank</h5> 
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default SchoolRequirement;
