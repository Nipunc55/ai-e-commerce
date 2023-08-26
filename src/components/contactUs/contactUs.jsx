import React, { useState } from 'react';
import styles from "./contactUs.css";
import contactUsImage from "../../assets/images/contactUs.jpg";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process and handle the form submission
    };

    return (
        <div className="contact-us" style={{ backgroundImage: `url(${contactUsImage})`}}>
            <h2>Contact Us</h2>
            <form className="contactUs-form" onSubmit={handleSubmit}>
                <div >
                
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
            
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>
                <div>
                
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;
