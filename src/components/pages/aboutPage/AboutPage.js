
import AppHeader from '../../appHeader/AppHeader'
import AppFooter from '../../appFooter/AppFooter'


import AboutImg from '../../../resources/img/section_about-img-min.png'

import './aboutPage.scss'

const AboutPage = () => {

    return (
        <>
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
                            <a href="/" className="about_page_left-button btn_large">BROWSE PLANTS</a>
                        </div>
                        <div className="about_page_right">
                            <div className="about_page_right-img">
                                <img src={AboutImg} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}

export default AboutPage;