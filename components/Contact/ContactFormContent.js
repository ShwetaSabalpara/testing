import React, { Component } from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

class ContactFormContent extends Component {
    render() {
        return (
            <section className="contact-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <span>Send us a message</span>
                        <h2>Our team will be glad to help</h2>
                        <p>For inquiries, consultations, or requests for quotations.</p>
                    </div>

                    <div className="contact-form">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-image">
                                    <img src="/images/contact.png"  alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className="contact-info">
                        <div className="contact-info-content">
                            <h3>You can also reach us by email at:</h3>
                            <h2>
                                {/* <span className="number">+088 130 629 8615</span>
                                <span className="or">OR</span>
                                <span className="email">team@apifirstsolutions.com</span> */}
                                <img src="/images/email_big.png" width="300px" />
                            </h2>

                            {/* <ul className="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormContent;