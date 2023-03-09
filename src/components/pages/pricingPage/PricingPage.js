import { useState } from 'react';

import AppHeader from "../../appHeader/AppHeader"
import AppFooter from "../../appFooter/AppFooter"
import Form from "../../contactForm/Form"

import TabIndoorImg1 from '../../../resources/img/tab_indoor-1-min.png'
import TabIndoorImg2 from '../../../resources/img/tab_indoor-2-min.png'
import TabIndoorImg3 from '../../../resources/img/tab_indoor-3-min.png'
import TabIndoorImg4 from '../../../resources/img/tab_indoor-4-min.png'
import TabOutdoorImg1 from '../../../resources/img/tab_outdoor-1-min.png'
import TabOutdoorImg2 from '../../../resources/img/tab_outdoor-2-min.png'
import TabOutdoorImg3 from '../../../resources/img/tab_outdoor-3-min.png'
import TabOutdoorImg4 from '../../../resources/img/tab_outdoor-4-min.png'

import './pricingPage.scss'

const PricingPage = () => {

    const [activeTab, setActiveTab] = useState('indoor');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCustomOrderClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const onModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <AppHeader />
            <section className="offer">
                <div className="container">
                    <div className="offer-header">
                        <span className="offer-header__name">WHAT WE OFFER</span>
                        <h2 className="offer-header__title">Our Plants</h2>
                        <div className="offer-header__descr">
                            We sell both indoor and outdoor varieties of plants.
                        </div>
                    </div>
                    <div className="offer-tabs">
                        <div
                            className={`offer-tabs-tab ${activeTab === 'indoor' ? 'offer-tabs-tab-active' : ''}`}
                            onClick={() => handleTabClick('indoor')}>
                            INDOOR
                        </div>
                        <div
                            className={`offer-tabs-tab ${activeTab === 'outdoor' ? 'offer-tabs-tab-active' : ''}`}
                            onClick={() => handleTabClick('outdoor')}>
                            OUTDOOR
                        </div>
                    </div>
                    <div className="offer-tabs_content ">
                        {activeTab === 'indoor' ? (
                            <>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabIndoorImg1} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Small Ornamental Plants
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        Such plants will fit on any windowsill, decorate your
                                        home or work table. Chlorophytum, money plants, aglaonema
                                        are not demanding in care but very beautiful.
                                    </div>
                                </div>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabIndoorImg2} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Indoor Trees
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        It's a beautiful and original option for a large room.
                                        A small indoor tree will add some zest to the office or a
                                        large living room. Large dracaena, ficus, alocasia will be
                                        a great option for your space.
                                    </div>
                                </div>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabIndoorImg3} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Plants in Florarium
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        These are neatly planted compositions of succulents,
                                        grassroots, decorative ferns. Plants are selected so that
                                        they are in perfect harmony. Order your unique set of plants!
                                    </div>
                                </div>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabIndoorImg4} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Big Ornamental Plants
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        Charming pachypodium, yucca, monstera will become a stunning
                                        decoration of your room or office. These plants will make a great
                                        impression on your guests.
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabOutdoorImg1} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Outdoor Flowers
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        Flowers form the basis of the exterior and are the
                                        first to catch the eye. Charming anemones, freesia,
                                        lilies will provide brightness and a pleasant aroma.
                                        Choose your outdoor flower!
                                    </div>
                                </div>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabOutdoorImg2} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Succulents
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        Succulents do not require constant care, perfectly
                                        take root in any yard, look nice, and stylish. We will
                                        help you to create the optimal composition of succulents
                                        in your garden.
                                    </div>
                                </div>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabOutdoorImg3} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Decorative Moss
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        Decorative moss and lichen will make the garden truly special.
                                        Thanks to their density, coloring, and appearance, you can
                                        create a unique picture on the site.
                                    </div>
                                </div>
                                <div className="offer-tabs_content-card">
                                    <div className="offer-tabs_content-card-img">
                                        <img src={TabOutdoorImg4} alt="small ornament" />
                                    </div>
                                    <div className="offer-tabs_content-card-title">
                                        Decorative Conifers
                                    </div>
                                    <div className="offer-tabs_content-card-descr">
                                        The real decoration of any yard is decorative coniferous trees.
                                        Thuja, mountain pines, cedar pines will charm anyone! These are
                                        unpretentious, but very beautiful trees.
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section className="pricing">
                <div className="container">
                    <div className="pricing-header">
                        <span className="pricing-header__name">PRICING</span>
                        <h2 className="pricing-header__title">Best Prices for Plants</h2>
                        <div className="pricing-header__descr">
                            We offer affordable and prices for flowers, indoor and outdoor plants.
                        </div>
                    </div>
                    <div className="pricing__content">
                        <div className="pricing__content_card">
                            <div className="pricing__content_card-uptitle">
                                from <span>$20</span>
                            </div>
                            <div className="pricing__content_card-title">
                                Small plants
                            </div>
                            <div className="pricing__content_card-descr">
                                <span>Money Plant</span>
                                <span>Bryophyllum</span>
                                <span>Philodendron</span>
                            </div>
                            <div
                                className="pricing__content_card-btn btn_small"
                                onClick={handleCustomOrderClick}>
                                CUSTOM ORDER
                            </div>
                        </div>
                        <div className="pricing__content_card">
                            <div className="pricing__content_card-uptitle">
                                from <span>$30</span>
                            </div>
                            <div className="pricing__content_card-title">
                                Succulents
                            </div>
                            <div className="pricing__content_card-descr">
                                <span>Graptosedum</span>
                                <span>Elephant bush</span>
                                <span>Crassula ovata</span>
                            </div>
                            <div
                                className="pricing__content_card-btn btn_small"
                                onClick={handleCustomOrderClick}>
                                CUSTOM ORDER
                            </div>
                        </div>
                        <div className="pricing__content_card">
                            <div className="pricing__content_card-uptitle">
                                from <span>$20</span>
                            </div>
                            <div className="pricing__content_card-title">
                                Trees
                            </div>
                            <div className="pricing__content_card-descr">
                                <span>Raphis Palm</span>
                                <span>Cedar pine</span>
                                <span>Thuja</span>
                            </div>
                            <div
                                className="pricing__content_card-btn btn_small"
                                onClick={handleCustomOrderClick}>
                                CUSTOM ORDER
                            </div>
                        </div>
                        <div className="pricing__content_card">
                            <div className="pricing__content_card-uptitle">
                                from <span>$25</span>
                            </div>
                            <div className="pricing__content_card-title">
                                Small plants
                            </div>
                            <div className="pricing__content_card-descr">
                                <span>Dracaena</span>
                                <span>Dieffenbachia</span>
                                <span>Rubber Tree</span>
                            </div>
                            <div
                                className="pricing__content_card-btn btn_small"
                                onClick={handleCustomOrderClick}>
                                CUSTOM ORDER
                            </div>
                        </div>
                    </div>
                    {isModalOpen && (
                        <div className="modal">
                            <div className="modal__content">
                                <div className="modal__content_close" onClick={onModalClose}>+</div>
                                <Form onSubmit={() => setIsModalOpen(false)} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <AppFooter />
        </>
    )
}

export default PricingPage