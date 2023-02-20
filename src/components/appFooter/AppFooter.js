import { Link } from 'react-router-dom';

import ScrollUp from '../scrollUp/ScrollUp';

import LogoFooter from '../../resources/img/logo/logo_footer.svg';

import './appFooter.scss';

const AppFooter = () => {

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer_items">
                        <Link to="/" className="footer_links-logo">
                            <img src={LogoFooter} alt="logo company"/>
                        </Link>
                        <div className="footer_links">
                            <Link to="/about/">About us</Link>
                            <a href="/">Plants</a>
                            <Link to="/blog/">Blog</Link>
                            <Link to="/pricing/">Pricing</Link>
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
            <ScrollUp />
        </>
    )
}

export default AppFooter;