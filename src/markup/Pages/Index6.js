import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleMaps from "simple-react-google-maps";
import Header4 from "./../Layout/header4";
import Footer5 from "./../Layout/footer5";
import LatestBlogSlider from "./../Element/LatestBlogSlider";

//Images
import organizationalDigram from "../../images/our-services/organizational.png";
import bgslider9 from "./../../images/main-slider/slide9.jpg";
import bg19 from "./../../images/background/bg19.jpg";
import bg2 from "./../../images/background/fountain2.gif";
import bnr1 from "./../../images/background/back2.gif";
 

import test1 from "./../../images/testimonials/pic1.jpg";
import test2 from "./../../images/testimonials/pic2.jpg";
import test3 from "./../../images/testimonials/pic3.jpg";
import Index7ClientCarousel from "../Element/Index7ClientCarousel";
import TestimonialStyle2 from "./ShortCode/TestimonialStyle2";
import HomeTab from "../Element/HomeTab";
import FinalClock from "./clock/FinalClock";
import { VisionBlog } from "./Aboutus/Aboutus1";

const expertBox = [
  {
    image: test1,
    name: "Name",
    description:
      "E.g Fresh Graduate Master in Business Administration from Makerere University-Ugandan ",
    title: "Proprietor",
  },
  {
    image: test2,
    name: "Name",
    description:
      "E.g Fresh Graduate Master in Business Administration from Makerere University-Ugandan ",
    title: "Principal",
  },
  {
    image: test3,
    name: "Name",
    description:
      "E.g Fresh Graduate Master in Business Administration from Makerere University-Ugandan ",
    title: "Vice Principal",
  },
  {
    image: test2,
    name: "Name",
    description:
      "E.g Fresh Graduate Master in Business Administration from Makerere University-Ugandan ",
    title: "Headmasters",
  },
];

const Index6 = (props) => {
  let resizeMargin = () => {
    var screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      var elmnt = document.querySelector(".container");
      var containerSize = elmnt.offsetWidth;

      var getMargin = (screenWidth - containerSize) / 2;

      var setResizeMarginButton =
        document.getElementsByClassName("setResizeMargin");
      var class_len =
        setResizeMarginButton !== null ? setResizeMarginButton.length : 0;
      for (var i = 0; i < class_len; i++) {
        setResizeMarginButton[i].setAttribute(
          "style",
          "margin-left:" + getMargin + "px"
        );
      }
    }
  };

  useEffect(() => {
    resizeMargin();
  }, []);

  var i = 0;

  // Placeholder Animation Start
  var inputSelector = document.querySelectorAll("input, textarea");

  for (i = 0; i < inputSelector.length; i++) {
    inputSelector[i].addEventListener("focus", function (event) {
      return this.parentElement.parentElement.classList.add("focused");
    });
  }

  for (i = 0; i < inputSelector.length; i++) {
    inputSelector[i].addEventListener("blur", function (event) {
      var inputValue = this.value;
      if (inputValue === "") {
        this.parentElement.parentElement.classList.remove("filled");
        this.parentElement.parentElement.classList.remove("focused");
      } else {
        this.parentElement.parentElement.classList.add("filled");
      }
    });
  }

  return (
    <>
      <Header4 />

      <div className="page-content bg-white rubik-font">
        <div
          className="home-banner-2"
          style={{ backgroundImage: "url(" + bgslider9 + ")" }}
        >
          <div className="container " style={{ paddingTop: "50px" }}>
            <div className="home-bnr-inner-2 row align-items-center">
              <div className="home-bnr-content-2 col-md-6">
                <h4
                  className="sub-title "
                  style={{ fontSize: "40px", fontFamily: "Rancho" }}
                >
                  Welcome to Pentagon International College (PIC)
                </h4>
                <h4 className="sub-title">We’re Awesome & Professionals</h4>
                <h2 className="dz-title text-primary">
                  <span>In Teaching Strategy</span>
                  <br />
                  <strong>Start Now by</strong>
                </h2>
                <p>
                  Giving your child a great start in life.
                  <br />
                  Every child deserves a quality <br />
                  and a well rouded-education in their informative year
                  <br />
                </p>
                <a href="#aboutus2020" className="site-button button-md radius-xl">
                  Explore Now
                </a>
              </div>
              <div className="col-md-6">
                <div className="curve-img">
                  <FinalClock />
                  {/* <img src={slider9} alt="" className="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="aboutus2020"
          className="section-full content-inner-2 overlay-primary choseus-tabs  bg-img-fix"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <div className="container">
            <div className="section-head text-white text-center">
              <h2 className="box-title m-tb0">
                Why Choose Us<span className="bg-primary"></span>
              </h2>
              <p>
                We seek to aid the development of children in our care, to
                become outstanding scholars and global citizens, by instilling
                in them the spirit of excellence.
              </p>
            </div>
          </div>
          <HomeTab />
        </div>
        <>
          <div
            className="section-ful our-about-info content-inner-1 "
            style={{
              // backgroundImage: 'url(' + bg2 + ')',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* mission and vision */}
            <VisionBlog />
            <div className="container">
              <div className="section-head text-center">
                <h2 className="box-title m-tb0">
                  Organizational Structure for Effective School Management
                  <span className="bg-primary"></span>
                </h2>
                {/* <div className=" row dzseth  m-b30"> */}
                <div className="col-lg-12 col-md-12 col-sm-10 m-b30 center ">
                  <img src={organizationalDigram} data-tilt alt="organigram" />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
        <div className="content-block">
          {/* <!-- Customer Review  --> */}
          <div
            className="section-full content-inner-2 bg-gray bg-img-fix overlay-primary"
            style={{ backgroundImage: "url(" + bg2 + ")" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center section-head text-white">
                  <h2 className="font-weight-700 text-white m-b0">
                    What People are saying about our School?
                  </h2>
                  <p className="m-b0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <TestimonialStyle2 />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Customer Review END --> */}
          {/* <!-- Our Recent Blog Posts --> */}
          <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="max-w600 m-auto text-center m-b30">
                <h6 className="m-t0">Publish what you think</h6>
                <h2 className="m-t0">Latest School News</h2>
              </div>
              <LatestBlogSlider />
            </div>
          </div>
          {/* <!-- Our Recent Blog Posts END --> */}
          {/* <!-- Our Team --> */}
          <div className="section-full content-inner-2 our-team-bx bg-primary">
            <div className="container">
              <div className="row">
                <div className="section-head text-white col-lg-12 text-center">
                  <h5 className="title-small">Our Team</h5>
                  <h2 className="title-head m-b0">Top experts mates</h2>
                </div>
              </div>
              <div className="row">
                {expertBox.map((data, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className="experts-box text-white p-a20">
                      <div className="clearfix experts-info-bx">
                        <div className="experts-img">
                          <img src={data.image} alt="" />
                        </div>
                        <div className="experts-info">
                          <h5 className="experts-name">{data.name} </h5>
                          <h6 className="experts-service">{data.title}</h6>
                        </div>
                      </div>
                      <p className="m-b10">{data.description}</p>
                      <ul className="dez-social-icon">
                        <li>
                          <Link
                            to={"#"}
                            className="fa text-white fa-facebook"
                          ></Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="fa text-white fa-google-plus"
                          ></Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="fa text-white fa-linkedin"
                          ></Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="fa text-white fa-twitter"
                          ></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* contact form and map here */}
          {/* <!-- Our Portfolio --> */}
          <div
            className="section-full p-tb15 our-support content-inner-2"
            style={{
              backgroundImage: "url(" + bg19 + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "bottom",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12 section-head text-center">
                  <h2 className="m-b0 font-40">
                    <span className="font-weight-400">Contact</span> Us
                  </h2>
                  <p className="m-b0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the.
                  </p>
                </div>
              </div>
              <div className="support-box-form bg-primary">
                <div className="row m-lr0">
                  <div className="col-lg-6 p-lr0 d-flex">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57803.76927259502!2d75.78311389999999!3d25.110810700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1540556893926" style={{width: "100%", border: "0"}} className="d-flex align-items-stretch" allowfullscreen></iframe> */}
                    <GoogleMaps
                      apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
                      style={{ minHeight: "100%", width: "100%" }}
                      zoom={6}
                      center={{
                        lng: 31.549118244672563,

                        lat: 4.866158074938157,
                      }}
                      markers={{
                        lng: 31.549118244672563,
                        lat: 4.866158074938157,
                      }} //optional
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="support-form">
                      <div className="support-title text-white m-b30">
                        <h6 className="text-uppercase font-weight-500 m-b10">
                          Support
                        </h6>
                        <h2 className="font-40 font-weight-400 m-tb0">
                          Need Help?
                        </h2>
                        <p className="font-14">
                          Contact our customer support team if you have any
                          questions.
                        </p>
                      </div>
                      <div className="dezPlaceAni">
                        <div className="dzFormMsg"></div>
                        <form method="post" className="" action="">
                          <input type="hidden" value="Contact" name="dzToDo" />
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Your Name</label>
                                  <input
                                    name="dzName"
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Phone</label>
                                  <input
                                    name="dzOther[Phone]"
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Your Email Address</label>
                                  <input
                                    name="dzEmail"
                                    type="email"
                                    className="form-control"
                                    required
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="form-group">
                                <div className="input-group">
                                  <label>Your Message...</label>
                                  <textarea
                                    name="dzMessage"
                                    rows="4"
                                    className="form-control"
                                    required
                                    placeholder=""
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <button
                                name="submit"
                                type="submit"
                                value="Submit"
                                className="site-button white button-md m-t10"
                              >
                                Submit Now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* download from our official line*/}
          <div className="container m-t80 ">
            <div className="section-head title-bx text-center">
              <h2>Download Our Mobile App</h2>
            </div>
            <div className="app-btn-bx text-center">
              <Link to={"#"} className="site-button radius-xl m-lr5 ">
                <i className="fa fa-apple"></i>IOS
              </Link>
              <Link to={"#"} className="site-button radius-xl m-lr5">
                <i className="fa fa-android"></i>Android
              </Link>
            </div>
          </div>
          {/* <!-- Contact Us END --> */}
        </div>
        {/* <!-- contact area END --> */}
        <div
          style={{ marginTop: "6px" }}
          className="section-full bg-primary-dark p-tb15"
        >
          <div className="container">
            <Index7ClientCarousel />
          </div>
        </div>
      </div>

      <Footer5 />
    </>
  );
};
export default Index6;
