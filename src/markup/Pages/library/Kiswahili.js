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
import KiswahiliTable from "./KiswahiliTable";

function Kiswahili() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="Kiswahili" activeMenu="Books" />
      </div>
      <div className="container">
        <KiswahiliTable />
      </div>
      <Footer5 />
    </>
  );
}

export default Kiswahili;
