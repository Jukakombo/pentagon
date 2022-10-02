import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import moment from "moment";
 
import LoadingCircle from "./Loading";
 
import axios from "axios";

//Images
// import pic1 from "./../../images/blog/grid/pic1.jpg";
// import pic2 from "./../../images/blog/grid/pic2.jpg";
// import pic3 from "./../../images/blog/grid/pic3.jpg";
// import pic4 from "./../../images/blog/grid/pic4.jpg";

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

function ScienceAndTechNews() {
  const [scienceNews, setScienceNews] = useState([]);
 console.log(scienceNews) 
 const options = {
  method: 'GET',
  url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
  params: {q: 'covid', lang: 'en', sort_by: 'date', media: 'True'},
  headers: {
    'X-RapidAPI-Key': '8656d56e67mshc1d0d88932ef302p1813b9jsn0a3163c87fba',
    'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	setScienceNews(response.data);
}).catch(function (error) {
	console.error(error);
});

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

  return !scienceNews?.articles.length ? (
    <LoadingCircle />
  ) : (
    <>
      <Slider
        className="dots-style-center img-carousel owl-carousel owl-btn-center-lr owl-btn-3 "
        {...settings}
      >
        {scienceNews?.articles.map((news, index) => (
          <div className="item p-3" key={index}>
            <div className="blog-post blog-grid blog-rounded blog-effect1">
              <div className="dlab-post-media dlab-img-effect ">
                <Link to={"#"}>
                  <img src={news?.urlToImage} alt="news_image" />
                </Link>
              </div>
              <div className="dlab-info p-a20 border-1">
                <div className="dlab-post-title ">
                  <h5 className="post-title font-weight-500">
                    <Link to={"#"}>{news?.title}</Link>
                     
                  </h5>
                </div>
                <div className="dlab-post-meta ">
                  <ul>
                    <li className="post-date">
                      {" "}
                      <i className="fa fa-comments"></i>
                      {/* <strong>{moment().fromNow()}</strong>{" "} */}
                      <span>
                        {" "}
                        {moment(news.publishedAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </span>{" "}
                    </li>
                    <li className="post-author">
                      <i className="fa fa-user"></i>By:&nbsp;{" "}
                      <Link to={"#"}>{news.author}</Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="dlab-post-text">
                  <p>{news?.description.substring(0, 100)} ...</p>
                </div>
                <div className="dlab-post-readmore">
                  <Link
                    to={`/blog-details/{news.source.id}`}
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

export default ScienceAndTechNews;
