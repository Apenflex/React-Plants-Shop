import { useState } from 'react';

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
                        <a href="/">
                            <img src={logoHeader} alt="company logo about plants" />
                        </a>
                    </div>
                    
                    <nav className={menuClass}>
                        <a href="/" onClick={onLinkClick}>About us</a>
                        <a href="/" onClick={onLinkClick}>Plants</a>
                        <a href="/" onClick={onLinkClick}>Pricing</a>
                        <a href="/" onClick={onLinkClick}>Testimonials</a>
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