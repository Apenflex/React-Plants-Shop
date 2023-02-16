
import LogoFooter from '../../resources/img/logo/logo_footer.svg';

import './appFooter.scss';

const AppFooter = () => {

    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="footer_items">
                        <a href="/" class="footer_links-logo">
                            <img src={LogoFooter} alt="logo company"/>
                        </a>
                        <div class="footer_links">
                            <a href="/">About us</a>
                            <a href="/">Plants</a>
                            <a href="/">Pricing</a>
                            <a href="/">Testmonials</a>
                            <a href="/">Contact us</a>
                        </div>
                    </div>
                    <div class="footer_rights">
                        <div class="rights-text">© Created by</div>
                        <div class="rights-text">All rights Reserved</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default AppFooter;