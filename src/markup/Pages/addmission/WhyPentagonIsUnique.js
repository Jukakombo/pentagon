import React from "react";
import bg19 from "./../../../images/addmission/watermark.png";

function WhyPentagonIsUnique() {
  return (
    <div
      style={{
        backgroundImage: "url(" + bg19 + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "40%",
        backgroundPosition: "center",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <h5>
        WHY PENTAGON INTERNATIONAL MODERN MIXED SECONDARY SCHOOL IS UNIQUE?
      </h5>
      <p>
        The teaching staff is queerly structured: where other schools have
        department, (P.I.C) instead has faculties in which every teacher has to
        belong basing on what subject they teach.
      </p>
      <p>These include:</p>
      <h6>1. Faculty of Communication</h6>
      <p>
        This covers subjects such as English Language, Literature in English,
        Fine Arts, Music, Kiswahili, and Literacy. This is headed by a Dean who
        will be appointed by the Principal.
      </p>
      <h6>2. Faculty of Humanities</h6>
      <p>
        This covers subjects such as History, Geography, C.R.E, and Citizenship.
        It is also headed by a Dean.
      </p>
      <h6>3. Faculty of Mathematics and Business</h6>
      <p>
        This covers subjects such as Mathematics, Commerce, Accounts, and
        Entrepreneurship. It is headed by a Dean.
      </p>
      <h6>4. Faculty of Science and Technology</h6>
      <p>
        This includes subjects such as Biology, Chemistry, Physics, Agriculture,
        and Information Technology (I.T) or (I.C.T). It is again headed by a
        Dean.
      </p>
    </div>
  );
}

export default WhyPentagonIsUnique;
