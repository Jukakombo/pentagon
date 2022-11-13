import React, { useEffect, useState } from "react";
import { Document, Page } from 'react-pdf';
import { useParams } from "react-router-dom";
import { client } from "../../../sanityClient";
import BlogClassicGrid from "../BlogClassic/BlogClassicGrid";

function StudentArticles() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    // <div>
    //   <Document file="./pdf/statistiques_corrige.pdf" onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} />
    //   </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p>
    // </div>
    
    <>
      <BlogClassicGrid   />
    </>
  );
}
export default StudentArticles;
