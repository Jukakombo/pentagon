import React, { useEffect, useState } from "react";
import Markup from "./markup/Markup";
import useScrollPosition from "use-scroll-position";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";
import "react-modal-video/css/modal-video.min.css";
import ClockLoader from "react-spinners/ClockLoader";
import ReactLoading from 'react-loading';
function App() {
  const [body_, setbody_] = useState();
  const [header, setHeader] = useState("fixed");
  const [header_, setHeader_] = useState();
  const [loading, setLoading] = useState(undefined);
  let scrollPosition = useScrollPosition();

  useEffect(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  useEffect(() => {
   
      setLoading(true);
     
     
  }, []);

  var element = document.getElementById("fix-header");

  if (typeof element != "undefined" && element != null) {
    header === "fixed" && scrollPosition > 10
      ? header_ && header_[0].classList.add("is-fixed")
      : header_ && header_[0].classList.remove("is-fixed");
  }
  return (
    <div className="App">
       {
        !loading ? (<ReactLoading type={"bars"} color={"blue"} height={367} width={175} />): (

      <Markup />
        )
       }
    </div>
  );
}

export default App;
