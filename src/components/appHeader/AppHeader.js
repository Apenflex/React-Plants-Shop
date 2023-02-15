
import './appHeader.scss'

import logoHeader from '../../resources/img/logo/logo_header.svg'

const AppHeader = () => {

    return (
        <div className="app-header">
            <div className="container">
                <div className="app-header-wrapper">
                    <div className="app-header-logo">
                        <a href="/">
                            <img src={logoHeader} alt="company logo about plants" />
                        </a>
                    </div>
                    
                    <nav className="app-header-menu">
                        <a href="/">About us</a>
                        <a href="/">Plants</a>
                        <a href="/">Pricing</a>
                        <a href="/">Testimonials</a>
                        <a href="/">Contact us</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default AppHeader