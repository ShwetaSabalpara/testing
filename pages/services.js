import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Services from '../components/HomeTwo/Services';
import Footer from '../components/Layouts/Footer';

class ServicesTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Services" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services" 
                    bgImgClass="item-bg2" 
                />  
                <Services />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServicesTwo;