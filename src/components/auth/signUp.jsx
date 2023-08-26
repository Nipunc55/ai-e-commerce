import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
import "./login.css";
import { useNavigate } from "react-router-dom";
import signUpImage from "../../assets/images/signUp.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from '@mui/material/TextField';





const SignupForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			console.log(data);

			if (response.ok) {
				navigate("/home");
				console.log(data.message);
			} else {
				// Handle authentication error 
				console.log(data.error);
			}
		} catch (error) {
			// Handle errors
			console.error("Error occurred while calling the API", error);
		}
	};

	return (
		
		<div className='grid_container'>
			
			<div className='signup_container' style={{ backgroundImage: `url(${signUpImage})` }}>
			<form className='form-container' onSubmit={handleSubmit}>
				<h1 className='h1-signUp'>SignUp</h1>
				
			{/* name input */}
						<div className='form-outline mb-1'>
						<TextField fullWidth label="Name" id="fullWidth" />
						</div>
				

				{/* Email input */}
				<div className='form-outline mb-1'>
				<TextField fullWidth label="Email" id="fullWidth" />
				</div>

				{/* Password input */}
				<div className='form-outline mb-4'>
				<FormControl
							sx={{ m: 0, width: "100%" }}
							variant='outlined' id="fullWidth">
							<InputLabel htmlFor='outlined-adornment-password' id="fullWidth">
								Password
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password fullWidth'
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label='Password'
								
							/>
						</FormControl>
				</div>

				{/* Submit button */}
				<button
				   
					type='submit'
					className='btn signup-btn mb-4'>
					Sign up
				</button>
			</form>
			</div>
		</div>
	);
};

export default SignupForm;
