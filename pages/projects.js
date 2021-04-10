import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Our Projects" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Our Projects" 
                    bgImgClass="item-bg1" 
                />  

                <div className="projects-area ptb-110">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-fireehr-login.jpg" alt="image" />
                                    
                                    <div className="plus-icon">
                                        <Link href="/project-details/fireehr">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                                <h5 style={{ textAlign: 'center'}}>FireEHR</h5>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-larapaymongo.jpg" alt="image" />
                                    
                                    <div className="plus-icon">
                                        <Link href="/project-details/larapaymongo">
                                            <a><span></span></a>
                                        </Link>
                                    </div>
                                </div>
                                <h5 style={{ textAlign: 'center'}}>LaraPaymongo</h5>
                            </div>

                        </div>
                    </div>

                    <div className="circle-shape1">
                        <img src="/images/projects-shape.png" alt="image" />
                    </div>
                </div>
            
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects;