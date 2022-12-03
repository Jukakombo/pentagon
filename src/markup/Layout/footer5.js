import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanityClient";
import LoadingWithBuffer from "./Loading";

function Footer5 () {
  const [formData, setFormData] = useState({
    subscriber: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    subscriber,
    
  } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "subscriber",
      subscriber: formData.subscriber,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    setFormData({
      subscriber: "",
     
    });
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
    setIsFormSubmitted(false)
  };
    return (
      <>
        <footer className="site-footer text-uppercase footer-white business-footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">
                    Pentagon International Modern Mixed Secondary School{" "}
                    </h5>
                    <ul>
                      
                      <li>
                        <Link to={"/"}>Home </Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact Us</Link>
                      </li>
                      <li>
                      {/* <a href="#termsAndCondition">Terms & Conditions</a> */}
                        <Link to={"/terms-condition"}>Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to={"/service"}>Our Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">Useful Link</h5>
                    <ul>
                      <li>
                        <Link to={"#"}>Create Account</Link>
                      </li>
                      <li>
                        <Link to={"/code-of-conduct"}>Code of Conduct </Link>
                      </li>
                      <li>
                        <Link to={"/about-1"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/portfolio-grid-4"}>Gallery</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Project Details</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30 text-white ">Contact us</h5>
                    <ul>
                      <li>
                        <i className="ti-location-pin"></i>
                        <strong>address</strong> Gudele Block 9, Opp. Pity Oil, Juba, South Sudan
                      </li>
                      <li>
                        <i className="ti-mobile"></i>
                        <strong>phone</strong>+211(0)920032333 |
                        +211(0)928104000 +211(0)928617175 (24/7 Support Line)
                      </li>
                      <li>
                        <i className="ti-email"></i>
                        <strong>email</strong>pentagoncollege2021@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                  <div className="widget">
                    <h5 className="m-b30 text-white">
                      Subscribe To Our Newsletter
                    </h5>
                    <p className="text-capitalize m-b20">
                      If you have any questions, you can contact us so that we
                      can give you a satisfying answer. Subscribe to our
                      newsletter to get our latest news.
                    </p>
{isFormSubmitted ? <div className="subscribe-form m-b20">
                      <form
                        className="dzSubscribe"
                        
                      >
                        <div className="dzSubscribeMsg"></div> 
                        <div className="input-group">
                          <input
                            name="subscriber"
                            value={subscriber}
                            required
                            onChange={handleChangeInput} 
                            className="form-control"
                            placeholder="e.g alison@gmail.com"
                            type="email"
                            
                          />
                           
                          <span className="input-group-btn">
                            <button onClick={handleSubmit}
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="site-button"
                              disabled={!subscriber}
                            >
                              
                              <span>{!loading ? "Subscribe" : "Loading"}</span>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>:<div style={{backgroundColor:"green", padding:"15px", color:"white"}}>😊You have successfully subscribed!</div>}
                    


                    <ul className="list-inline m-a0">
                      <li>
                        <Link
                          to={{pathname:"https://www.facebook.com/pentagoninter2021"}}
                          className="site-button facebook circle mr-1" target='_blank' 
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"#"}
                          className="site-button google-plus circle mr-1"
                        >
                          <i className="fa fa-google-plus"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"#"}
                          className="site-button linkedin circle mr-1"
                        >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"#"}
                          className="site-button instagram circle mr-1"
                        >
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"#"}
                          className="site-button twitter circle mr-1"
                        >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-left ">
                  {" "}
                  <span>
                    Copyright ©2021- {new Date().getFullYear()} Pentagon International Modern Mixed Secondary School
                  </span>{" "}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                  <div className="widget-link ">
                    <ul>
                      <li>
                        <Link to={"#"}> Developed by</Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname:
                              "https://alison-profesional-portfolio.netlify.app/",
                          }}
                          target="_blank"
                        >
                          {" "}
                          Alison Juka | Remit Capital Limited
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
 

export default Footer5;
