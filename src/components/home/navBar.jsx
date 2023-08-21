import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
							<li className='nav-item'>
								<a
									className='nav-link active'
									aria-current='page'
									href='/home'>
									Home
								</a>
							</li>
							
							
						</ul>
						{/* Left links */}
						<ul className='nav-item'>
								<a className='nav-link ' href='/'>LogOut</a>
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
