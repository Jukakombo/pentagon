import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';

import Footer5 from './../Layout/footer5';
import PageTitle from './../Layout/PageTitle';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/user';
import { useHistory } from 'react-router-dom';
import Googlesignin from 'react-google-login';
import bnr from './../../images/banner/bnr3.jpg';
import ProgressBar from './ProgressBar';
import { Button } from '@mui/material';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
    }, 8000);
  };
  const success = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  const failure = () => {
    console.log('Sign in was successful. Please try again later');
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
          style={{ backgroundImage: 'url(' + bnr + ')' }}
        >
          <PageTitle motherMenu="Login/SignUp" activeMenu="Login" />
        </div>
        {/* <!-- inner page banner END --> */}
        {/* <!-- contact area --> */}
        <div className="section-full content-inner shop-account">
          {/* <!-- Product --> */}

          {/* <!-- Contact Section Two --> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="font-weight-700 m-t0 m-b30">
                  {isSignUp ? 'Create An Account' : 'Sign In'}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 m-b30">
                <div className="p-a30 border-1  max-w500 m-auto">
                  <div className="tab-content">
                    {/* <!-- Signup Form--> */}

                    <form
                      onSubmit={handleSubmit}
                      id="login"
                      className="tab-pane active"
                    >
                      {isSignUp && (
                        <>
                          <div className=" form-group">
                            <label className="font-weight-700">
                              Enter your first name*
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="firstName"
                              placeholder="Enter first name here......"
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  firstName: e.target.value,
                                })
                              }
                              required
                            />
                          </div>

                          <div className=" form-group">
                            <label className="font-weight-700">
                              Enter last name*
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              placeholder="Enter lasst name here......"
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  lastName: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </>
                      )}
                      <div className="form-group">
                        <label className="font-weight-700">Enter email*</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Enter your email here......"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="font-weight-700">
                          Enter Password*
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Enter your password here......"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      {isSignUp && (
                        <>
                          <div className="form-group">
                            <label className="font-weight-700">
                              Enter Confirm Password*
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              name="confirmPassword"
                              placeholder="Enter your password here......"
                              value={formData.confirmPassword}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  confirmPassword: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </>
                      )}
                      {showProgress && <ProgressBar />}
                      <Button onClick={switchMode}>
                        {isSignUp
                          ? 'Already have an account? Sign In'
                          : "Don't have an account? Sign Up"}
                      </Button>

                      <div className="text-left">
                        <button className="site-button button-lg radius-no outline outline-2">
                          {isSignUp ? 'CREATE' : 'SIGN IN'}
                        </button>
                      </div>

                      <Googlesignin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        onSuccess={success}
                        onFailure={failure}
                        cookies="single_host_origin"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer5 />
    </>
  );
}

export default Login;
