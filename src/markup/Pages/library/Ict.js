import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
 
import CreTable from "./CreTable";
import EnglishTable from "./EnglishTable";
import GeographyTable from "./GeographyTable";
import HistoryTable from "./HistoryTable";
import IctTable from "./IctTable";

function Ict() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="I.C.T" activeMenu="Books" />
      </div>
      <div className="container">
        <IctTable />
      </div>
      <Footer5 />
    </>
  );
}

export default Ict;
