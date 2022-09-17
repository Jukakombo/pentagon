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
                  Student e-Portal{" "}
                </Link>
              </li>
              <li>
                <Link to={"./login"} className="dez-page">
                  Teachers Login{" "}
                </Link>
              </li>

              <li>
                <Link to={"./register"} className="dez-page">
                  Create an Account{" "}
                </Link>
              </li>

              <li>
                <Link to={"./portfolio-grid-4"} className="dez-page">
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
                <Link to={"#"} className="dez-page">
                  Science Books{" "}
                </Link>
                <ul className="sub-menu right">
                  <li>
                    <Link
                      to={"/aditional-mathematic-books"}
                      className="dez-page"
                    >
                      Additional Maths
                    </Link>
                  </li>
                  <li>
                    <Link to={"/agriculture-books"} className="dez-page">
                      Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link to={"/biology-books"} className="dez-page">
                      Biology
                    </Link>
                  </li>
                  <li>
                    <Link to={"/chemistry-books"} className="dez-page">
                      Chemistry
                    </Link>
                  </li>
                  <li>
                    <Link to={"/physics-books"} className="dez-page">
                      Physics
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/computer-books"} className="dez-page">
                      Computer Science
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* artbook */}
              <li>
                <Link to={"#"}>Arts Books</Link>
                <ul className="sub-menu right">
                  <li>
                    <Link to={"/commerce-books"} className="dez-page">
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link to={"/cre-books"} className="dez-page">
                      C.R.E
                    </Link>
                  </li>
                  <li>
                    <Link to={"/geography-books"} className="dez-page">
                      Geography
                    </Link>
                  </li>
                  <li>
                    <Link to={"/history-books"} className="dez-page">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link to={"/literature-books"} className="dez-page">
                      Literature
                    </Link>
                  </li>
                  {/* 
                  <li>
                    <Link to={"/economics-books"} className="dez-page">
                      Economics
                    </Link>
                  </li>

                  <li>
                    <Link to={"/Fine-Art-books"} className="dez-page">
                      Fine-Art & Designs
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* Generalbooks */}
              
              <li>
                <Link to={"#"}>General books</Link>
                <ul className="sub-menu right">
                  <li>
                    <Link to={"/citizenship-books"} className="dez-page">
                      Citizenship
                    </Link>
                  </li>
                  <li>
                    <Link to={"/english-books"} className="dez-page">
                      English Language
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ict-books"} className="dez-page">
                      I.C.T
                    </Link>
                  </li>
                  <li>
                    <Link to={"/kiswahili-books"} className="dez-page">
                      Kiswahili
                    </Link>
                  </li>
                  <li>
                    <Link to={"/mathematics-books"} className="dez-page">
                      Mathematics
                    </Link>
                  </li>
                  {/* 
                  
                  <li>
                    <Link to={"/ire-books"} className="dez-page">
                      I.R.I
                    </Link>
                  </li>
                  <li>
                    <Link to={"/literature-books"} className="dez-page">
                      Literature
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link to={"/history-books"} className="dez-page">
                      History
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* primary school */}
              <li>
              <Link to={"/primary-school"} className="dez-page">Primary School</Link>

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
                <Link to={"/under-maintenance"} className="dez-page">
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
