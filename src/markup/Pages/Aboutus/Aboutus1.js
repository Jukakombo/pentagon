import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Header from "./../../Layout/Header1";
import Footer5 from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import SectionCounter from "./../../Element/SectionCounter";

//Images
import about9 from "./../../../images/about/pic9.jpg";
import bg2 from "./../../../images/background/bg-map.jpg";
import services1 from "./../../../images/our-services/pic1.jpg";
import services2 from "./../../../images/our-services/pic2.jpg";

import bnr from "./../../../images/banner/bnr2.jpg";

class Aboutus1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <PageTitle motherMenu="About Us 1" activeMenu="About Us 1" />
          </div>
          <div className="content-block">
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">About Us</h4>
                  <h2 className="box-title m-tb0">
                    We focus on quality Education
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    Pentagon international Modern Mixed Secondary School is
                    newly registered with the state Ministry of Education,
                    Central Equatoria State under Registration Ref. No.
                    SOME/JS/17-A-1 and it was established as institution in 19th
                    April 2021
                  </p>
                  <p>
                    Pentagon international Modern Mixed Secondary School is
                    owned by South Sudanese. The Chief Executive Officer is
                    called Mere Luke.
                  </p>
                  <p>
                    The main goal for establishing Pentagon International Modern
                    Mixed Secondary School is to provide Sophisticated
                    high-quality class of education to the coming generations
                    that will contribute. Towards growth, mental and physical
                    development of the learners.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  <div className="col-lg-5 col-md-4 about-img">
                    <img src={about9} data-tilt alt="" />
                  </div>
                  <div className="col-lg-7 col-md-8">
                    <div className="abuot-box left row m-lr0 ">
                      <div className="col-lg-4">
                        <h4 className="text-gray-dark">
                          Our school long term objectives are:
                        </h4>
                      </div>
                      <div className="col-lg-8">
                        <p>
                          To produce responsible citizens who respect everyone
                          equally, celebrating diversity and individualism.
                        </p>
                        <p>
                          To provide a safe, happy, and nurturing environment
                          where everyone can succeed by attending punctually
                          every day.
                        </p>
                        <p className="m-b0">
                          To ensure all our children have access to quality
                          teaching of a broad, enriched, and challenging
                          curriculum.
                        </p>
                        <p>
                          To engender a positive attitude and celebrate success
                        </p>
                        <p>
                          Provide strong, effective staff, management, and
                          leadership through continuous development programmes{" "}
                        </p>
                        <p>
                          We are committed to offer first class standards in
                          teaching and grooming young children into active life
                          long learners
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Counetr section */}

            {/* Counetr section End*/}
            <VisionBlog />
          </div>
        </div>
        <Footer5 />
      </>
    );
  }
}
function VisionBlog() {
  return (
    <>
      <div
        className="section-ful our-about-info content-inner-1 "
        style={{
          backgroundImage: "url(" + bg2 + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="section-head text-center">
            <h2 className="box-title m-tb0">
              VISION AND MISSION<span className="bg-primary"></span>
            </h2>
            <p>
              {" "}
              Learning hand in hand – partners in education. Our aim is to set
              high standards and expectations to help all members of the school
              community to achieve the best among all in everything they do and to work
              towards reaching their full potential.  
            </p>
          </div>
          <div className=" row dzseth  m-b30">
            <div className="col-lg-6 col-md-12 m-b30 about-img ">
              <img src={services1} data-tilt alt="" />
            </div>
            <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
              <div className="dis-tbl-cell">
                <h3 className="box-title">
                  VISION<span className="bg-primary"></span>
                </h3>
                <p className="font-16">
                UNTIL You Light the Candle, Darkness Rules!
                </p>
                <h3 className="box-title">
                VISION STATEMENT<span className="bg-primary"></span>
                </h3>
                <p className="font-16">
                Stop wondering on what to do, take that match box near you and light the candle. You will find the “Seeds” on the tables. They were hidden by Darkness.
                </p>
                <p className="font-16">
                  Students in our school come from different cultural
                  backgrounds; they have different religions and speak different
                  languages. We celebrate and value this diversity. We encourage
                  the children to be proud of their own culture, religion and
                  language and to show respect for those of others.
                </p>
              </div>
            </div>
          </div>
          <div className="row dzseth column-reverse">
            <div className="col-lg-6 col-md-12 dis-tbl text-justify">
              <div className="dis-tbl-cell">
                <h3 className="box-title">
                MISSION<span className="bg-primary"></span>
                </h3>
                <p className="font-16">
                Declare war on illiteracy in our beloved Country, The Republic of South Sudan and beyond.
                </p>
                <h3 className="box-title">
                MISSION STATEMENT<span className="bg-primary"></span>
                </h3>
                <p className="font-16">
                To provide a sophisticated high quality class of education to the coming generations in order to embrace humanity around the world and build our Nation’s shining future to last.
                </p>
                <p className="font-16">
                  Work together in a positive partnership with parents and
                  government and to contribute to the quality and development of
                  our country.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-img ">
              <img src={services2} data-tilt alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { VisionBlog };
export default Aboutus1;
