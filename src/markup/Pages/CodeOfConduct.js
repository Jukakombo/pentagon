import React from "react";
import Header from "./../Layout/Header1";
import Footer5 from "./../Layout/footer5";
import bgimg from "./../../images/background/bg2.jpg";
import PageTitle from "../Layout/PageTitle";

function CodeOfConduct() {
  return (
    <>
      <Header />
      <div className="full-section">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark contact-page"
          style={{ backgroundImage: "url(" + bgimg + ")" }}
        >
          <PageTitle
            motherMenu="Rules/Regulation"
            activeMenu="Code of Conduct"
          />
        </div>
        <div className="container">
          <h3 style={{ textDecoration: "underline" }}>
            SCHOOL RULES AND REGULATIONS
          </h3>
          <p>
            The managing body aspires that the school runs its affairs
            professionally and be guided with the policies of the Ministry of
            Education presently in work. Thus, with this hope in minds and
            heart, the managing body have passed and endorsed the below rules
            and regulations to be strictly followed by every student at all
            time.
          </p>
          <p>
            RULE (01): Morning prayers are compulsory. Every student must attend
            in person.
          </p>
          <p>
            RULE (02): Student must respect the teachers, non-teaching staff and
            any elder on the compound and outside. If any student is found in
            such act of disobedience, he/she shall be summoned before the
            disciplinary committee and if found guilty he/she shall be
            suspended for one week to report back with parents. If the child
            continues with such undesired behavior, he/she shall be dismissed
            indefinitely
          </p>
          <p>
            RULE: (03): English language must be the only language use at all
            times, except during class hours of Arabic and Kiswahili. Any
            student who is found using another language apart from the above
            said ones shall be punished or suspended.
          </p>
          <p>
            RULE (04): Use of vulgar language, promotion of tribalism, clannism,
            religious sectarianism, racial discrimination, intimidation and
            bullying are strictly prohibited. Any student that is found using
            any of the above or all of the above shall be summoned before
            disciplinary committee who shall waste no time but issue a letter of
            suspension for two weeks. He/she shall return to school with parents
            and if found guilty, he/she shall be dismissed indefinitely.
          </p>
          <p>
            RULE (05): Smoking Bhang, cigarettes and any other form of drugs
            abuse such as drinking alcohol, cocaine, marijuana, marungi and
            fighting are strictly prohibited. Any student who involves in such
            said ACTS above shall be dismissed indefinitely.
          </p>
          <p>
            RULE (06): Students are to remain smart in their school attires
            during school hours. Maintain their finger nails short, boy have to
            keep their hair shaved and smart while girls are to plait their hair
            and maintain them neat without adding artificial hair. Boys must
            maintain their trousers in normal sizes. No student is allowed to
            wear skinned tied trouser known as{" "}
            <strong className="text-red">“SUWEK”</strong> or keep the trousers
            short known as{" "}
            <strong className="text-red">“DON’T TOUCH MY SHOE”</strong>. Any
            student with the above or with any of the above behaviors shall be
            sent home immediately and to report back with parents.
          </p>
          <p>
            RULE (07): Theft, gambling, destruction of school property, writing
            on the walls are strictly prohibited. In case of destruction of
            school property, parents shall be asking to replace the destroyed
            property, repaint the writing on the walls and if the student is
            found stealing gambling, he/she shall be summoned before the
            disciplinary committee and be suspended for two weeks. The student
            can report back to the school with his/her parents for hearing. If
            found guilty, he/she shall be dismissed indefinitely.
          </p>
          <p>
            RULE (08): smart phones or any other phones, guns tape recorders,
            cameras radios, ipad, knives, CD players are strictly prohibited.
            <span className="text-red">
              ONCE CAUGHT FROM ANY STUDENT ARE NOT RETURNABLE
            </span>
            , if the student resists, he/she shall be given the property back
            and shall immediately be dismissed indefinitely in front of their
            parents. Laptops are accepted for ICT lessons{" "}
            <span className="text-red">
              (NO TEACHER IS ALLOWED TO USED CONSFICATED ITEMS MENTIONED ABOVE)
            </span>
            . If aby items above is confiscated by a teacher from the student,
            such teacher should hand it to the disciplinary chairperson who will
            in turn hand it to the principal after the case/decision has been
            heard from the owner of the items.
          </p>
          <p>
            RULE (09): Parents are only allowed to talk to their children after
            obtaining permission from relevant school authority. Failure to
            adhere to this, the parent(s) shall be kindly asked to take his/her
            child home for good.
          </p>
          <p>
            RULE (10) Fulfillment of all the school’s dues shall be a
            pre-condition for the student’s entrance to the class.
          </p>
          <p>
            RULE (11) Departure from the school premises during school hours has
            to be approved by teacher on duty or any other relevant authorized
            personnel.
          </p>
          <p>
            RULE (12): Communal work is compulsory to all students. Any student
            who refuses shall be punished.
          </p>
          <p>
            RULE (13): All students are to participate in all the school
            functions without discrimination.
          </p>
          <p>
            RULE (14): Any student that absent him/herself from the school
            without proper reasons shall to punished by the teacher concerned
          </p>
        </div>
      </div>

      <Footer5 />
    </>
  );
}

export default CodeOfConduct;
