import React, { useState } from "react";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/footer5";
import PageTitle from "./../Layout/PageTitle";

import bnr from "./../../images/banner/bnr6.jpg";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
 
import { signupTeacher } from "../../actions/userTeacher";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function TeacherSignUp() {
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupTeacher(formData, history));
    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
    }, 8000);
  }; 
  
  const success = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const failure = () => {
    console.log("Sign in was successful. Please try again later");
  };
  const switchMode = () => {
    setIsSignUp((isSignUp) => !isSignUp);
  };

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <PageTitle motherMenu="Register" activeMenu="Register" />
        </div>
        {/* <!-- inner page banner END --> */}
        {/* <!-- contact area --> */}
        <div className="section-full content-inner shop-account">
          {/* <!-- Product --> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="font-weight-700 m-t0 m-b30">
                  Create An Account
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 m-b30">
                <div className="p-a30 border-1  max-w500 m-auto">
                  <div className="tab-content">
                    <form
                      id="login"
                      className="tab-pane active"
                      onSubmit={handleSubmit}
                    >
                      <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                      <p className="font-weight-600">
                        If you have an account with us, please log in.
                      </p>
                      <div className="form-group">
                        <label className="font-weight-700">First Name *</label>
                        <input
                          name="dzName"
                          required
                          className="form-control"
                          placeholder="First Name"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className="font-weight-700">Last Name *</label>
                        <input
                          name="dzName"
                          required
                          className="form-control"
                          placeholder="Last Name"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className="font-weight-700">E-MAIL *</label>
                        <input
                          name="dzName"
                          required
                          className="form-control"
                          placeholder="e.g joseph@pic.edu"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className="font-weight-700">PASSWORD *</label>
                        <input
                          name="dzName"
                          required
                          className="form-control "
                          placeholder="Type at least 8 characters"
                          type="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className="font-weight-700">
                          CONFIRM PASSWORD *
                        </label>
                        <input
                          name="dzName"
                          required
                          className="form-control "
                          placeholder="Confirm password"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confirmPassword: e.target.value,
                            })
                          }
                        />
                      </div>
                      {showProgress && <CircularProgress />}
                      <div className="text-left">
                        <button
                          type="submit"
                          className="site-button button-lg radius-no outline outline-2"
                        >
                          CREATE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Product END --> */}
        </div>

        {/* <!-- contact area  END --> */}
      </div>

      <Footer />
    </>
  );
}
export default TeacherSignUp;
