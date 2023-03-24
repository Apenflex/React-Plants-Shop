import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import TestimonialSliderImg1 from '../../resources/img/testimonial_feed-img1-min.webp'
import TestimonialSliderImg2 from '../../resources/img/testimonial_feed-img2-min.webp'
import TestimonialSliderImg3 from '../../resources/img/testimonial_feed-img3-min.webp'

SwiperCore.use([Autoplay]);

const TestimonialSwiper = () => {
    const sliderItemsContent = [
        {
            id: 1,
            img: TestimonialSliderImg1,
            name: 'Dani Samston',
            feedback: 'I bought flowers to decorate our home 3 years ago in this store. All plants still live and bloom. We buy all fertilizers for them only at PlantLand.',
        },
        {
            id: 2,
            img: TestimonialSliderImg2,
            name: 'Linda Peterson',
            feedback: 'Thank you so much for helping me take care of my home flower garden. PlantLand sells excellent fertilizers and quality solution for pest control.',
        },
        {
            id: 3,
            img: TestimonialSliderImg3,
            name: 'Sandy Johnson',
            feedback: 'I bought trees and shrubs here for my home garden. Surprisingly, all plants took root.There were no problems at all with their planting and cultivation.',
        },
        {
            id: 4,
            img: TestimonialSliderImg1,
            name: 'Linda Peterson4',
            feedback: 'Thank you so much for helping me take care of my home flower garden. PlantLand sells excellent fertilizers and quality solution for pest control.',
        },
        {
            id: 5,
            img: TestimonialSliderImg2,
            name: 'Sandy Johnson5',
            feedback: 'I bought trees and shrubs here for my home garden. Surprisingly, all plants took root.There were no problems at all with their planting and cultivation.',
        },
    ]
    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                <SwiperSlide key={item.id} >
                    <div className="testimonial__left-block-slider-item">
                        <div className="testimonial__left-block-slider-item-img">
                            <img src={item.img} alt="Dani Samston" />
                        </div>
                        <div className="testimonial__left-block-slider-item-content">
                            <div className="testimonial__left-block-slider-item-content-name">
                                {item.name}
                            </div>
                            <div className="testimonial__left-block-slider-item-content-feedback">
                                {item.feedback}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
        return items
    }
    const items = renderItems(sliderItemsContent)
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={40}
            grabCursor={true}
            // touchMoveStopPropagation={true}
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
            allowTouchMove={false}
        >
            {items}
        </Swiper>
    );
}
export default TestimonialSwiper;