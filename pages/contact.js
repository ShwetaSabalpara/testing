import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactFormContent from '../components/Contact/ContactFormContent';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Contact Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact Us" 
                    bgImgClass="item-bg3" 
                />  
                <ContactFormContent />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Contact;