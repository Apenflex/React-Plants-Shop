import AppHeader from "../../appHeader/AppHeader"
import AppFooter from "../../appFooter/AppFooter"

import './pricingPage.scss'

const PricingPage = () => {

    return (
        <>
            <AppHeader />
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
                            <a href="/" className="pricing__content_card-btn btn_small">CUSTOM ORDER</a>
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
                            <a href="/" className="pricing__content_card-btn btn_small">CUSTOM ORDER</a>
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
                            <a href="/" className="pricing__content_card-btn btn_small">CUSTOM ORDER</a>
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
                            <a href="/" className="pricing__content_card-btn btn_small">CUSTOM ORDER</a>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}

export default PricingPage