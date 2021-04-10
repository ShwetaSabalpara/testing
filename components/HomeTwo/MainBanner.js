import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1>World’s Leading AI & Machine Learning Company</h1>
                            <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>

                            <div className="btn-box">
                                <Link href="/index-2/#">
                                    <a className="btn btn-primary">Schedule a Demo</a>
                                </Link>
                                <Link href="/index-2/#">
                                    <a className="optional-btn">Get Started Free</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="banner-image">
                            <img src="/images/banner-2/banner-2-shape1.png" alt="image" />

                            <ReactWOW delay='.1s' animation='fadeIn'>
                                <img src="/images/banner-2/banner-2-shape2.png" alt="image" />
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/images/banner-2/banner-2-shape3.png" alt="image" />
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src="/images/banner-2/banner-2-shape4.png" alt="image" />
                            </ReactWOW>
                            
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <img src="/images/banner-2/banner-2-shape5.png" alt="image" />
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/images/banner-2/banner-2-shape6.png" alt="image" />
                            </ReactWOW>
                            
                            <ReactWOW delay='.1s' animation='fadeIn'>
                                <img src="/images/banner-2/banner-2-shape7.png" alt="image" />
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInDown'> 
                                <img src="/images/banner-2/banner-2-shape8.png" alt="image" />
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInUp'>
                                <img src="/images/banner-image.png" className="main-pic" alt="image" />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default MainBanner;