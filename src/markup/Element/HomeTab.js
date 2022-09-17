import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

//Images
import pic5 from './../../images/about/pic5.jpg';
import pic6 from './../../images/about/pic6.jpg';
import pic7 from './../../images/about/pic7.jpg';
import pic8 from './../../images/about/pic8.jpg';

function Para() {
  return (
    <>
      <div className="abuot-box p-lr30">
        <p>
          A well-rounded education is of paramount importance at Pentagon International College (PIC)
      . We guide all students to develop personal
          integrity and leadership skills, which they can draw from for the rest
          of their lives. We would love to help you understand the unique
          benefits that we have to offer at Pentagon International College (PIC) , where we encourage each child to develop as a confident and
          lifelong learner.
          <br /> Our qualified teachers have the ability to attend to every
          child according to the unique need, relentlessly making sure every
          child develops the desired ability to succeed.
        </p>
      </div>
    </>
  );
}

const HomeTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="dlab-tabs choseus-tabs">
          <ul
            className="nav row justify-content-center"
            id="myTab"
            role="tablist"
          >
            {/* <li>
							<a className= {classnames({ active : activeTab === '1' }) + ' className if avialble'}  onClick={() => { toggle('1'); }}	
							><span className="title-head">Pride in Excellent</span></a>
						</li> */}
            <li>
              <Link
                to={'#'}
                className={classnames({ active: activeTab === '1' }) + ''}
                onClick={() => {
                  toggle('1');
                }}
              >
                <span className="title-head">Pride in Excellent</span>
              </Link>
            </li>
            <li>
              <Link
                to={'#'}
                className={classnames({ active: activeTab === '2' }) + ''}
                onClick={() => {
                  toggle('2');
                }}
              >
                <span className="title-head">Flexible Engagement Models</span>
              </Link>
            </li>
            <li>
              <Link
                to={'#'}
                className={classnames({ active: activeTab === '3' }) + ''}
                onClick={() => {
                  toggle('3');
                }}
              >
                <span className="title-head">Expertization</span>
              </Link>
            </li>
            {/* <li>
              <Link
                to={'#'}
                className={classnames({ active: activeTab === '4' }) + ''}
                onClick={() => {
                  toggle('4');
                }}
              >
                <span className="title-head">Easy Learning</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="tab-content chosesus-content">
          <div id="cost" className="tab-pane active">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="row p-tb50">
                  <div className="col-lg-6 m-b10 col-md-4 about-img ">
                    <img src={pic5} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30 ">
                      <h4 className="font-weight-300">
                        Here are what students will benefit
                      </h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>
                            Your child will get the required educational
                            foundation in a safe and secure environment.                    
                          </span>
                        </li>
                        <li>
                          <span>
                            Your child will develop the core skills in literacy,
                            numeracy and a sense of orderliness.
                          </span>
                        </li>
                        <li>
                          <span>
                            Your child will be diligently supervised by
                            specialist tutors to harness his/her core
                            competencies
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Para />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about-img">
                    <img src={pic6} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30">
                      <h4 className="font-weight-300">Learning Based on Experience</h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>
                            Through Learning Based on Experience, your child gets to
                            Learning Based on Experience, have fun, and still learn any subjects . This method not only helps your child with
                            speech but enhances the essential skill of
                            communication.
                          </span>
                        </li>
                        <li>
                          <span>
                            Your child will get special reinforcement when
                            he/she is experiencing difficulties in achieving
                            satisfactory performance levels.
                          </span>
                        </li>
                        <li>
                          <span>
                            Your child will be guided to develop the behavioural
                            skills and self-awareness, required to enhance
                            self-esteem.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Para />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about-img">
                    <img src={pic7} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30">
                      <h4 className="font-weight-300">
                        Smooth Learning system
                      </h4>
                      <ul className="list-checked primary">
                        {/* <li>
                          <span>
                            Your child will be given the opportunity to learn
                            the basic foundation of a foreign language.
                          </span>
                        </li> */}
                        <li>
                          <span>
                            Your child will gain the solid foundation required
                            at this level, to ensure a smooth transition into
                            University.
                          </span>
                        </li>
                        {/* <li>
                          <span>
                            An experience of the natural environment is given to
                            help the child achieve harmony with nature.
                          </span>
                        </li> */}
                      </ul>
                    </div>
                    <Para />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="4">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about-img">
                    <img src={pic8} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    


                    <Para />
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HomeTab;
