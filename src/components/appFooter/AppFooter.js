
import LogoFooter from '../../resources/img/logo/logo_footer.svg';

import './appFooter.scss';

const AppFooter = () => {

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer_items">
                        <a href="/" className="footer_links-logo">
                            <img src={LogoFooter} alt="logo company"/>
                        </a>
                        <div className="footer_links">
                            <a href="/">About us</a>
                            <a href="/">Plants</a>
                            <a href="/">Pricing</a>
                            <a href="/">Testmonials</a>
                            <a href="/">Contact us</a>
                        </div>
                    </div>
                    <div className="footer_rights">
                        <div className="rights-text">© Created by</div>
                        <div className="rights-text">All rights Reserved</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default AppFooter;