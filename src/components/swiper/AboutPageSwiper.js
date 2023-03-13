import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import CarouselIcon1 from '../../resources/img/icons/consultations.svg'
import CarouselIcon2 from '../../resources/img/icons/plant_food.svg'
import CarouselIcon3 from '../../resources/img/icons/plants_for_garden.svg'
import CarouselIcon4 from '../../resources/img/icons/plants_for_home.svg'
import CarouselIcon5 from '../../resources/img/icons/sale_of_flowerpot.svg'
import CarouselIcon6 from '../../resources/img/icons/soil_for_plants.svg'

SwiperCore.use([Navigation, Autoplay]);

const AboutPageSwiper = () => {
    const sliderItemsContent = [
        {
            id: 1,
            icon: CarouselIcon1,
            title: 'Consultations',
            descr: 'We not only sell plants and everything related to them but are also ready to answer any of your questions! Contact us to select the best plant!',
        },
        {
            id: 2,
            icon: CarouselIcon2,
            title: 'Plant Food',
            descr: 'We offer everything you need to care for plants. Here you\'ll find a wide selection of fertilizers and medicinal products to combat flower diseases.',
        },
        {
            id: 3,
            icon: CarouselIcon3,
            title: 'Plants for Garden',
            descr: 'Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, both in the form of seeds, and already sprouted.',
        },
        {
            id: 4,
            icon: CarouselIcon4,
            title: 'Plants for Home',
            descr: 'We offer a huge selection of flowers and evergreens that will be a joy to see for many years.A charming plant will be a great addition to the interior.',
        },
        {
            id: 5,
            icon: CarouselIcon5,
            title: 'Sale of Flowerpots',
            descr: 'Purchase flowerpots for plants of any type, from small flowers to huge palm trees.Our store offers only quality flowerpots from trusted manufacturers.',
        },
        {
            id: 6,
            icon: CarouselIcon6,
            title: 'Soil for Plants',
            descr: "It's not easy to find quality soil in New York. We offer the best options for your plants.The soil we sell is decontaminated and enriched with nutrients.",
        },
        {
            id: 7,
            icon: CarouselIcon6,
            title: 'Soil for Plants',
            descr: "It's not easy to find quality soil in New York. We offer the best options for your plants.The soil we sell is decontaminated and enriched with nutrients.",
        },
    ]
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <SwiperSlide key={item.id}  > 
                    <div className="carousel_wrapper_item">
                        <div className="carousel_item">
                            <div className="carousel_item-img">
                                <img src={item.icon} alt="about" />
                            </div>
                            <div className="carousel_item-title">
                                {item.title}
                            </div>
                            <div className="carousel_item-descr">
                                {item.descr}
                            </div>
                            <Link to="/contact/" className="carousel_item-btn btn_small">learn more</Link>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
        return items
    }
    const items = renderItems(sliderItemsContent)
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
            {items}
        </Swiper>
    );
}
export default AboutPageSwiper;