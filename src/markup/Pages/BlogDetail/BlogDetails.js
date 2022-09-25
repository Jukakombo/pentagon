import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Header from "../../../Layout/Header4";
import Footer5 from "./../../Layout/footer5";
import PageTitle from "./../../Layout/PageTitle";
import Sidebar from "./../../Element/Sidebar";
import moment from "moment";
import bnr from "./../../../images/banner/bnr5.jpg";
import grid4 from "./../../../images/blog/grid/pic4.jpg";
import grid1 from "./../../../images/blog/grid/pic1.jpg";
import test1 from "./../../../images/testimonials/pic1.jpg";
import test2 from "./../../../images/testimonials/pic2.jpg";
import test3 from "./../../../images/testimonials/pic3.jpg";
import { client } from "../../../sanityClient";
import Header4 from "../../Layout/header4";

function BlogDetails() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    webUrl: "",
    email: "", 
    comment: "",
  });
  const {
    name,
    webUrl,
    email,
    comment,
     
  } = formData;

  useEffect(() => {
    client
      .fetch(
        `*[_id=="${id}"]{
      title, newsDetails, imageUrl{
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
  // comments zonesclient
  useEffect(() => {
    client
      .fetch(
        `*[_type=="comment" && references("${id}")]{
          _createdAt,name, comment, email, imageUrl{
          asset->{
          _id, url
        }
        }
        }`
      )
      .then((data) => {
        setComments(data);
      });
  }, [id]);
// comment form submit concept functions





const handleChangeInput = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true); 
  const contact = {
    _type: "comment",
    name: formData.name, 
    webUrl: formData.webUrl, 
    email: formData.email,

     comment:{_type:"schoolNews",
      _ref:formData.id,
      comment: formData.comment,
    }
   
  };

  client
    .create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  setFormData({
    name: "",
    webUrl: "",
    email: "",
   
    comment: "",
  });
  setTimeout(() => {
    setIsFormSubmitted(false);
  }, 5000);
};
  return (
    <>
      <Header4 />

      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <PageTitle motherMenu="Blog Details" activeMenu="Blog Details" />
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
                          <Link to={"#"}>{comments.length}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dlab-post-media dlab-img-effect zoom-slow">
                      <Link to={"#"}>
                        <img src={item.imageUrl.asset.url} alt="ali" />
                      </Link>
                    </div>
                    <div className="dlab-post-text">
                      <p>{item.title}</p>

                      <blockquote>{item.newsDetails}</blockquote>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen It has urvived not only five
                        centuries, but also the leap into electronic
                        typesetting.
                      </p>
                      <h5>Completely Responsive</h5>
                      <img
                        className="alignleft"
                        width="300"
                        src={grid4}
                        alt=""
                      />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the releasefive
                        centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release
                      </p>
                      <div className="dlab-divider bg-gray-dark"></div>
                      <img
                        className="alignright"
                        width="300"
                        src={grid1}
                        alt=""
                      />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release
                      </p>
                    </div>

                    <div className="dlab-post-tags clear">
                      <div className="post-tags">
                        <Link to={"#"}>Child </Link>
                        <Link to={"#"}>Eduction </Link>
                        <Link to={"#"}>Money </Link>
                        <Link to={"#"}>Resturent </Link>
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
                    <h2 className="comments-title">
                      {comments.length}{" "}
                      {comments.length >= 2 ? "Comments" : "comment"}
                    </h2>
                    <div className="clearfix m-b20">
                      <ol className="comment-list">
                        {comments.map((comment) => (
                          <li className="comment" key={comment._id}>
                            <div className="comment-body">
                              <div className="comment-author vcard">
                                {" "}
                                <img
                                  className="avatar photo"
                                  src={comment?.imageUrl?.asset?.url}
                                  alt="detail_img"
                                />
                                <cite className="fn">{comment.name}</cite>{" "}
                                <span className="says">says:</span>{" "}
                              </div>
                              <div className="comment-meta">
                                {" "}
                                <Link to={"#"}>
                                  {moment(comment?._createdAt).format(
                                    "MMM Do YY"
                                  )}
                                </Link>{" "}
                              </div>
                              <p>{comment.comment}</p>
                            </div>
                          </li>
                        ))}
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
                         
                        >
                          <p className="comment-form-author">
                            <label for="author">
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={handleChangeInput}

                              name="name"
                              placeholder="User Name"
                              id="author"
                            />
                          </p>
                          <p className="comment-form-email">
                            <label for="email">
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                             
                              placeholder="Email"
                              value={email}
                              name="email"
                              id="email"
                              onChange={handleChangeInput}

                            />
                          </p>
                          <p className="comment-form-url">
                            <label for="url">Website</label>
                            <input
                              type="text"
                              value={webUrl}
                              placeholder="Website"
                              name="webUrl"
                              onChange={handleChangeInput}
                              id="url"
                            />
                          </p>
                          <p className="comment-form-comment">
                            <label for="comment">Comment</label>
                            <textarea
                              rows="8"
                              value={comment}
                              name="comment"
                              onChange={handleChangeInput}
                              placeholder="Comment"
                              id="comment"
                            ></textarea>
                          </p>
                          <p className="form-submit">
                            <input onClick={handleSubmit}
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
