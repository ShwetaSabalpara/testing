import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/white-logo.png" alt="image" />
                                    </a>
                                    <p>Building Connections.</p>
                                </div>

                                {/* <ul className="social">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="flaticon-facebook-letter-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="flaticon-instagram-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="flaticon-youtube-play-button"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* <div className="single-footer-widget">
                                <h3>Services</h3>

                                <ul className="footer-services-list">
                                    <li>
                                        <Link href="/service-details">
                                            <a>Application Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>E-Commerce Solutions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Federated Access Management</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Managed Cloud Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Development Tools</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Consultancy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links-list">
                                    {/* <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>*/}
                                    <li>
                                        <Link href="/projects">
                                            <a>Our Projects</a>
                                        </Link>
                                    </li> 
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Pricing</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>

                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Address:</span> 
                                        Buhangin, Davao City, Philippines
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <img src="/images/email_small.png" />
                                    </li>
                                    {/* <li>
                                        <span>Phone:</span> 
                                        +63 928 455 8739
                                    </li> */}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright &copy;{currentYear} API First Solutions. All Rights Reserved.</p>
                            </div>

                            {/* <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="circle-map">
                    <img src="/images/circle-map.png" alt="image" />
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;