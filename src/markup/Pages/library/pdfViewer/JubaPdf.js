import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function JubaPdf({ readingPdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  };
  const changePageBack = () => {
    changePage(-1);
  };
  const pageNext = () => {
    changePage(+1);
  };

  return (
    <div>
      <Document file={`${readingPdf}`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="600"  pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
       
      {pageNumber > 1 && <button onClick={changePageBack}>Previus Page</button>}
      {pageNumber < numPages &&  <button onClick={pageNext}>Next Page</button>}
    </div>
  );
}

export default JubaPdf;
