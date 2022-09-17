import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
 
import CreTable from "./CreTable";
import EnglishTable from "./EnglishTable";

function English() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="English" activeMenu="Books" />
      </div>
      <div className="container">
        <EnglishTable />
      </div>
      <Footer5 />
    </>
  );
}

export default English;
