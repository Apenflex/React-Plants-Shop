

import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";


// import "./blogPage.scss";

const SingleBlogArticle = () => {
    

    return (
        <>
            <AppHeader />
            {/* <div className="blog__content-item">
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
            </div> */}
            <AppFooter />
        </>
    );
};

export default SingleBlogArticle;