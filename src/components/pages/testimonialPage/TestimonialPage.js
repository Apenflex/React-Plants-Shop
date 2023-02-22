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

import './testimonialPage.scss'

const TestimonialPage = () => {

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