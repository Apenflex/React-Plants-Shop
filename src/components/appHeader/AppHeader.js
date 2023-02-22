import { useState } from 'react';
import { Link } from 'react-router-dom';

import logoHeader from '../../resources/img/logo/logo_header.svg'

import './appHeader.scss'

const AppHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const onHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    }

    const onLinkClick = () => {
        setMenuOpen(false);
    }

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
                        <Link to="/about/" onClick={onLinkClick}>About us</Link>
                        <a href="/" onClick={onLinkClick}>Plants</a>
                        <Link to="/blog/" onClick={onLinkClick}>Blog</Link>
                        <Link to="/pricing/" onClick={onLinkClick}>Pricing</Link>
                        <Link to="/testimonials/" onClick={onLinkClick}>Testimonials</Link>
                        <a href="/" onClick={onLinkClick}>Contact us</a>
                    </nav>
                </div>
                <div className={hamburgerClass} onClick={onHamburgerClick}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader