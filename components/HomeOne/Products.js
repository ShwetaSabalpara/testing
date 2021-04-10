import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));


const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
}

class Products extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="products-area ptb-110 bg-f2f6f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Products</h2>
                        
                    </div>


                    {this.state.display ? <OwlCarousel 
                    className="plain-slides owl-carousel owl-theme"
                        {...options}
                    >
                    
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="products-image">
                                    <img src="/images/about/about1.jpg" alt="image" />
                                    {/* <img src="/images/about/about2.jpg" alt="image" /> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="products-content">
                                    <h2 style={{ textTransform: 'inherit' }}>FireEHR - Electronic Health Records Platform</h2>
                                    <p>
                                        FireEHR is an integrated Electronic Health Records solution in web and and mobile platform, 
                                        based on HL7 FHIR health care data exchange standard. It is scalable for single practitioners, 
                                        small clinics or hospital setting, and an be deployed either on-premise or in the Cloud.
                                    </p>

                                    <p>
                                        FireEHR features include Patient Information and History, Appointments and Scheduling, 
                                        Clinical Obeservations and Encounters. Mobile apps for both practitioners and patients 
                                        are also available. 
                                    </p>

                                    <Link href="/about">
                                        <a className="btn btn-primary">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="products-image">
                                    {/* <img src="/images/about/about1.jpg" alt="image" /> */}
                                    <img src="/images/about/about2.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2 style={{ textTransform: 'inherit' }}>LaraPaymongo - Payment Gateway Plugin for Laravel</h2>
                                    <p>
                                        LaraPaymongo is a Laravel Plugin for 
                                        integrating <a href="https://paymongo.com" target="_blank">Paymongo</a> &nbsp;
                                        Payment Gateway for Laravel e-commerce websites in the Philippines. 
                                    </p>

                                    <p>
                                        The plugin supports multiple payment modes including Credit/Debit Cards, &nbsp;
                                        <a href="https://www.gcash.com" target="_blank">GCash</a> and &nbsp;
                                        <a href="https://www.grab.com/sg/pay/" target="_blank">GrabPay</a>
                                    </p>

                                    <Link href="/about">
                                        <a className="btn btn-primary">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel> : ''}

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

export default Products;