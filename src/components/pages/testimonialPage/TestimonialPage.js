import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import AppHeader from '../../appHeader/AppHeader'
import AppFooter from '../../appFooter/AppFooter'

import TestimonialImg from '../../../resources/img/section_testimonials-img-min.png'
import TestimonialSliderImg1 from '../../../resources/img/testimonial_feed-img1-min.png'
import TestimonialSliderImg2 from '../../../resources/img/testimonial_feed-img2-min.png'
import TestimonialSliderImg3 from '../../../resources/img/testimonial_feed-img3-min.png'
import FaqImg from '../../../resources/img/section_faq-bg-min.png'

import './testimonialPage.scss'

const TestimonialPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const panels = [
        {
            title: 'Do you sell trees?',
            content: 'Yes, in our store, you can buy decorative trees for the garden.',
        },
        {
            title: 'Can I buy already grown-up plants?',
            content: 'Of course, we have a large greenhouse where we grow plants.You can buy an adult plant in a pot.',
        },
        {
            title: 'Can I buy plants online?',
            content: "No, we don't have an online store.To buy a plant, come to our offline store or leave us a message.",
        },
    ];

    const onAccordeonClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <AppHeader />
            <section className='testimonial'>
                <div className="testimonial__wrapper">
                    <div className="testimonial__left-block">
                        <span className="testimonial__left-block-name">KIND WORDS</span>
                        <h1 className="testimonial__left-block-title">Testimonials</h1>
                        <div className="testimonial__left-block-descr">
                            Our main task is to help you make sure that your home is always
                            full of greenery, oxygen, and comfort!
                        </div>
                        <div className="testimonial__left-block-slider">
                            <TestimonialSwiper />
                        </div>
                    </div>
                    <div className="testimonial__right-block">
                        <img src={TestimonialImg} alt="plants" />
                    </div>
                </div>
            </section>
            <section className="testimonial_divider">
                <div className="container">
                    <div className="testimonial_divider_wrapper">
                        <div className="testimonial_divider_wrapper-item">
                            <div className="testimonial_divider_wrapper-item-title">
                                Want to Visit Our Greenhouse?
                            </div>
                            <div className="testimonial_divider_wrapper-item-descr">
                                Call us <span><a href="tel:+1(234)5678900">+1 (234) 567 89 00</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="container">
                    <div className="faq_wrapper">
                        <div className="faq_wrapper-img">
                            <img src={FaqImg} alt="flower" />
                        </div>
                        <div className="faq_wrapper-content">
                            <span className="faq_wrapper-content-name">FAQ</span>
                            <h2 className="faq_wrapper-content-title">Have a Question?</h2>
                            <div className="faq_wrapper-content-descr">
                                We are happy to answer any questions!
                                Come to our store or leave your question in the contact form!
                            </div>
                            <div className="faq_wrapper-content-questions">
                                {panels.map((panel, index) => (
                                    <div className="faq_wrapper-content-questions-item" key={index}>
                                        <div
                                            className="faq_wrapper-content-questions-item-title"
                                            onClick={() => onAccordeonClick(index)}
                                        >
                                        {panel.title}
                                        <FontAwesomeIcon
                                            icon={activeIndex === index ? faChevronUp : faChevronUp}
                                            className={`faq_wrapper-content-questions-item-icon ${activeIndex === index
                                            ? "faq_wrapper-content-questions-item-icon-active" : ""
                                        }`}/>
                                        </div>
                                        {/* {activeIndex === index && (  */}
                                        <div
                                            className={`faq_wrapper-content-questions-item-descr ${activeIndex === index
                                                ? "faq_wrapper-content-questions-item-descr-active"
                                                : ""
                                            }`}>
                                            {panel.content}
                                        </div>
                                        {/* // )}  */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}

SwiperCore.use([Autoplay]);

const TestimonialSwiper = () => {
    return (
        <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={40}
            grabCursor={true}
            loop={true}
            loopedSlides={2}
            speed={1300}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 1,
                },
                410: {
                    slidesPerView: 3,
                    spaceBetween: 1,
                },
            }}
        >
            <SwiperSlide>
                <div className="testimonial__left-block-slider-item">
                    <div className="testimonial__left-block-slider-item-img">
                        <img src={TestimonialSliderImg1} alt="Dani Samston" />
                    </div>
                    <div className="testimonial__left-block-slider-item-content">
                        <div className="testimonial__left-block-slider-item-content-name">
                            Dani Samston
                        </div>
                        <div className="testimonial__left-block-slider-item-content-feedback">
                            I bought flowers to decorate our home 3 years ago in this store.
                            All plants still live and bloom. We buy all fertilizers for them
                            only at PlantLand.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial__left-block-slider-item">
                    <div className="testimonial__left-block-slider-item-img">
                        <img src={TestimonialSliderImg2} alt="Dani Samston" />
                    </div>
                    <div className="testimonial__left-block-slider-item-content">
                        <div className="testimonial__left-block-slider-item-content-name">
                            Linda Peterson
                        </div>
                        <div className="testimonial__left-block-slider-item-content-feedback">
                            Thank you so much for helping me take care of my home flower garden.
                            PlantLand sells excellent fertilizers and quality solution for pest control.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial__left-block-slider-item">
                    <div className="testimonial__left-block-slider-item-img">
                        <img src={TestimonialSliderImg3} alt="Dani Samston" />
                    </div>
                    <div className="testimonial__left-block-slider-item-content">
                        <div className="testimonial__left-block-slider-item-content-name">
                            Sandy Johnson
                        </div>
                        <div className="testimonial__left-block-slider-item-content-feedback">
                            I bought trees and shrubs here for my home garden. Surprisingly, all
                            plants took root. There were no problems at all with their planting and
                            cultivation.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial__left-block-slider-item">
                    <div className="testimonial__left-block-slider-item-img">
                        <img src={TestimonialSliderImg2} alt="Dani Samston" />
                    </div>
                    <div className="testimonial__left-block-slider-item-content">
                        <div className="testimonial__left-block-slider-item-content-name">
                            Linda Peterson4
                        </div>
                        <div className="testimonial__left-block-slider-item-content-feedback">
                            Thank you so much for helping me take care of my home flower garden.
                            PlantLand sells excellent fertilizers and quality solution for pest control.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial__left-block-slider-item">
                    <div className="testimonial__left-block-slider-item-img">
                        <img src={TestimonialSliderImg3} alt="Dani Samston" />
                    </div>
                    <div className="testimonial__left-block-slider-item-content">
                        <div className="testimonial__left-block-slider-item-content-name">
                            Sandy Johnson5
                        </div>
                        <div className="testimonial__left-block-slider-item-content-feedback">
                            I bought trees and shrubs here for my home garden. Surprisingly, all
                            plants took root. There were no problems at all with their planting and
                            cultivation.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default TestimonialPage