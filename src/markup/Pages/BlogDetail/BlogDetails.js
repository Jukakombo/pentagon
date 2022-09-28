import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./../../Layout/Header1";
import Footer5 from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import Sidebar from "./../../Element/Sidebar";
import moment from "moment";
import bnr from "./../../../images/banner/bnr5.jpg";
import grid4 from "./../../../images/blog/grid/pic4.jpg";
import grid1 from "./../../../images/blog/grid/pic1.jpg";
import test1 from "./../../../images/testimonials/pic1.jpg";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "../../../sanityClient";

function BlogDetails() {
  // const [scienceAndTech, setScienceAndTech] = useState([]);
  const { id } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_id=="${id}"]{
      title, body, imageUrl{
        asset -> {
          _id,
          url
        }, alt
      },
      author
    }`
      )
      .then((data) => {
        setNews(data);
      });
  }, [id]);

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <PageTitle motherMenu="News Details" activeMenu="News Details" />
        </div>
        <div className="content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-9">
                {/* api starting here */}
                {news.map((item) => (
                  <div className="blog-post blog-single" key={item.slug}>
                    <div className="dlab-post-title ">
                      <h4 className="post-title m-t0">
                        <Link to={"#"}>{item.title}</Link>
                      </h4>
                    </div>
                    <div className="dlab-post-meta m-b20">
                      <ul className="d-flex align-items-center">
                        <li className="post-date">
                          {" "}
                          <i className="fa fa-calendar"></i>
                          <strong>
                            {moment(item.updatedAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </strong>
                        </li>
                        <li className="post-author">
                          <Link to={`news-details/${item.slug}`}>
                            <i className="fa fa-user"></i>By:{item.author}
                          </Link>
                        </li>
                        <li className="post-comment">
                          <i className="fa fa-comments"></i>
                          <Link to={"#"}>1k+ Comments</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dlab-post-media dlab-img-effect zoom-slow">
                      <Link to={"#"}>
                        <img src={item.imageUrl.asset.url} alt="ali" />
                      </Link>
                    </div>
                    <div className="dlab-post-text">
                      <h3>{item.title}</h3>

                      <blockquote>{item?.newsDetails}</blockquote>
                       
                         <BlockContent blocks={item?.body} dataset="production" projectId="2xflc1g2" /> 

                     
                      
                      <div className="dlab-divider bg-gray-dark"></div>
                      
                      
                    </div>

                    <div className="dlab-post-tags clear">
                      <div className="post-tags">
                        <Link to={"#"}>Science And Tech </Link>
                        <Link to={"#"}>Eduction </Link>
                        <Link to={"#"}>Top Stories </Link>
                        <Link to={"#"}>Culture </Link>
                      </div>
                    </div>
                    <div className="dlab-divider bg-gray-dark op4">
                      <i className="icon-dot c-square"></i>
                    </div>
                    <div className="share-details-btn">
                      <ul>
                        <li>
                          <h5 className="m-a0">Share Post</h5>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="site-button facebook button-sm"
                          >
                            <i className="fa fa-facebook"></i> Facebook
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="site-button google-plus button-sm"
                          >
                            <i className="fa fa-google-plus"></i> Google Plus
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="site-button linkedin button-sm"
                          >
                            <i className="fa fa-linkedin"></i> Linkedin
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="site-button instagram button-sm"
                          >
                            <i className="fa fa-instagram"></i> Instagram
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="site-button twitter button-sm"
                          >
                            <i className="fa fa-twitter"></i> Twitter
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            className="site-button whatsapp button-sm"
                          >
                            <i className="fa fa-whatsapp"></i> Whatsapp
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
                {/* end api */}

                <div className="clear" id="comment-list">
                  <div className="comments-area" id="comments">
                    <h2 className="comments-title">8 Comments</h2>
                    <div className="clearfix m-b20">
                      <ol className="comment-list">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-author vcard">
                              {" "}
                              <img
                                className="avatar photo"
                                src={test1}
                                alt=""
                              />
                              <cite className="fn">Stacy poe</cite>{" "}
                              <span className="says">says:</span>{" "}
                            </div>
                            <div className="comment-meta">
                              {" "}
                              <Link to={"#"}>
                                October 6, 2015 at 7:15 am
                              </Link>{" "}
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam vitae neqnsectetur adipiscing elit. Nam
                              viae neqnsectetur adipiscing elit. Nam vitae neque
                              vitae sapien malesuada aliquet.
                            </p>
                             
                          </div>
                        </li>
                      </ol>

                      <div className="comment-respond" id="respond">
                        <h4 className="comment-reply-title" id="reply-title">
                          Leave a Reply
                          <small>
                            <Link
                              to={"#"}
                              className="d-none"
                              id="cancel-comment-reply-link"
                              rel="nofollow"
                            >
                              Cancel reply
                            </Link>
                          </small>
                        </h4>
                        <form
                          className="comment-form"
                          id="commentform"
                          method="post"
                          action="http://sedatelab.com/developer/donate/wp-comments-post.php"
                        >
                          <p className="comment-form-author">
                            <label for="author">
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              value="Author"
                              name="Author"
                              placeholder="Author"
                              id="author"
                            />
                          </p>
                          <p className="comment-form-email">
                            <label for="email">
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              value="email"
                              placeholder="Email"
                              name="email"
                              id="email"
                            />
                          </p>
                          <p className="comment-form-url">
                            <label for="url">Website</label>
                            <input
                              type="text"
                              value="url"
                              placeholder="Website"
                              name="url"
                              id="url"
                            />
                          </p>
                          <p className="comment-form-comment">
                            <label for="comment">Comment</label>
                            <textarea
                              rows="8"
                              name="comment"
                              placeholder="Comment"
                              id="comment"
                            ></textarea>
                          </p>
                          <p className="form-submit">
                            <input
                              type="submit"
                              value="Post Comment"
                              className="submit"
                              id="submit"
                              name="submit"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 sticky-top">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer5 />
    </>
  );
}

export default BlogDetails;
