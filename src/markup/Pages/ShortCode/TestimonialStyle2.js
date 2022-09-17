import React, { Component } from "react";
import Slider from "react-slick";

//Images
import pic1 from "./../../../images/testimonials/pic1.jpg";
import pic2 from "./../../../images/testimonials/pic2.jpg";
import pic3 from "./../../../images/testimonials/pic3.jpg";

const contentBlog = [
  { images: pic1 },
  { images: pic2 },
  { images: pic3 },
  { images: pic2 },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next flaticon-right-arrow" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className=" owl-prev flaticon-left-arrow"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

class TestimonialStyle2 extends Component {
  render() {
    var settings = {
      arrows: true,
      slidesToShow: 3,
      infinite: true,
      dots: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider
          className="dots-style-center owl-btn-center-lr testimonial-box   owl-btn-3 btn-white owl-dots-black-full "
          {...settings}
        >
          {contentBlog.map((item, index) => (
            <div className="item p-a5 p-3" key={index}>
              <div className="testimonial-9">
                <div className="testimonial-pic radius style1">
                  <img src={item.images} width="100" height="100" alt="" />
                </div>
                <div className="m-b0">
                  <p>
                  Pentagon International College (PIC)is one of the best schools
                    in the South Sudan.It has a serene learning environment, outstanding
                    facilities, well qualified teachers, and proper management
                    in place. If you want your child to progress well, They have
                    all received certification through the new learning system.
                    I strongly recommend it.
                  </p>
                </div>
                <div className="testimonial-detail">
                  {" "}
                  <strong className="testimonial-name">
                    Alison De Best (parent)
                  </strong>{" "}
                  <span className="testimonial-position"></span>{" "}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}

export default TestimonialStyle2;
