import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/flaticon.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
// import '../public/css/rtl.css';
import '../public/css/responsive.css';

import '../node_modules/swiper/swiper.scss'

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Loader from '../components/Shared/Loader'; 
import GoTop from '../components/Shared/GoTop';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <GoogleReCaptchaProvider
                reCaptchaKey='6LdRvOQUAAAAALOo5TO6XMs1tXh6B3AqNofrhrta'
            >
                <React.Fragment>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <title>API First Solutions - Building connections.</title>
                    </Head>

                    <Component {...pageProps} />
                    
                    {/* Preloader */}
                    <Loader loading={this.state.loading} />

                    {/* Go Top Button */}
                    <GoTop scrollStepInPx="50" delayInMs="10.50" />
                </React.Fragment>
            </GoogleReCaptchaProvider>
        );
    }
}