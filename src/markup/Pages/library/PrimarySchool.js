import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
import PrimarySchoolTable from "./PrimarySchoolTable";

function PrimarySchool() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="Primary-School-Books" activeMenu="Books" />
      </div>
      <div className="container">
        <PrimarySchoolTable />
      </div>
      <Footer5 />
    </>
  );
}

export default PrimarySchool;
