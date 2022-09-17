import React from "react";
import PageTitle from "../../Layout/PageTitle";
import Header from "./../../Layout/Header1";
import bnr from "./../../../images/banner/bnr3.jpg";
import Footer5 from "./../../Layout/footer5";
import { useLocation } from "react-router-dom";
import Chemistry from "./ChemistryBooks";
import Maths from "./Maths";
import Biology from "./Biology";
import Cre from "./Cre";
import Literature from "./Literature";
import English from "./English";
import AdditionalMaths from "./AdditionalMaths";
import Physics from "./Physics";
import Citizenship from "./Citizenship";
import Geography from "./Geography";
import History from "./History";
import Ict from "./Ict";
import Kiswahili from "./Kiswahili";
import PrimarySchool from "./PrimarySchool";
import Agriculture from "./Agriculture";
import Commerce from "./Commerce";

function LibraryBooks() {
  const location = useLocation();

  switch (location.pathname) {
    case "/e-library":
      return (
        <>
          <Header />
          <div
            className="dlab-bnr-inr overlay-primary bg-pt"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <PageTitle motherMenu="E-Library" activeMenu="Books" />
          </div>

          <Footer5 />
        </>
      );
    //   case Science book
    case "/chemistry-books":
      return <Chemistry />;
    //   case Science book
    case "/physics-books":
      return <Physics />; //   case Science book
    case "/commerce-books":
      return <Commerce />; //   case Science book
    case "/computer-books":
      return <Chemistry />; //   case Science book
    case "/agriculture-books":
      return <Agriculture />; //   case Science book
    case "/biology-books":
      return <Biology />; //   case Science book
    case "/economics-books":
      return <Chemistry />; //   case Science book
    case "/geography-books":
      return <Geography />; //   case Science book
    case "/Fine-Art-books":
      return <Chemistry />; //   case Science book
    case "/aditional-mathematic-books":
      return <AdditionalMaths />; //   case Science book
    case "/literature-books":
      return <Literature />;
      case "/kiswahili-books":
        return <Kiswahili />;
        case "/ict-books":
      return <Ict />;
    case "/history-books":
      return <History />;
    case "/english-books":
      return <English />;
    case "/cre-books":
      return <Cre />;
    case "/citizenship-books":
      return <Citizenship />;
    case "/ire-books":
      return <Chemistry />;
      case "/primary-school":
        return <PrimarySchool />;

    //   case maths book
    case "/mathematics-books":
      return <Maths />;
    // default case
    default:
      return "/e-library";
  }
}

export default LibraryBooks;
