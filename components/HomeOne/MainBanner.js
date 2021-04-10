import React, { Component } from 'react';
import Link from 'next/link';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">

                <div>
                    <Swiper
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide className="main-banner-imgs">
                            <img src="images/main-banner.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="main-banner-imgs">
                            <img src="images/main-banner.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="main-banner-imgs">
                            <img src="images/main-banner.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="main-banner-content">
                                <h1>Building Connections.</h1>
                                <p>
                                    Expand your business capabilities by leveraging the power of connections through APIs.
                                    Allow your partners connect with your business and vice-versa. We are here to support you build those connections.
                                </p>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Discover More</a>
                                    </Link>
                                    {/* <Link href="#">

                                        <a className="optional-btn">Contact Us</a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-gear"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Application Development</a>
                                        </Link>
                                    </h3>
                                    <p>
                                        We specialize in application development for web, desktop and mobile platforms,
                                        including E-commerce solutions, Android/iOS apps and Analytics Dashboards.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-molecular"></i>
                                    </div>


                                    <h3>
                                        <Link href="/service-details">
                                            <a>Managed Cloud Services</a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Allow us to analyze, design, build and manage your cloud infrastrucure in the
                                        GCP, Digital Ocean, MS Azure or AWS - so you can focus more on things that
                                        matter most in your business.
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
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
                </div>
            </div>
        );
    }
}

export default MainBanner;