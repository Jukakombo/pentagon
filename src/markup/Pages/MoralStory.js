import React from "react";
import Header from "./../Layout/Header1";
import bnr from "./../../images/banner/bnr9.jpg";
import services1 from "./../../images/our-services/pic6.jpg";

import Footer5 from "./../Layout/footer5";
import PageTitle from "../Layout/PageTitle";

function MoralStory() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <PageTitle motherMenu="Moral Story" activeMenu="Stories Zone" />
        </div>

        <div className="container">
          <div className="section-head text-center">
            <h2 className="box-title m-tb0 mt20">
              MORAL LESSON
              <span className="bg-primary"></span>
            </h2>
            <p>
              {/* {" "}
              Learning hand in hand – partners in education. Our aim is to set
              high standards and expectations to help all members of the school
              community to achieve the best among all in everything they do and
              to work towards reaching their full potential. */}
            </p>
          </div>
          <div className=" row dzseth  m-b30">
            <div className="col-lg-6 col-md-12 m-b30 about-img ">
              <img src={services1} data-tilt alt="" />
            </div>
            <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
              <div className="dis-tbl-cell">
                <p className="font-16">
                  Long-time ago in the Animal kingdom, a sheep was passing and
                  saw a lion crying inside a cage trapped and the lion begged
                  the sheep to save him with a promise not to kill and eat it
                  but the sheep refused. After much persuasion and for the
                  sheep’s gullibility it opened the cage for the lion.
                </p>
                Now the lion was very hungry having stayed in the cage for days
                without food. It quickly grabbed the sheep to kill and eat but
                the sheep reminded him of his promise. They were still arguing
                when other animals came passing and they sought to know what
                happened. Both the lion and the sheep narrated their own side of
                the story but because of fear and in trying to gain Favour in
                the sight of the lion, all the animals took side with the lion
                except the Tortoise who claim not to understand the whole
                scenario.
                <p className="font-16">
                  Now the Tortoise asked the lion to show them where he was
                  before the sheep rescued him.
                </p>
              </div>
            </div>
            <p>
              The lion pointed at the cage. The tortoise asked again, “Were you
              inside or outside when the sheep arrived”? The lion said he was
              inside. The tortoise again said, “ok, enter let’s see how
              difficult it could be inside”. The lion entered and the tortoise
              locked him back inside. In amazement, the other animals asked
              tortoise “why” and he replied “if we allow him to eat the sheep
              today, he will still go hungry tomorrow and we don’t know the next
              amongst us to be eaten tomorrow.
            </p>
            <p>The Moral of this tale:</p> <br />
            <h5>
              DON’T SUPPORT EVIL TODAY BECAUSE IT DOESN’T AFFECT YOU DIRECTLY,
              TOMORROW IT COULD BE YOUR TURN.
            </h5>
          </div>
        </div>
      </div>
      <Footer5 />
    </>
  );
}

export default MoralStory;
