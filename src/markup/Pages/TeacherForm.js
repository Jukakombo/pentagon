import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Header from "./../Layout/Header1";
import Footer5 from "./../Layout/footer5";

import bgimg from "./../../images/background/bg2.jpg";

import { client } from "../../sanityClient";

// const initialState = {};

function TeacherForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    address: "",
    contact: "",
    profilePicture: "",
    subjects: "",
    classTaken: "",
    position: "",
    
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
    profilePicture,
    classTaken,
     position,
    subjects,
  } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "teacherForm",
      fullName: formData.fullName,
      idNumber: formData.idNumber,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      address: formData.address,
      contact: formData.contact,
      profilePicture: formData.profilePicture,
      subjects: formData.subjects,
      classTaken:formData.classTaken,
      position:formData.position,
      
    
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
      profilePicture: "",
      subjects: "",
      classTaken: "",
      position: "",
      
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
                    Teacher's Registration Form{" "}
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
                            placeholder="Enter your Names here......"
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
                            placeholder="ID Number: e.g. PIC/2022/T01"
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
                            <i className="ti-calendar text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
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
                            <i className="ti-gallery text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="file"
                            name="profilePicture"
                            placeholder="Profile Picture"
                            value={profilePicture}
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
                            <i className="ti-agenda text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={position}
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
                            <i className="ti-agenda text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="classTaken"
                            placeholder="Class"
                            value={classTaken}
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
                            <i className="ti-agenda text-primary"></i>
                          </span>
                          <textarea
                            required
                            type="text"
                            name="subjects"
                            rows="4"
                            className="form-control"
                            placeholder="Subject(s)"
                            value={subjects}
                            onChange={handleChangeInput}
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

export default TeacherForm;
