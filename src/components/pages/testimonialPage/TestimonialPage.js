import { Helmet } from 'react-helmet';
import { useAccordion } from '../../../store';

import AppHeader from '../../appHeader/AppHeader'
import TestimonialSwiper from '../../swiper/TestimonialSwiper'
import AppFooter from '../../appFooter/AppFooter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import TestimonialImg from '../../../resources/img/section_testimonials-img-min.png'
import FaqImg from '../../../resources/img/section_faq-bg-min.png'

import './testimonialPage.scss'

const TestimonialPage = () => {
    const { activeIndex, onAccordeonClick } = useAccordion();
    
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
                <title>Testimonials</title>
            </Helmet>
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
export default TestimonialPage