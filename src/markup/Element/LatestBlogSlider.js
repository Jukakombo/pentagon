import React, {  useState, useEffect } from "react";
import moment from "moment"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { client, urlFor } from "../../sanityClient";
// import { client, urlFor } from "../../sanityClient";

//Everything is being fetch dynamically from database
// import pic1 from "./../../images/blog/grid/pic1.jpg";
// import pic2 from "./../../images/blog/grid/pic2.jpg";
// import pic3 from "./../../images/blog/grid/pic3.jpg";
// import pic4 from "./../../images/blog/grid/pic4.jpg";

// const contentBlog = [
//   {
//     images: pic1,
//     title:
//       "Juba proper Int. College will host online Seminar inter school debate",
//   },
//   {
//     images: pic2,
//     title: "Juba proper Int. College will be the best school next year",
//   },
//   {
//     images: pic3,
//     title: "Juba proper Int. College teachers will set exams from 11/12/2022.",
//   },
//   {
//     images: pic4,
//     title:
//       "Juba proper Int. College students are been informed to start paying their school fees",
//   },
//   {
//     images: pic2,
//     title: "Design a perfect website according to your need and desire",
//   },
// ];

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

function LatestBlogSlider() {
  const [schoolNews, setSchoolNews] = useState([]);
 
  useEffect(() => {
    const query = '*[ _type == "schoolNews"]';
    client.fetch(query).then((data) => {
      setSchoolNews(data);
    });
  }, []);

  var settings = {
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    dots: false,
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
        className="dots-style-center img-carousel owl-carousel owl-btn-center-lr owl-btn-3 "
        {...settings}
      >
        {schoolNews.slice(0).reverse().map((item, index) => (
          <div className="item p-3" key={item._id}>
            <div className="blog-post blog-grid blog-rounded blog-effect1">
              <div className="dlab-post-media dlab-img-effect ">
                 
                <Link to={`/news-details/${item._id}`}>
                  <img src={urlFor(item?.imageUrl)} alt="" />
                </Link> 
              </div>
              <div className="dlab-info p-a20 border-1">
                <div className="dlab-post-title ">
                  <h5 className="post-title font-weight-500">
                    <Link to={`/news-details/${item._id}`}>{item.title}</Link>
                  </h5>
                </div>
                <div className="dlab-post-meta ">
                  <ul>
                    <li className="post-date">
                      {" "}
                      <i className="fa fa-comments"></i>
                      <strong>{moment(item._createdAt).format("MMM Do YY")}</strong> {" "}
                    </li>
                    <li className="post-author">
                      <i className="fa fa-user"></i>By{" "}
                      <Link to={`/news-details/${item._id}`}>{item.author}</Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="dlab-post-text">
                  <p>
                    {item.newsDetails.substring(0,100)}...
                  </p>
                </div>
                <div className="dlab-post-readmore">
                  <Link
                    to={`/news-details/${item._id}`}
                    title="READ MORE"
                    rel="bookmark"
                    className="site-button-link black outline"
                  >
                    READ MORE
                    <i className="ti-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default LatestBlogSlider;
