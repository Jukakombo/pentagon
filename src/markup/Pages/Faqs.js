import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';

import Footer5 from './../Layout/footer5';
import PageTitle from './../Layout/PageTitle';
import AccordionBlog from './../Element/AccordionBlog';
import VideoPopup from './../Element/VideoPopup';

import bnr1 from './../../images/banner/bnr4.jpg';
import pattern from './../../images/pattern/pic1.jpg';
import about from './../../images/about/pic10.jpg';

const iconBlog = [
  {
    icon: <i className="flaticon-bar-chart" />,
    title: 'Make it Simple',
    text: 'Our School is a family-centered Parent Participation School that inspires children to discover their fullest potential on the road to life-long learning. Students, teachers and parents come together to form a community of learners.',
  },

  {
    icon: <i className="flaticon-trophy" />,
    title: 'Working together',
    text: 'We will take care of your child It is our responsibility as a school and as teachers to safeguard pupils and protect them against abduction and exploitation. We take interest in our children and listen to them and most importantly, make school premises a place of trust and support that fulfils your child’s needs',
  },
  {
    icon: <i className="flaticon-team" />,
    title: 'collaborate with parents',
    text: 'We have developed strategies to foster Parents and Family involvement in Jubilee Academy Nursery and Primary School. It is commonly acknowledged that one of the most important components of pupils achievement and success is parent involvement.',
  },
];

class Faqs extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
            style={{ backgroundImage: 'url(' + bnr1 + ')' }}
          >
            <PageTitle motherMenu="Faq's" activeMenu="Faq's" />
          </div>
          {/* <!-- inner page banner END --> */}
          {/* <!-- contact area --> */}
          <div className="content-block">
            {/* <!-- Your Faq --> */}
            <div
              className="section-full overlay-white-middle content-inner"
              style={{ backgroundImage: 'url(' + pattern + ')' }}
            >
              <div className="container">
                <div className="section-head text-black text-center">
                  <h3>Do you have Questions?</h3>
                  <div className="dlab-separator bg-primary"></div>
                  <p>Frequently Asked Questions</p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-b30">
                    <div className="faq-video">
                      <VideoPopup />
                      <img src={about} alt="" className="img-cover radius-sm" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 m-b30">
                    <AccordionBlog />
                  </div>
                </div>
                {/* <!-- Faq Info --> */}
                <div className="row">
                  {iconBlog.map((item, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                      <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                        <div className="icon-md text-primary m-b20">
                          <Link to={'#'} className="icon-cell">
                            {item.icon}
                          </Link>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            {item.title}
                          </h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <!-- Faq Info END --> */}
              </div>
            </div>
            {/* <!-- Your Faq End --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer5 />
      </>
    );
  }
}
export default Faqs;
