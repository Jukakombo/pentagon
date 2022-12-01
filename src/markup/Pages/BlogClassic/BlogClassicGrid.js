import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Masonry from "react-masonry-component";
import Header from "./../../Layout/Header1";
import Footer from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";

//Images
import bnr1 from "./../../../images/banner/bnr8.jpg";
import grid1 from "./../../../images/blog/grid/pic1.jpg";
import grid2 from "./../../../images/blog/grid/pic2.jpg";
import grid3 from "./../../../images/blog/grid/pic3.jpg";
import grid4 from "./../../../images/blog/grid/pic4.jpg";
import { client } from "../../../sanityClient";
import moment from "moment";

const postBlog = [
  { images: grid1 },
  { images: grid2 },
  { images: grid3 },
  { images: grid4 },
  { images: grid1 },
  { images: grid2 },
];

// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };
// Masonry section end

function BlogClassicGrid() {
  const { id } = useParams();

  const [articles, setarticles] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="studentsArticles"]{
		title, body, imageUrl{
		  asset -> {
			_id,
			url
		  }, alt
		},
		author,_id
	  }`
      )
      .then((data) => {
        setarticles(data);
      });
  }, [id]);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle
            motherMenu="Student's Articles"
            activeMenu="Express Yourself via Articles"
          />
        </div>
        <div className="content-area">
          <div className="container">
            <div className="dlab-blog-grid-3 " id="masonry">
              {articles.length > 0 ? (
                <Masonry
                  className={"my-gallery-class"} // default ''
                  options={masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
                  updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                  imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                  {articles.map((data, index) => (
                    <div
                      className="post card-container col-lg-4 col-md-6 col-sm-12 col-xs-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid blog-rounded blog-effect1">
                        <div className="dlab-post-media dlab-img-effect ">
                          <Link to={"#"}>
                            <img src={data?.imageUrl?.asset?.url} alt="" />
                          </Link>{" "}
                        </div>
                        <div className="dlab-info p-a20 border-1">
                          <div className="dlab-post-title ">
                            <h4 className="post-title">
                              <Link to={"#"}>{data?.title}</Link>
                            </h4>
                          </div>
                          <div className="dlab-post-meta">
                            <ul className="d-flex align-items-center">
                              <li className="post-date">
                                {" "}
                                <i className="fa fa-calendar"></i>
                                <strong>
                                  {moment(data?._createdAt).format("ll")}
                                </strong>{" "}
                              </li>
                              <li className="post-author">
                                <i className="fa fa-user"></i>By{" "}
                                <Link to={"#"}>{data?.author}</Link>{" "}
                              </li>
                              <li className="post-comment">
                                <i className="fa fa-comments"></i>{" "}
                                <Link to={"#"}>0</Link>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="dlab-post-text">
                            <p>
                              {data?.title} was written by our student{" "}
                              {data?.author}
                            </p>
                          </div>
                          <div className="dlab-post-readmore blog-share">
                            <Link
                              to={`/${data?._id}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button outline outline-1"
                            >
                              READ MORE
                              <i className="fa fa-long-arrow-right ml-1"></i>
                            </Link>
                            {/* <div className="share-btn">
                            <ul className="clearfix">
                              <li>
                                <Link to={`/${}`} className="site-button sharp">
                                  <i className="fa fa-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"#"} className="site-button sharp">
                                  <i className="fa fa-google-plus"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"#"} className="site-button sharp">
                                  <i className="fa fa-linkedin"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"#"} className="site-button sharp">
                                  <i className="fa fa-twitter"></i>
                                </Link>
                              </li>
                              <li className="share-button">
                                <Link to={"#"} className="site-button sharp">
                                  <i className="fa fa-share-alt"></i>
                                </Link>
                              </li>
                            </ul>
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              ) : (
                "Loading..."
              )}
            </div>
            <div className="pagination-bx clearfix text-center">
              <ul className="pagination">
                <li className="previous">
                  <Link to={"#"}>
                    <i className="ti-arrow-left"></i> Prev
                  </Link>
                </li>
                <li className="active">
                  <Link to={"#"}>1</Link>
                </li>
                <li>
                  <Link to={"#"}>2</Link>
                </li>
                <li>
                  <Link to={"#"}>3</Link>
                </li>
                <li className="next">
                  <Link to={"#"}>
                    Next <i className="ti-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogClassicGrid;
