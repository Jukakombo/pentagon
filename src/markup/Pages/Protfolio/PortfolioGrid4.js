import React, { Component, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/footer5';
import PageTitle from './../../Layout/PageTitle';

//images
import bnr1 from './../../../images/banner/bnr8.jpg';
 
import { useState } from 'react';
import { client } from '../../../sanityClient';
 

//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  
  return (
    <Link
      to={'#'}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link portfolio-fullscreen"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  );
};

class PortfolioGrid4 extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          {/*  banner  */}
          <div
            className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
            style={{ backgroundImage: 'url(' + bnr1 + ')' }}
          >
            <PageTitle
              motherMenu="Browse Our Gallery"
              activeMenu="Beautiful Photos"
            />
          </div>
          {/*  Section-1 Start  */}
          <div className="content-block">
            <div className="section-full content-inner-2 portfolio text-uppercase">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="sticky-top">
                      <h3>Our Mission</h3>
                      <ul className="list-check primary">
                        <li>Declare war on illiteracy in our beloved Country, The Republic of South Sudan and beyond</li>
                        <li>To provide a sophisticated high quality class of education to the coming generations in order to embrace humanity around the world and build our Nation’s shining future to last.</li>
                         
                         
                      </ul>
                      <h3>Core Values</h3>
                      <ul className="list-check primary">
                        <li>Accountability </li>
                        <li>Appreciation </li>
                        <li>Cooperation </li>
                        <li>Critical Thinking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <GalleryGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

function GalleryGrid() {
  const [gallery , setGallery]= useState([])
  useEffect(() => {
    client
      .fetch(
        `*[_type=="gallery"]{
      name, hastag,_id, imageUrl{
        asset -> {
          _id,
          url
        }, alt
      },
      author
    }`
      )
      .then((data) => {
        setGallery(data);
      });
  }, []);
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <ul className="row dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
            {gallery.map((item,) => (
              <li
                className="web design card-container col-lg-4 col-md-6 col-sm-6 p-a0"
                key={item._id}
              >
                <div className="dlab-box dlab-gallery-box">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                    <img src={item?.imageUrl?.asset?.url} alt="" />
                    <div className="overlay-bx">
                      <div className="overlay-icon align-b text-white text-left">
                        <div className="text-white text-left port-box">
                          <h5>{item?.name}</h5>
                          <p>{item?.hastag}</p>
                          <Iconimage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}
export { GalleryGrid };
export default PortfolioGrid4;
