import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
 
import CreTable from "./CreTable";
import LiteratureTable from "./LiteratureTable";

function Literature() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="C.R.E" activeMenu="Books" />
      </div>
      <div className="container">
        <LiteratureTable />
      </div>
      <Footer5 />
    </>
  );
}

export default Literature;
