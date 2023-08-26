import React, { useState } from "react";
import styles from "./contactUs.css";
import contactUsImage from "../../assets/images/contactUs.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
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
		<div
			className='contact-us'
			style={{ backgroundImage: `url(${contactUsImage})` }}>
			<form
				className='contactUs-form'
				onSubmit={handleSubmit}>
				<h2>Contact Us</h2>
				<div className='contact-TextField'>
					<TextField
						fullWidth
						label='Name'
						id='fullWidth'
					/>
				</div>
				<div className='contact-TextField'>
					<TextField
						fullWidth
						label='Email'
						id='fullWidth'
					/>
				</div>
				<div className='contact-TextField'>
					<TextField
						fullWidth
						label='Subject'
						id='fullWidth'
					/>
				</div>
                <div className='contact-TextField' >
					<TextField
						fullWidth
						label='Message'
						id='fullWidth'
					/>
				</div>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
};

export default ContactUs;
