import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ThemeButton from "./Element/ThemeButton/ThemeButton";
import StudentDashboard from "./Pages/dashboar-student/students-dashboard/StudentDashboard.jsx";
import Index2 from "./Pages/Index2";
import Index3 from "./Pages/Index3";
import Index4 from "./Pages/Index4";
import Index5 from "./Pages/Index5";
import Index6 from "./Pages/Index6";
import Index7 from "./Pages/Index7";
import Aboutus1 from "./Pages/Aboutus/Aboutus1";
import Aboutus2 from "./Pages/Aboutus/Aboutus2";
import Error403 from "./Pages/Error/Error403";
import Error404 from "./Pages/Error/Error404";
import Error405 from "./Pages/Error/Error405";
import ComingSoon1 from "./Pages/ComingSoon/ComingSoon1";
import UnderMaintenance from "./Pages/UnderMaintenance";
import Expertise from "./Pages/Expertise";
import ProjectManagement from "./Pages/ProjectManagement";
import OurProjects from "./Pages/OurProjects";
import ProjectDetails from "./Pages/ProjectDetails";
import Team from "./Pages/Team";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service/Service";
import ServicesDetails from "./Pages/Service/ServicesDetails";
import BlogStandard from "./Pages/BlogStandard/BlogStandard";
import BlogStandardLeftSidebar from "./Pages/BlogStandard/BlogStandardLeftSidebar";
import BlogStandardRightSidebar from "./Pages/BlogStandard/BlogStandardRightSidebar";
import BlogClassicGrid from "./Pages/BlogClassic/BlogClassicGrid";
import BlogClassicLeftSidebar from "./Pages/BlogClassic/BlogClassicLeftSidebar";
import BlogClassicRightSidebar from "./Pages/BlogClassic/BlogClassicRightSidebar";
import BlogListLeftSidebar from "./Pages/BlogList/BlogListLeftSidebar";
import BlogListRightSidebar from "./Pages/BlogList/BlogListRightSidebar";
import BlogDetails from "./Pages/BlogDetail/BlogDetails";
import ProtfolioFullWidth from "./Pages/Protfolio/ProtfolioFullWidth";
import PortfolioGrid2 from "./Pages/Protfolio/PortfolioGrid2";
import PortfolioGrid3 from "./Pages/Protfolio/PortfolioGrid3";
import PortfolioGrid4 from "./Pages/Protfolio/PortfolioGrid4";
import ShopColumns from "./Pages/Shop/ShopColumns";
import ShopColumnsSidebar from "./Pages/Shop/ShopColumnsSidebar";

import ShopCart from "./Pages/Shop/ShopCart";
import ShopCheckout from "./Pages/Shop/ShopCheckout";
import ShopProductDetails from "./Pages/Shop/ShopProductDetails";

import ShopWishlist from "./Pages/Shop/ShopWishlist";
import ShopLogin from "./Pages/Shop/ShopLogin";
import ShopRegister from "./Pages/Shop/ShopRegister";

import ShortIconBox from "./Pages/ShortCode/ShortIconBox";
import ShortCounter from "./Pages/ShortCode/ShortCounter";
import ShortPortfolio from "./Pages/ShortCode/ShortPortfolio";
import ShortTabs from "./Pages/ShortCode/ShortTabs";
import ShortTeam from "./Pages/ShortCode/ShortTeam";
import ShortTestimonial from "./Pages/ShortCode/ShortTestimonial";
import ShortForm from "./Pages/ShortCode/ShortForm";
import ShortAccordions from "./Pages/ShortCode/ShortAccordions";

import ScrollToTop from "./Element/ScrollToTop";
import Dashboard from "./Pages/dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { getContacts } from "../actions/contacts";
import { getNews } from "../actions/news";
import SignInSide from "./Pages/dashboar-student/SignInSide";
import ScienceAndTechnology from "./Pages/school-news/ScienceAndTechnology";
import StudentArticles from "./Pages/school-news/StudentArticles";
import LibraryBooks from "./Pages/library/LibraryBooks";
import TeacherForm from "./Pages/TeacherForm";
import StudentForm from "./Pages/StudentForm";
import TermsAndCondition from "./Pages/TermsAndCondition";
import TeacherDashboard from "./Pages/teacherDashboard/TeacherDashboard";
import TeacherSignUp from "./Pages/TeacherSignUp";
import TeacherLogin from "./Pages/TeacherLogin";
import StudentList from "./Pages/teacherDashboard/elements/StudentList";
import Kanban from "./Pages/teacherDashboard/elements/Kaban";
import Editor from "./Pages/teacherDashboard/elements/Editor";
import Calendar from "./Pages/teacherDashboard/elements/Calendar";
import ColorPicker from "./Pages/teacherDashboard/elements/ColorPicker";
import Chart from "./Pages/dashboar-student/students-dashboard/Cart";
import CodeOfConduct from "./Pages/CodeOfConduct";
import MoralStory from "./Pages/MoralStory";
import AdmissionFiles from "./Pages/AdmissionFiles";
import PrintOut from "./Pages/PrintOut";
import ExamTimeTable from "./Pages/addmission/ExamTimeTable";
 
// import PrintOut from "./Pages/PrintOut";

function Markup() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="page-wraper">
        <Switch>
          <Route path="/" exact component={Index6} />
          <Route path="/index-2" exact component={Index2} />
          <Route path="/index-3" exact component={Index3} />
          <Route path="/index-4" exact component={Index4} />
          <Route path="/index-5" exact component={Index5} />
          <Route path="/index-6" exact component={Index6} />
          <Route path="/index-7" exact component={Index7} />
          <Route path="/about-1" exact component={Aboutus1} />
          <Route path="/about-2" exact component={Aboutus2} />
          <Route path="/error-403" exact component={Error403} />
          <Route path="/error-404" exact component={Error404} />
          <Route path="/error-405" exact component={Error405} />
          <Route path="/coming-soon-1" exact component={ComingSoon1} />
          <Route path="/under-maintenance" exact component={UnderMaintenance} />
          <Route path="/expertise" exact component={Expertise} />
          <Route
            path="/project-management"
            exact
            component={ProjectManagement}
          />
          <Route path="/our-projects" exact component={OurProjects} />
          <Route path="/project-details" exact component={ProjectDetails} />
          <Route path="/team" exact component={Team} />
          <Route path="/faqs" exact component={Faqs} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/service" exact component={Service} />
          <Route path="/services-details" exact component={ServicesDetails} />
          <Route path="/blog-standard" exact component={BlogStandard} />
          <Route
            path="/blog-standard-left-sidebar"
            exact
            component={BlogStandardLeftSidebar}
          />
          <Route
            path="/blog-standard-right-sidebar"
            exact
            component={BlogStandardRightSidebar}
          />
          <Route path="/blog-classic-grid" exact component={BlogClassicGrid} />
          <Route
            path="/blog-classic-left-sidebar"
            exact
            component={BlogClassicLeftSidebar}
          />
          <Route
            path="/blog-classic-right-sidebar"
            exact
            component={BlogClassicRightSidebar}
          />
          <Route
            path="/blog-list-left-sidebar"
            exact
            component={BlogListLeftSidebar}
          />
          <Route
            path="/blog-list-right-sidebar"
            exact
            component={BlogListRightSidebar}
          />

          <Route
            path="/portfolio-full-width"
            exact
            component={ProtfolioFullWidth}
          />
          <Route path="/portfolio-grid-2" exact component={PortfolioGrid2} />
          <Route path="/portfolio-grid-3" exact component={PortfolioGrid3} />
          <Route path="/portfolio-grid-4" exact component={PortfolioGrid4} />
          <Route path="/shop-columns" exact component={ShopColumns} />
          <Route
            path="/shop-columns-sidebar"
            exact
            component={ShopColumnsSidebar}
          />

          <Route path="/shop-cart" exact component={ShopCart} />
          <Route path="/shop-checkout" exact component={ShopCheckout} />
          <Route
            path="/shop-product-details"
            exact
            component={ShopProductDetails}
          />
          <Route path="/shop-wishlist" exact component={ShopWishlist} />
          <Route path="/shop-login" exact component={ShopLogin} />
          <Route path="/shop-register" exact component={ShopRegister} />

          <Route path="/short-icon-box" exact component={ShortIconBox} />
          <Route path="/short-counter" exact component={ShortCounter} />
          <Route path="/short-portfolio" exact component={ShortPortfolio} />
          <Route path="/short-tabs" exact component={ShortTabs} />
          <Route path="/short-team" exact component={ShortTeam} />
          <Route path="/short-testimonial" exact component={ShortTestimonial} />

          <Route path="/short-form" exact component={ShortForm} />
          <Route
            path="/science-and-technology"
            exact
            component={ScienceAndTechnology}
          />

          <Route path="/short-accordions" exact component={ShortAccordions} />

          <Route
            exact
            path={[
              "/students",
              "/notification",

              "/dashboard",
              "/arts-books",
              "/science-books",
              "/time-table",
              "/senior-1",
              "/senior-2",
              "/senior-3",
              "/senior-4",
              "/library",
              "/past-exam",
              "/student-registration",
              "/s1-form",
              "/s2-form",
              "/s3-form",
              "/s4-form",
              "/training-form",
              "/work-shop",
            ]}
          >
            <Dashboard />
          </Route>

          <Route
            exact
            path={[
              "/register",
              "/library",
              "/request",
              "/time-Table",
              "/profile",
              "/profile",
              "/information-service",
              "/lesson",
              "/re-registration",
            ]}
          >
            <StudentDashboard />
          </Route>
          <Route path="/terms-condition">
            <TermsAndCondition />
          </Route>
          <Route exact path="/exam-timetable">
            <ExamTimeTable />
          </Route>
          
          <Route
            exact
            path={[
              "/chemistry-books",
              "/physics-books",
              "/computer-books",
              "/agriculture-books",
              "/biology-books",
              "/aditional-mathematic-books",
              "/economics-books",
              "/commerce-books",
              "/geography-books",
              "/Fine-Art-books",
              "/literature-books",
              // "/primary-school",
              "/history-books",
              "/mathematics-books",
              "/cre-books",
              "/citizenship-books",
              "/ire-books",
              "/english-books",
              "/ict-books",
              "/kiswahili-books",
              "/e-library",
            ]}
          >
            <LibraryBooks />
          </Route>
          <Route path="/teacher-registration-form" component={TeacherForm} />
          <Route path="/student-registration-form" component={StudentForm} />

          <Route
            exact
            path="/login"
            component={() => (!user ? <Login /> : <Redirect to="/dashboard" />)}
          />

          <Route
            path="/sign-in-sudent-dashboard"
            exact
            component={SignInSide}
          />

          <Route
            exact
            path={[
              "/teacherDashboard",
              "/contact-zone",
              "/student-list",
              "/inbox",
              "/teacherExamTimeTable",
              "/compose",
              "/scienceBooks",
              "/libraryBooks",
              "/libraryBooks",
              "/artsBooks",
            ]}
          >
            <TeacherDashboard />
          </Route>
          <Route exact path="/teacher-sign-up">
            <TeacherSignUp />
          </Route>

          <Route exact path="/teacher-login">
            <TeacherLogin />
          </Route>
          <Route exact path="/students-list">
            <TeacherDashboard />
          </Route>
          <Route exact path="/Kanban-board">
            <Kanban />
          </Route>
          <Route exact path="/code-of-conduct">
            <CodeOfConduct />
          </Route>

          <Route exact path="/editor">
            <Editor />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/color-picker">
            <ColorPicker />
          </Route>
          <Route exact path="/chart">
            <Chart />
          </Route>
          <Route exact path="/moral-story">
            <MoralStory />
          </Route>
          <Route exact path="/admission-file">
            <AdmissionFiles />
          </Route>
          <Route exact path="/print-Form">
            <PrintOut />
          </Route>
          <Route path="/students-articles" exact component={StudentArticles} />
          <Route exact path="/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
      <ScrollToTop />
      <ThemeButton />
    </BrowserRouter>
  );
}

export default Markup;
