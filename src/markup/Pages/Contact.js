import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Header from "./../Layout/Header1";
import Footer5 from "./../Layout/footer5";
import { useDispatch } from "react-redux";
import bgimg from "./../../images/background/bg2.jpg";
import { createContact } from "../../actions/contacts";

// const initialState = {};

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(contact));
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
    clear();
  };

  const clear = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    });
  };
  return (
    <>
      <Header />
      <div className="full-section">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark contact-page"
          style={{ backgroundImage: "url(" + bgimg + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-xs-4">
                <div className="row text-white">
                  <div className="col-lg-12 col-md-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm text-primary text-left">
                            <i className="ti-location-pin"></i>
                          </span>
                          Our Address
                        </h5>
                        <p>Gudele Block 9, Opp. Pity Oil, Juba South Sudan</p>
                        <h6 className="m-b15 font-weight-400">
                          <i className="ti-alarm-clock"></i> Office Hours
                        </h6>
                        <p className="m-b0">Mon To Fri - 08.00am-02.45pm</p>
                        <p>Saturday to Sunday - Close</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 m-b30 ">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm text-primary text-left">
                            <i className="ti-email"></i>
                          </span>
                          E-mail
                        </h5>
                        <p className="m-b0">pentagoncollege2021@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 m-b30 ">
                    <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm text-primary text-left">
                            <i className="ti-mobile"></i>
                          </span>
                          Phone Numbers
                        </h5>
                        <p>+211(0)920032333 </p>
                        <p>+211(0)928617175</p>
                        <p>+211(0)928104000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-xs-8">
                <form className="inquiry-form dzForm" onSubmit={handleSubmit}>
                  <div className="dzFormMsg"></div>
                  <h3 className="box-title m-t0 m-b10">
                    Let's Convert Your Idea into Reality{" "}
                    <span className="bg-primary"></span>
                  </h3>
                  <p>
                    Please give us a little information and we'll follow up
                    quickly.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-user text-primary"></i>
                          </span>
                          <input
                            autoFocus
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Enter your Name here......"
                            value={contact.name}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                name: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-mobile text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Enter your phone here......"
                            value={contact.phone}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                phone: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-email text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Enter your E-mail here......"
                            value={contact.email}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-check-box text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Enter your Subject here......"
                            value={contact.subject}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                subject: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-agenda text-primary"></i>
                          </span>
                          <textarea
                            required
                            type="text"
                            name="message"
                            rows="4"
                            className="form-control"
                            placeholder="Type your message here..."
                            value={contact.message}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                message: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                            data-callback="verifyRecaptchaCallback"
                            data-expired-callback="expiredRecaptchaCallback"
                          ></div>
                          <input
                            className="form-control d-none"
                            data-recaptcha="true"
                            required
                            data-error="Please complete the Captcha"
                          />

                          {success && (
                            <div className="col-lg-12 site-button">
                              Thank you for getting in touch! We appreciate you
                              contacting us. One of our colleagues will get back
                              in touch with you soon!Have a great day!{" "}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="site-button button-lg"
                        onClick={handleSubmit}
                      >
                        {" "}
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- inner page banner END --> */}
      </div>

      <Footer5 />
    </>
  );
}

export default Contact;
