import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from 'react-router-dom';
import ContactUs from "../contactUs/contactUs";
import AboutUs from "../aboutUs/aboutUs";

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg '>
			<div className='container-sm'>
				{/* Container wrapper */}
				<div className='container-fluid'>
					{/* Toggle button */}
					<button
						className='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#navbarLeftAlignExample'
						aria-controls='navbarLeftAlignExample'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i className='fas fa-bars'></i>
					</button>

					{/* Collapsible wrapper */}
					<div
						className='collapse navbar-collapse'
						id='navbarLeftAlignExample'>
						{/* Left links */}
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<img
								style={{ width: "90px", height: "40px", borderRadius: "10px" }}
								src='/images/logo.png'></img>
							<li className='nav-item'>
								<a
									className='nav-link active text'
									aria-current='page'
									href='/home'>
									Home
								</a>
							</li>
						</ul>
						{/* Left links */}
						<ul className='nav-item'>
							<a
								className='nav-link text '
								href='/cart'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='1em'
									viewBox='0 0 576 512'>
									<path
										d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'
										fill='#ffffff'
									/>
								</svg>
							</a>
						</ul>
						<ul className='nav-item'>
							<a
								className='nav-link text'
								href='./contactUs' onClick={() => navigate("/contactUs")}>
								Contact Us
							</a>
						</ul>
						<ul className='nav-item'>
							<a
								className='nav-link text'
								href='./aboutUs' onClick={() => navigate("/aboutUs")}>
								About Us
							</a>
						</ul>
						<ul className='nav-item'>
							<a
								className='nav-link text'
								href='/'>
								LogOut
							</a>
						</ul>
					</div>
					{/* Collapsible wrapper */}
				</div>
				{/* Container wrapper */}
			</div>
		</nav>
	);
}

export default Navbar;
