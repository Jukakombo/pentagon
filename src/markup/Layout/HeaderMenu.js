import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderMenu extends Component {
  render() {
    return (
      <>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to={"/"}>
              <span className="ti-home"></span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"./about-1"}>About Us</Link>
          </li>
          <li>
            <Link to={"./service"}>Our Service</Link>
          </li>
          <li>
            <Link to={"#"}>
              School News <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="sub-menu left">
              <li>
                <Link to={"/blog-list-right-sidebar"} className="dez-page">
                  News
                </Link>
              </li>
              <li>
                <Link to={"/school-event"} className="dez-page">
                  School Events
                </Link>
              </li>

              <li>
                <Link to={"#"} className="dez-page">
                  School Calendar
                </Link>
                <ul className="sub-menu right">
                  <li>
                    <Link to={"/first-term-calendar"} className="dez-page">
                      First Term
                    </Link>
                  </li>
                  <li>
                    <Link to={"/second-term-calendar"} className="dez-page">
                      Second Term
                    </Link>
                  </li>
                  <li>
                    <Link to={"/third-term-calendar"} className="dez-page">
                      Third Term
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/students-articles"} className="dez-page">
                  Student's Articles
                </Link>
              </li>

              <li>
                <Link to={"/exam-timetable"} className="dez-page">
                  Exam timetable
                </Link>
              </li>
              <li>
                <Link to={"/science-and-technology"} className="dez-page">
                  Science & Technology
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={"#"}>
              E-Portal <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="sub-menu left">
              <li>
                <Link to={"./login"} className="dez-page">
                  Students' Database{" "}
                </Link>
              </li>
              <li>
                <Link to={"./teacher-login"} className="dez-page">
                  Teachers' Database{" "}
                </Link>
              </li>

              {/* <li>
                <Link to={"./register"} className="dez-page">
                  Create Student Account{" "}
                </Link>
              </li>
              <li>
                <Link to={"./teacher-sign-up"} className="dez-page">
                  Create Teacher Account{" "}
                </Link> */}
              {/* </li> */}

              <li>
                <Link to={"/student-registration-form"} className="dez-page">
                  Students' Registration form{" "}
                </Link>
              </li>
              <li>
                <Link to={"/teacher-registration-form"} className="dez-page">
                  Teachers' Registration Form{" "}
                </Link>
              </li>

              <li>
                <Link to={"/portfolio-grid-4"} className="dez-page">
                  Gallery{" "}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={"/faqs"} className="dez-page">
              FAQs
            </Link>
          </li>
          <li>
            <Link to={"#"} className="dez-page">
              E-Library
              <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="sub-menu left">
              <li>
                <Link to={"/login"} className="dez-page">
                  Login to Access{" "}
                </Link>
              </li>
              {/* artbook */}
              <li>
                <Link to={"/login"}>our Library</Link>
              </li>
            </ul>
          </li>
          {/* sports */}
          <li>
            <Link to={"#"}>
              Sports <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="sub-menu left">
              <li>
                <Link to={"./under-maintenance"} className="dez-page">
                  Football{" "}
                </Link>
              </li>
              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  basketball{" "}
                </Link>
              </li>

              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  Tennis{" "}
                </Link>
              </li>

              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  Handball{" "}
                </Link>
              </li>
            </ul>
          </li>
          {/* Webinar */}
          <li>
            <Link to={"#"}>
              Activities <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="sub-menu left">
              <li>
                <Link to={"#"} className="dez-page">
                  Webinar{" "}
                </Link>
                <ul className="sub-menu left">
                  <li>
                    <Link to={"inter-school-debate"}>Inter School Debates</Link>
                  </li>
                  <li>
                    <Link to={"inter-school-debate"}>
                      Inter School conferences
                    </Link>
                  </li>
                  <li>
                    <Link to={"inter-school-debate"}>
                      • Inter School Presentations
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"#"} className="dez-page">
                  Student of the Year{" "}
                </Link>
                <ul className="sub-menu left">
                  <li>
                    <Link to={"best-female-student"}>
                      Best Female Student Of The Year
                    </Link>
                  </li>
                  <li>
                    <Link to={"best-female-student"}>
                      Best Male Student Of The Year
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  Funny Story{" "}
                </Link>
              </li>
              <li>
              <Link to={"/admission-file"} className="dez-page">
               Admision Form{" "}
              </Link>
            </li>
              <li>
                <Link to={"/moral-story"} className="dez-page">
                  Moral Story{" "}
                </Link>
              </li>

              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  Alumni{" "}
                </Link>
              </li>
              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  Health Tips{" "}
                </Link>
              </li>
              <li>
                <Link to={"/under-maintenance"} className="dez-page">
                  Assignment{" "}
                </Link>
              </li>
              <li>
                <Link to={"/code-of-conduct"} className="dez-page">
                  Codes Of Conduct{" "}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </>
    );
  }
}
export default HeaderMenu;
