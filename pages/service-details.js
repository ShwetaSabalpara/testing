import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Security & Surveillance" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Service Details" 
                    bgImgClass="item-bg2" 
                />  
                <ServiceDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;