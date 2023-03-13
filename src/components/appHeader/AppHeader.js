import { useHamburger } from '../../store';
import { Link } from 'react-router-dom';

import logoHeader from '../../resources/img/logo/logo_header.svg'
import './appHeader.scss'

const AppHeader = () => {
    const { menuOpen, toggleMenu, toggleMeunuOnLinkClick } = useHamburger();

    const hamburgerClass = menuOpen ? "hamburger hamburger--spring is-active" : "hamburger hamburger--spring";
    const menuClass = menuOpen ? "app-header-menu app-header-menu-active" : "app-header-menu";
    const logoClass = menuOpen ? "app-header-logo app-header-logo-active" : "app-header-logo";

    return (
        <div className="app-header">
            <div className="container">
                <div className="app-header-wrapper">
                    <div className={logoClass}>
                        <Link to="/">
                            <img src={logoHeader} alt="company logo about plants" />
                        </Link>
                    </div>
                    
                    <nav className={menuClass}>
                        <Link to="/about/" onClick={() => toggleMeunuOnLinkClick()}>About us</Link>
                        <Link to="/blog/" onClick={() => toggleMeunuOnLinkClick()}>Blog</Link>
                        <Link to="/shop/" onClick={() => toggleMeunuOnLinkClick()}>Shop</Link>
                        <Link to="/pricing/" onClick={() => toggleMeunuOnLinkClick()}>Pricing</Link>
                        <Link to="/testimonials/" onClick={() => toggleMeunuOnLinkClick()}>Testimonials</Link>
                        <Link to="/contact/" onClick={() => toggleMeunuOnLinkClick()}>Contact us</Link>
                    </nav>
                </div>
                <div className={hamburgerClass} onClick={() => toggleMenu()}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AppHeader