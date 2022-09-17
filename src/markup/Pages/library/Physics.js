import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
import MathsTable from "./MathsTable";
import PhysicsTable from "./PhysicsTable";

function Physics() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary bg-pt"
        style={{ backgroundImage: "url(" + bnr + ")" }}
      >
        <PageTitle motherMenu="Physics" activeMenu="Books" />
      </div>
      <div className="container">
        <PhysicsTable />
      </div>
      <Footer5 />
    </>
  );
}

export default Physics;
