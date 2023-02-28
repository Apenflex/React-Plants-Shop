import { Link, useParams } from 'react-router-dom';

import UseArticles from "../../../services/UseArticles";

import AppHeader from "../../appHeader/AppHeader";
import AppFooter from "../../appFooter/AppFooter";

import "./singleBlogArticle.scss";

const SingleBlogArticle = () => {
    const { articles } = UseArticles();

    const { title } = useParams();
    const item = articles.find((item) => item.title === title.replace(/-/g, ' '));

    return (
        <>
            <AppHeader />
            <section className="blog_article">
                <div className="container">
                    <div className="blog_article-item">
                        <div className="blog_article-item-img" >
                            <img src={item.img} alt="blog" loading='lazy' />
                        </div>
                        <div className="blog_article-item-content">
                            <span className="blog_article-item-content-date">{item.date}</span>
                            <h3 className="blog_article-item-content-title">{item.title}</h3>
                            <div className="blog_article-item-content-descr">
                                {item.descr}
                            </div>
                        </div>
                        <Link
                            to="/blog/">
                            <button className="blog_article-item-content-btn btn_small">Back to blog</button>
                        </Link>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    );
};

export default SingleBlogArticle;