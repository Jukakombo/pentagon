import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Sidebar from './../../Element/Sidebar';

//Images
import bnr1 from './../../../images/banner/bnr4.jpg';
import grid1 from './../../../images/blog/grid/pic1.jpg';
import grid2 from './../../../images/blog/grid/pic2.jpg';
import grid3 from './../../../images/blog/grid/pic3.jpg';
import grid4 from './../../../images/blog/grid/pic4.jpg';
import { client } from '../../../sanityClient';
import moment from 'moment';
const blogPost = [
	{images: grid1, }, {images: grid2, }, {images: grid3, },
	{images: grid1, }, {images: grid2, }, {images: grid3, },
	{images: grid4, }, {images: grid1, }, 
];

class BlogListLeftSidebar extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
						<PageTitle motherMenu='News Articles' activeMenu='School lates news' />
                    </div>

                    <div className="content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 sticky-top">
                                    <Sidebar />
                                </div>
                                <ListMainBlog    />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}

function ListMainBlog(){
	const [schoolNews, setSchoolNews] = useState([]);
 
  useEffect(() => {
    const query = `*[ _type == "schoolNews"]{
		title, _id,body, author, imageUrl{
			asset->{
				url, _id
			}
		}
	}`;
    client.fetch(query).then((data) => {
      setSchoolNews(data);
    });
  }, []);
	return(
		<>
			<div className="col-lg-9">
				{schoolNews.map((item)=>(	
					<div className="blog-post blog-md clearfix" key={item._id}>
						<div className="dlab-post-media dlab-img-effect zoom-slow">
							<Link to={"#"}><img src={item?.imageUrl?.asset?.url} alt="" /></Link>
						</div>
						<div className="dlab-post-info">
							<div className="dlab-post-title ">
								<h4 className="post-title"><Link to={"#"}>{item.title}</Link></h4>
							</div>
							<div className="dlab-post-meta">
								<ul className="d-flex align-items-center">
									<li className="post-date"> <i className="fa fa-calendar"></i><strong>{moment(item._createdAt).fromNow()}</strong>  </li>
									<li className="post-author"><i className="fa fa-user"></i>By: <Link to={"#"}>{item.author}</Link> </li>
									<li className="post-comment"><i className="fa fa-comments"></i> <Link to={"#"}>10</Link> </li>
								</ul>
							</div>
							<div className="dlab-post-text">
								<p>{item?.title}...</p>
							</div>
							<div className="dlab-post-readmore blog-share">
								<Link to={`/${item._id}`} title="READ MORE" rel="bookmark" className="site-button outline outline-1">READ MORE
									<i className="fa fa-long-arrow-right"></i>
								</Link>
								<div className="share-btn">
									<ul className="clearfix">
										<li><Link to={"#"} className="site-button sharp"><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={"#"} className="site-button sharp"><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={"#"} className="site-button sharp"><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={"#"} className="site-button sharp"><i className="fa fa-twitter"></i></Link></li>
										<li className="share-button"><Link to={"#"} className="site-button sharp"><i className="fa fa-share-alt"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="pagination-bx clearfix text-center">
					<ul className="pagination">
						<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
						<li className="active"><Link to={"#"}>1</Link></li>
						<li><Link to={"#"}>2</Link></li>
						<li><Link to={"#"}>3</Link></li>
						<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
					</ul>
				</div>
			</div>
		</>
	)
}
export {ListMainBlog};
export default BlogListLeftSidebar;