import { Link } from 'react-router-dom';

import AppHeader from "../../appHeader/AppHeader";
import AppFooter from "../../appFooter/AppFooter";
import UseArticles from '../../../services/UseArticles';

import "./blogPage.scss";

const BlogPage = () => {
    const { articles } = UseArticles();

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            if (item.descr.length > 130) {
                item.descr = item.descr.slice(0, 130) + '...';
            }

            return (
                <div key={item.title}>
                    <Link
                        to={`/blog/${item.title.replace(/\s+/g, '-')}`}
                        className="blog__content-item">
                        <div className="blog__content-item-img" >
                            <img src={item.img} alt="blog" loading='lazy' />
                        </div>
                        <div className="blog__content-item-content">
                            <span className="blog__content-item-content-date">{item.date}</span>
                            <h3 className="blog__content-item-content-title">{item.title}</h3>
                            <div className="blog__content-item-content-descr">
                                {item.descr}
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });
        return items;
    }
    const items = renderItems(articles);

    return (
        <>
            <AppHeader />
            <section className="blog">
                <div className="container">
                    <div className="blog__content">
                        {items}
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    );
};

export default BlogPage;