import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer5 from './../Layout/footer5';
import { useDispatch } from 'react-redux';
import bgimg from './../../images/background/bg2.jpg';
import { createContact } from '../../actions/contacts';

// const initialState = {};

function StudentForm() {
  const [contact, setContact] = useState({
    givenName: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
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
  console.log(handleSubmit);

  const clear = () => {
    setContact({
      givenName: '',
      email: '',
      phone: '',
      message: '',
      subject: '',
    });
  };
  return (
    <>
      <Header />
      <div className="full-section">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark contact-page"
          style={{ backgroundImage: 'url(' + bgimg + ')' }}
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
                        <p>
                        Gudele Bloc 7, Juba - South
                          Sudan
                        </p>
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
                        <p className="m-b0">info@example.com</p>
                        <p className="m-b0">sales@example.com</p>
                        <p className="m-b0">hr@example.com</p>
                        <p>Pentagon@gmail.com</p>
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
                        <p>+212698487054</p>
                        <p>+212698487054</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-xs-8">
                <form className="inquiry-form dzForm" onSubmit={handleSubmit}>
                  <div className="dzFormMsg"></div>
                  <h3 className="box-title m-t0 m-b10">
                    Student's Registration Form {' '}
                    <span className="bg-primary"></span>
                  </h3>
                  <p>
                  Please give us accurate information and keep in mind that giving false information is a crime and violation of our school's policy.
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
                            name="givenName"
                            placeholder="Enter your Name here......"
                            value={contact.givenName}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                givenName: e.target.value,
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
                            <i className="ti-id-badge text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="ID Number: e.g. PIC/2022/S00001"
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

                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-user text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Gender"
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
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-id-badge text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Class"
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
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-calendar text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="D.O.B"
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
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-location-pin text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Address"
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
                            placeholder="Contact/E-mail"
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
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="ti-gallery text-primary"></i>
                          </span>
                          <input
                            className="form-control"
                            type="file"
                            name="phone"
                            placeholder="Profile Picture"
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
                            <i className="ti-agenda text-primary"></i>
                          </span>
                          <textarea
                            required
                            type="text"
                            name="message"
                            rows="4"
                            className="form-control"
                            placeholder="H.M comment"
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
                            Congratulations on successfully enrolling in Pentagon International College. Please be patient as we will respond in a timely manner.{' '}
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
                        {' '}
                        <span>Submit</span>
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
