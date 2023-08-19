import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const footerStyle = {
	position: "fixed",
	left: 0,
	bottom: 0,
	width: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	color: "white",
	textAlign: "center",
	padding: "1rem",
};

function Footer() {
	return (
		<footer className='bg-light text-center text-lg-start fixed-bottom'>
			{/* Copyright */}
			<div
				className='text-center p-3'
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				© {new Date().getFullYear()} Copyright:
				<a
					className='text-dark'
					href='https://mdbootstrap.com/'>
					MDBootstrap.com
				</a>
			</div>
			{/* Copyright */}
		</footer>
	);
}

export default Footer;
