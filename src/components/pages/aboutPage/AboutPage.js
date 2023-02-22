import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import AppHeader from '../../appHeader/AppHeader'
import AppFooter from '../../appFooter/AppFooter'

import AboutImg from '../../../resources/img/section_about-img-min.png'
import CarouselIcon1 from '../../../resources/img/icons/consultations.svg'
import CarouselIcon2 from '../../../resources/img/icons/plant_food.svg'
import CarouselIcon3 from '../../../resources/img/icons/plants_for_garden.svg'
import CarouselIcon4 from '../../../resources/img/icons/plants_for_home.svg'
import CarouselIcon5 from '../../../resources/img/icons/sale_of_flowerpot.svg'
import CarouselIcon6 from '../../../resources/img/icons/soil_for_plants.svg'

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
                {/* <div className="container"> */}
                    <MySwiper />
                {/* </div> */}
            </section>
            <AppFooter />
        </>
    )
}

SwiperCore.use([Navigation, Autoplay]);

const MySwiper = () => {
    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={4}
            spaceBetween={1}
            grabCursor={true}
            loop={true}
            loopedSlides={3}
            speed={1400}
            autoplay={{
                delay: 2100,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            navigation
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            }}
        >
            
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon1} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Consultations
                        </div>
                        <div className="carousel_item-descr">
                            We not only sell plants and everything related
                            to them but are also ready to answer any of your
                            questions! Contact us to select the best plant!
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon2} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Plant Food
                        </div>
                        <div className="carousel_item-descr">
                            We offer everything you need to care for plants.
                            Here you'll find a wide selection of fertilizers and
                            medicinal products to combat flower diseases.
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon3} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Plants for Garden
                        </div>
                        <div className="carousel_item-descr">
                            Turn your yard into a colorful lawn! Here you will find 
                            dozens of varieties of flowers, both in the form of seeds, 
                            and already sprouted.  
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon4} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Plants for Home
                        </div>
                        <div className="carousel_item-descr">
                            We offer a huge selection of flowers and evergreens
                            that will be a joy to see for many years. A charming
                            plant will be a great addition to the interior.
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon5} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Sale of Flowerpots
                        </div>
                        <div className="carousel_item-descr">
                            Purchase flowerpots for plants of any type, from small flowers
                            to huge palm trees. Our store offers only quality flowerpots
                            from trusted manufacturers.
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon6} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Soil for Plants
                        </div>
                        <div className="carousel_item-descr">
                            It's not easy to find quality soil in New York. We offer the
                            best options for your plants. The soil we sell is decontaminated
                            and enriched with nutrients.
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel_wrapper_item">
                    <div className="carousel_item">
                        <div className="carousel_item-img">
                            <img src={CarouselIcon6} alt="about" />
                        </div>
                        <div className="carousel_item-title">
                            Soil for Plants
                        </div>
                        <div className="carousel_item-descr">
                            It's not easy to find quality soil in New York. We offer the
                            best options for your plants. The soil we sell is decontaminated
                            and enriched with nutrients.
                        </div>
                        <a href="/" className="carousel_item-btn btn_small">learn more</a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default AboutPage;