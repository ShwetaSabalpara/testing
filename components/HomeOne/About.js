import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/about1.jpg" alt="image" />
                                <img src="/images/about/about2.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2 style={{ textTransform: 'inherit' }}>What is API-nization?</h2>
                                <p>
                                    Think of a Retail & Distribution company. What if partner retailers can query about
                                    products that are available in warehouse, distributor prices, and post orders at any given time? 
                                    Retailers using an Application Programming Interface (API) can do seamless Business-to-Business 
                                    transactions, improving business efficiency. The possibilities are endless with API-nization.
                                </p>

                                <p>
                                    API First Solution is a system integrator that provide technical designs, infrastructure, security and 
                                    service management for customers wanting to build APIs for their businesses.
                                </p>
                                <Link href="/contact">
                                    <a className="btn btn-primary">Discover More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default About;