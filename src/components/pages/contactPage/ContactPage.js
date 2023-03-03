
import AppHeader from '../../appHeader/AppHeader'
import AppFooter from '../../appFooter/AppFooter'
import Form from '../../contactForm/Form'

import GoogleMap from '../../../resources/img/google_maps.png'

import './contactPage.scss'

const ContactPage = () => {

    return (
        <>
            <AppHeader />
            <section className="contact_page">
                <div className="container">
                    <div className="contact_page_wrapper">
                        <div className="contact_page_left">
                            <div className="contact_page_left_section-name">
                                PLANT STORE
                            </div>
                            <h1 className="contact_page_left_title">
                                Contacts
                            </h1>
                            <div className="contact_page_left_contacts-block">
                                <div className="contact_page_left_address">
                                    <div className="contact_page_left_address-title">
                                        Address
                                    </div>
                                    {/* <div > */}
                                    <a className="contact_page_left_address-text"
                                        href='https://goo.gl/maps/DssZPZ1sJd7q7nSK6' rel="noreferrer" target="_blank">
                                        84-4 127th St, Kew Gardens,
                                        <span>NY 11415, USA</span>
                                    </a>
                                    {/* </div> */}
                                </div>
                                <div className="contact_page_left_hours">
                                    <div className="contact_page_left_hours-title">
                                        Hours
                                    </div>
                                    <div className="contact_page_left_hours-text">
                                        <span>Monday - Saturday: 11 AM - 9 PM</span>
                                        <span>Sunday: 11 AM - 7 PM</span>
                                    </div>
                                </div>
                                <div className="contact_page_left_phone">
                                    <div className="contact_page_left_phone-title">
                                        Contacts
                                    </div>
                                    <div className="contact_page_left_phone-text">
                                        <a href="tel:+1(234)5678900">+1 (234) 567 89 00</a>
                                        <span>plantland@email.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_page_left_map">
                                <img src={GoogleMap} alt="GoogleMap" />
                            </div>
                        </div>
                        <div className="contact_rigth">
                            <div className="contact_rigth_wrapper">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}

export default ContactPage