import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Header from "./../Layout/Header1";
import Footer5 from "./../Layout/footer5";

import bgimg from "./../../images/background/bg2.jpg";
// import FileBase from 'react-file-base64';

import { client } from "../../sanityClient";

// const initialState = {};

function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    gender: "",
    email: "",
    classYear: "",
    dateOfBirth: "",
    address: "",
    contact: "",
    

    yearAddmitted: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    fullName,
    idNumber,
    gender,
    dateOfBirth,
    address,
    contact,
    classYear,
    
    yearAddmitted,
  } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "studentForm",
      fullName: formData.fullName,
      idNumber: formData.idNumber,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      address: formData.address,
      contact: formData.contact, 
      yearAddmitted: formData.yearAddmitted,
      classYear: formData.classYear,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    setFormData({
      fullName: "",
      idNumber: "",
      gender: "",
      email: "",
      dateOfBirth: "",
      address: "",
      contact: "", 
      yearAddmitted: "",
      classYear: "",
    });
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
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
                        <p>Gudele Block 9, Opp. Pity Oil, Juba, South Sudan</p>
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
                <form className="inquiry-form dzForm">
                  <div className="dzFormMsg"></div>
                  <h3 className="box-title m-t0 m-b10">
                    Student's Registration Form{" "}
                    <span className="bg-primary"></span>
                  </h3>
                  <p>
                    Please give us accurate information and keep in mind that
                    giving false information is a crime and violation of our
                    school's policy.
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
                            name="fullName"
                            placeholder="Enter your Full Name here......"
                            value={fullName}
                            onChange={handleChangeInput}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-id-badge text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="idNumber"
                            placeholder="ID Number: e.g. PIC/2022/S00001"
                            value={idNumber}
                            onChange={handleChangeInput}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-user text-primary"></i>
                          </span>
                           
                          <select
                            className="form-control"
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={gender}
                            onChange={handleChangeInput}
                            required
                          >
                            <option>--Select--</option>

                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-user text-primary"></i>
                          </span>

                          <select
                            className="form-control"
                            type="text"
                            name="classYear"
                            value={classYear}
                            onChange={handleChangeInput}
                            required
                          >
                            <option>--Select--</option>
                            <option>Senior One Pretoria</option>
                            <option>Senior One Tripoli</option>
                            <option>Senior One Cape Town</option>

                            <option>Senior Two Paris</option>
                            <option>Senior Two Tokyo</option>
                            <option>Senior Two Beijing</option>
                            <option>Senior Two London</option>

                            <option>Senior Three Singapore</option>
                            <option>Senior Three Australia</option>

                            <option>Senior Four Stanford</option>
                            <option>Senior Four Oxford</option> 
                            <option>Senior Four Harvard</option>
                             
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-calendar text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="date"
                            name="dateOfBirth"
                            placeholder="D.O.B"
                            value={dateOfBirth}
                            onChange={handleChangeInput}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-location-pin text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={address}
                            onChange={handleChangeInput}
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
                            name="contact"
                            placeholder="Contact/E-mail"
                            value={contact}
                            onChange={handleChangeInput}
                            required
                          />
                        </div>
                      </div>
                    </div>
                     

                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-write text-primary"></i>
                          </span>
                          <select
                          className="form-control"
                          type="text"
                          name="yearAddmitted" 
                          value={yearAddmitted}
                          onChange={handleChangeInput}
                          required
                          >
                            <option>--Select--</option>

                         <option>2021</option>
                         <option>2022</option>
                         <option>2023</option>
                         <option>2024</option>
                         <option>2025</option>
                          </select>
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

                          {isFormSubmitted && (
                            <div className="col-lg-12 site-button">
                              Congratulations on successfully enrolling in
                              Pentagon International College. Please be patient
                              as we will respond in a timely manner.{" "}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="button"
                        className="site-button button-lg"
                        onClick={handleSubmit}
                      >
                        <span>{!loading ? "Submit" : "Saving..."}</span>
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

export default StudentForm;
