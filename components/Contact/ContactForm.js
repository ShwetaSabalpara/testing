import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';
import { ReCaptcha } from '../../utils/ReCaptcha';

const alertContent = () => {
    MySwal.fire({
        title: 'Message Sent',
        text: 'We will get back to you soon as possible.',
        icon: 'success',
        showConfirmButton: true,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();
    const [captchaToken, setCaptchaToken] = useState('');
    
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handleCaptchaChange = (event) => {
        setCaptchaToken(event.target.value);
      };

    const onSubmit = async (data, event) => {
        event.preventDefault();

        if (captchaToken === '') {
            return;
        }

        try {
            const url = `${baseUrl}/api/contact`;
            await axios.post(url, data);
            setContact(INITIAL_STATE);
            reCaptchaRef.current.generateNewCaptcha();
            alertContent();
        } catch (error) {
            throw error;
        }
    };

    const reCaptchaRef = React.useRef();

    return (
        <React.Fragment>
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                placeholder="Name" 
                                value={contact.name}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.name && 'Name is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email" 
                                value={contact.email}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.email && 'Email is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="number" 
                                className="form-control" 
                                placeholder="Phone" 
                                value={contact.number}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.number && 'Number is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                className="form-control" 
                                placeholder="Subject" 
                                value={contact.subject}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.subject && 'Subject is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="text" 
                                className="form-control" 
                                cols="30" 
                                rows="5" 
                                placeholder="Your message" 
                                value={contact.text}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.text && 'Message body is required.'}
                            </div>
                        </div>
                    </div>
            

                    <div className='invalid-feedback' style={{display: 'block'}}>
                        { captchaToken === '' ? 'reCaptcha error. Please reload the page.' : ''}
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                    <ReCaptcha ref={reCaptchaRef} value={captchaToken} onChange={handleCaptchaChange} action="CONTACT_US"/>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;