import React from "react";
import styles from "./aboutUs.css";
import aboutUsImage from "../../assets/images/aboutUs.jpg";

const AboutUs = () => {
	return (
		<div className='about-us' style={{ backgroundImage: `url(${aboutUsImage})`}}>
			<h2>About Us</h2>
			<p>
				Welcome to our AI-powered e-commerce clothing platform. We are dedicated
				to reshaping your online shopping experience by seamlessly integrating
				cutting-edge artificial intelligence algorithms. Our platform is
				meticulously designed to enhance Sri Lankan Consumer Search Engine
				Optimization (SEO) for clothing-related items. With personalized
				clothing package recommendations at the forefront, we're here to
				redefine your fashion journey and provide you with a tailor-made
				shopping adventure that reflects your unique style and preferences. Join
				us as we lead the way in combining technology and fashion, offering a
				seamless and personalized shopping experience like no other.
			</p>
		</div>
	);
};

export default AboutUs;
