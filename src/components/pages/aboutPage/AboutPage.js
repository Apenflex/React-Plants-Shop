import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import AppHeader from '../../appHeader/AppHeader'
import AboutPageSwiper from '../../swiper/AboutPageSwiper'
import AppFooter from '../../appFooter/AppFooter'

import AboutImg from '../../../resources/img/section_about-img-min.webp'
import './aboutPage.scss'

const AboutPage = () => {
 
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Our shop offers you to buy home plants to decorate your home or office.
                    In our offline shop, you will find the best selection of flowers and evergreens
                    at attractive prices. We get indoor flowers from the best suppliers in NY, all
                    plants are grown with strict adherence to technology. We offer: LARGE SELECTION OF DIFFERENT PLANTS RELATED SERVICES AND HOME GOODS"
                />
                <title>About Us</title>
            </Helmet>
            <AppHeader />
            <section className="about_page">
                <div className="container">
                    <div className="about_page_wrapper">
                        <div className="about_page_left">
                            <div className="about_page_left_section-name">
                                ABOUT US
                            </div>
                            <h1 className="about_page_left_title">
                                Fill Your Home and Garden With Beautiful, Green Plants!
                            </h1>
                            <div className="about_page_left_descr">
                                Our shop offers you to buy home plants to decorate your home or office.
                                In our offline shop, you will find the best selection of flowers and evergreens
                                at attractive prices. We get indoor flowers from the best suppliers in NY, all
                                plants are grown with strict adherence to technology. We offer:
                            </div>
                            <div className="about_page_left_list">
                                <div className="about_page_left_list-item">LARGE SELECTION OF DIFFERENT PLANTS</div>
                                <div className="about_page_left_list-item">RELATED SERVICES AND HOME GOODS</div>
                            </div>
                            <Link to="/shop/"
                                className="about_page_left-button btn_large">BROWSE PLANTS</Link>
                        </div>
                        <div className="about_page_right">
                            <div className="about_page_right-img">
                                <img src={AboutImg} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_page_divider">
                <div className="container">
                    <div className="about_page_divider_wrapper">
                        <div className="about_page_divider_wrapper-item">
                            <div className="about_page_divider_wrapper-item-title">
                                120+
                            </div>
                            <div className="about_page_divider_wrapper-item-descr">
                                FLOWERS
                            </div>
                        </div>
                        <div className="about_page_divider_wrapper-item">
                            <div className="about_page_divider_wrapper-item-title">
                                239+
                            </div>
                            <div className="about_page_divider_wrapper-item-descr">
                                EVERGREENS
                            </div>
                        </div>
                        <div className="about_page_divider_wrapper-item">
                            <div className="about_page_divider_wrapper-item-title">
                                148+
                            </div>
                            <div className="about_page_divider_wrapper-item-descr">
                                SUCCULENTS
                            </div>
                        </div>
                        <div className="about_page_divider_wrapper-item">
                            <div className="about_page_divider_wrapper-item-title">
                                150+
                            </div>
                            <div className="about_page_divider_wrapper-item-descr">
                                PALM TREES
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="carousel">
                <AboutPageSwiper />
            </section>
            <AppFooter />
        </>
    )
}
export default AboutPage;