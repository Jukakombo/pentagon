import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
 
import CreTable from "./CreTable";
import EnglishTable from "./EnglishTable";
import GeographyTable from "./GeographyTable";

function Geography() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="Geography" activeMenu="Books" />
      </div>
      <div className="container">
        <GeographyTable />
      </div>
      <Footer5 />
    </>
  );
}

export default Geography;
