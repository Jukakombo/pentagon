import React from "react";
import Header from "./../Layout/Header1";
import bnr from './../../images/banner/bnr9.jpg';

import Footer5 from "./../Layout/footer5";
import PageTitle from "../Layout/PageTitle";

function MoralStory() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
      <div
          className="dlab-bnr-inr overlay-primary bg-pt"
          style={{ backgroundImage: 'url(' + bnr + ')' }}
        >
          <PageTitle motherMenu="Moral Story" activeMenu="Stories Zone" />
        </div>
      </div>
      <Footer5 />
    </>
  );
}

export default MoralStory;
