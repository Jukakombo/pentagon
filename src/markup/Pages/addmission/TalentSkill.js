import React from "react";
import bg19 from "./../../../images/addmission/watermark.png";

function TalentSkill() {
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
      <h5 style={{ textDecoration: "underline" }}>
        TALENT AND SKILLS DEVELOPMENT{" "}
      </h5>
      <h5>Clubs</h5>

      <h6>1. Educate Club</h6>
      <h6>2. Interact Club</h6>
      <h6>3. Chess Club </h6>
      <h6>4. Debate Club</h6>

      <h6>These clubs shall perform the following:</h6>
      <p>
        Music, Dance and Drama (MDD), Science Experiments, Agricultural
        Products, Arts and Designs, Prom Day, Fashion Show/Modelling, Football,
        Netball, Debate, Athletics etc.
      </p>

      <p>
        Each House is headed by a Patron or Matron who will be appointed by the
        principal based on experiences and skills.
      </p>
      <h5 style={{ textDecoration: "underline" }}>Roles of each club.</h5>
      <h6>1. INTERACT CLUB</h6>
      <p>
        Visit hospitals, clean the main roads and participate in fund raising.{" "}
      </p>
      <h6>2. CHESS CLUB </h6>
      <p>Participate in chess games</p>
      <h6>3. DEBATE CLUD </h6>
      <p>
        Participate in making liquid soap, juice, agricultural produce
        (Entrepreneurship) etc.{" "}
      </p>
      <h5>THE SCHOOL SHALL HAVE THE FOLLOWING DAYS FOR EVENTS </h5>
      <h6>1. Open Day </h6>
      <p>This includes inviting some successful business people, professional Lawyers, 
Doctors, Journalists and many others.</p>
<h6>2. Ready to work Day </h6>
<p>Parents visit the school to see activities carried out by the students.</p>
<h6>3. Pentagon International Modern Mixed Secondary School – Juba Day </h6>
<p>It shall be celebrated simultaneously with the birthday of the founder.</p>
<h6>4. Awards </h6>
<p>The competitions shall be organized according to the Houses. The winner (House)
will <span className="nb">WALK AWAY</span> with a bull to roast at school compound.
</p>
    </div>
  );
}

export default TalentSkill;
