import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer5 from './../../Layout/footer5';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';

//Images
import bnr5 from './../../../images/banner/bnr5.jpg';
// import bgmap from './../../../images/background/bg-map.jpg';
// import bg1 from './../../../images/background/bg1.jpg';

const iconBox = [
  {
    icon: <i className="flaticon-notebook" />,
    title: 'Curriculum',
    text: 'The curriculum is dynamic and modern, with the goal of challenging and inspiring students to be adaptable and flexible. The Curriculum is in line with the needs of students in South Sudan and the larger international community. It prepares students for the opportunities and experiences that come with living in a highly competitive environment and society.',
  },
  {
    icon: <i className="flaticon-pen" />,
    title: 'Co-curricular Activities ',
    text: 'Extracurricular activities are extremely important to us. All students are encouraged to participate in school clubs such as music, debate, football, and other safe outdoor and indoor games.',
  },
  {
    icon: <i className="flaticon-bar-chart" />,
    title: 'Responsibility',
    text: 'Knowing that students are our most valuable assets, we use a variety of tested techniques to develop responsible citizens in our students.',
  },
  {
    icon: <i className="flaticon-file" />,
    title: 'High Morals',
    text: 'We instill in them moral principles like integrity, fidelity, respect, patience, kindness, gratitude, forgiving, personal accountability, and courtesy.',
  },
  {
    icon: <i className="flaticon-devices" />,
    title: 'E-Library',
    text: 'We create a fun, free online library for all of our students with all of the school books and exercices of South Sudan syllabus that can only be accessed by our students using their school e-mail and password, which we provide to all of our students.. ',
  },
  
];

class Service extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: 'url(' + bnr5 + ')' }}
          >
            <PageTitle motherMenu="Our Services" activeMenu="Our Services" />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full content-inner">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">Our Services</h4>
                  <h2 className="box-title m-tb0">
                    We focus on quality Education
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    At Pentagon International Modern Mixed Secondary School we provide a
                    happy, caring and safe environment for our students. We work
                    very hard to ensure that your child's experience of school
                    is a positive one, which encourages a love of learning and
                    self-discipline from the very start.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  {iconBox.map((data, index) => (
                    <div className="col-md-4 col-sm-6 m-b30 " key={index}>
                      <div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                        <div className="icon-lg m-b20">
                          {' '}
                          <Link to={'#'} className="icon-cell">
                            {data.icon}
                          </Link>{' '}
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            <Link to={'#'}>{data.title}</Link>
                          </h5>
                          <p>{data.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            <SectionCounter />
            {/* <!-- Why Chose Us End --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer5 />
      </>
    );
  }
}
export default Service;
