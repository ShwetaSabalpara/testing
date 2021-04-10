import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="services-area bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Specialties</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-artificial-intelligence"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Business API-nization</a>
                                    </Link>
                                </h3>
                                <p>
                                    Integrate your business data with your partners using the power of APIs. 
                                    We can help build your B2B, B2C or C2C infrastructures, from design, implementation,
                                    security and deployment.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-gear"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Web, Desktop and Mobile Development</a>
                                    </Link>
                                </h3>
                                <p>
                                    We provide Application Development services for Web, Desktop and Mobile Platforms, 
                                    using Progressive Web technologies, with code that is maintainable, 
                                    feature-scalable and are developer-friendly.


                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-income"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>E-Commerce Solutions</a>
                                    </Link>
                                </h3>
                                <p>
                                    Sell your products in web an mobile platforms. 
                                    Manage orders, inventory, and process online payments.
                                    We can help you setup your e-commerce platform.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-locked"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Federated Identity Management</a>
                                    </Link>
                                </h3>
                                <p>
                                    Our Federated Access Management Platform allow companies or organizations
                                    to authenticate their users when accessing applications that were traditionally 
                                    restricted within the corporate networks.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-robot"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Cloud CI/CD Tools</a> 
                                    </Link>
                                </h3>
                                <p>
                                    Thinking of building your Continous Integration and Delivery pipelines in the Cloud?
                                    With our extensive experience on application development, we know how to keep developers 
                                    happy with their tools.

                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-ceo"></i>
                                </div>

                                <h3>
                                    <Link href="/service-details">
                                        <a>Consultancy</a>
                                    </Link>
                                </h3>
                                <p>
                                    With our 11 years of experience working with different industries - 
                                    E-commerce, Cyber-security, Finance, Public Utilities, 
                                    Retail and Distribution, we can share our knowledge to 
                                    take your business to the next level.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
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
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot3.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot4.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot5.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot6.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default Services;