// import React, { useRef } from 'react'
// import ComponentToPrint from './PrintPDF';
// import { useReactToPrint } from "react-to-print";

// function PrintOut() {
//     const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });
//   return (
//     <div>
//         <button onClick={handlePrint}>Print My Form</button>
//         <ComponentToPrint ref={componentRef} />
//       </div>
//   )
// }

// export default PrintOut

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import ComponentToPrint from "./PrintPDF";

function PrintOut() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="container">
      <button className="btn btn-primary">
        <span>Congratulation! You have successfully Registered </span>
      </button>
      <p>
        Please Save your Complete Form as PDF by clicking on the button Save
        Complete File then Click on next Download Complete File button!
      </p>
      <button className="btn btn-danger" onClick={handlePrint}>
        Save Complete File
      </button>
      &nbsp;
      <button className="btn btn-danger">
        <a href="pdf/admisionFile.pdf" download style={{color:"white"}}>
          Download Complete Form
        </a>
      </button>{" "}
      &nbsp;
      <button className="btn btn-danger">
        <Link to="/" style={{color:"white"}}>Finsh</Link>
      </button>
      <ComponentToPrint ref={componentRef} />
      <p>
        Please Save your Complete Form as PDF by clicking on the button Save
        Complete File then Click on next Download Complete File button!
      </p>
      <button className="btn btn-danger" onClick={handlePrint}>
        Save Complete File
      </button>
      &nbsp;
      <button className="btn btn-danger">
        <a href="pdf/admisionFile.pdf" download style={{color:"white"}}>
          Download Complete Form
        </a>
      </button>{" "}
      &nbsp;
      <button className="btn btn-danger">
        <Link to="/" style={{color:"white"}}>Finsh</Link>
      </button>
    </div>
  );
}

export default PrintOut;
