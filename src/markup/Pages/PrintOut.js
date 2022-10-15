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
import  { useReactToPrint } from "react-to-print";

import ComponentToPrint from "./PrintPDF";

function PrintOut() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
    <button
              
              className="btn btn-primary"
            >
             <span>Congratulation! You have successfully Registered </span>
            </button>
      <button onClick={handlePrint}>Print this out!</button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
}

export default PrintOut;
