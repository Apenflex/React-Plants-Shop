import AppHeader from '../../appHeader/AppHeader';
import AppFooter from '../../appFooter/AppFooter';

import './mainPage.scss';

import featureImg from '../../../resources/img/feature-section-bg-min.png';
import featuresIcon1 from '../../../resources/img/features-icon-1.svg';
import featuresIcon2 from '../../../resources/img/features-icon-2.svg';
import featuresIcon3 from '../../../resources/img/features-icon-3.svg';
const MainPage = () => {


    return (
        <>
            <AppHeader />
            <section className='plantland'>
                <div className="container">
                    <div className="plantland__content">
                        <span className="plantland__section-name">PLANTLAND</span>
                        <h1 className="plantland__title">Make Your Home Green</h1>
                        <div className="plantland__descr">Check out our store in New York with the best indoor & outdoor plants that are suitable for growing exactly in your conditions.</div>
                        <div className="plantland__buttons">
                            <a href="/" className="plantland__buttons-best btn_large">BEST PLANTS</a>
                            <a href="/" className="plantland__buttons-learn btn_large">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <section className='features'>
                    <div className="features__wrapper">
                        <div className="features__left-block">
                            <div className="features__left-block-content">
                                <span className="features__left-block-name">FEATURES</span>
                                <h2 className="features__left-block-title">Why Choose Us</h2>
                                <div className="features__left-block-descr">
                                    In our store and greenhouse,we grow and sell only the best plants.
                                    With PlantLand you can make yourhome or office cozier.
                                </div>
                                <div className="features__left-block-list">
                                    <div className="features__left-block-list-item">
                                        <div className="features__left-block-list-item-icon">
                                            <img src={featuresIcon1} alt="icon" />
                                        </div>
                                        <div className="features__left-block-list-item-content">
                                            <span className="features__left-block-list-item-title">Best Plants</span>
                                            <span className="features__left-block-list-item-descr">
                                                We sell plants from the best gardeners and our own greenhouse.
                                                In our store, you will find even the most exotic flowers, trees, shrubs.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="features__left-block-list-item">
                                        <div className="features__left-block-list-item-icon">
                                            <img src={featuresIcon2} alt="leaf" />
                                        </div>
                                        <div className="features__left-block-list-item-content">
                                            <span className="features__left-block-list-item-title">Related Products</span>
                                            <span className="features__left-block-list-item-descr">
                                                In addition to plants, you can buy everything you need to grow them. 
                                                We offer top dressing, fertilizers, accessories, flowerpots, and much more.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="features__left-block-list-item">
                                        <div className="features__left-block-list-item-icon">
                                            <img src={featuresIcon3} alt="leaf" />
                                        </div>
                                        <div className="features__left-block-list-item-content">
                                            <span className="features__left-block-list-item-title">Consultations</span>
                                            <span className="features__left-block-list-item-descr">
                                                You will receive all the necessary information about the plan you buy.
                                                We will tell you how to properly prepare the plant for planting, how to water it,
                                                and keep it alive.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features__right-block">
                            <img src={featureImg} alt="plants" />
                        </div>
                    </div>
            </section>
            
            <AppFooter />
        </>
    )
};

export default MainPage;