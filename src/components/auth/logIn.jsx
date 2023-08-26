import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./logIn.css";
import { useNavigate } from "react-router-dom";
import logInImage from "../../assets/images/logIn.jpg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from '@mui/material/TextField';
import SweetAlert2 from 'react-sweetalert2';

const LoginForm = () => {
	 const [swalProps, setSwalProps] = useState({});
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
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
			const response = await fetch("http://localhost:5000/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();
			if (data.token != null) localStorage.setItem("token", data.token);

			if (response.ok) {
				navigate("/home");

				console.log("Authentication successful");
			} else {
				console.log("Authentication failed");
				setSwalProps({
                    show: true,
                    title: 'Login Faild..',
                    text: 'invalid credentials...',
                });
			}
		} catch (error) {
			// Handle  errors
			console.error("Error occurred while calling the API", error);
		}
	};
	return (
		<div className='grid_container'>
			 <SweetAlert2 {...swalProps} />
			<div
				className='login_container'
				style={{ backgroundImage: `url(${logInImage})` }}>
				<form
					className='login-form'
					onSubmit={handleSubmit}>
					<h1 className='h1-login'>LogIn</h1>

					{/* Email input */}
					<div className='loginform-outline mb-4'>
						<TextField fullWidth label="Email Address" name="email" id="fullWidth" onChange={handleChange} />
					</div>

					{/* Password input */}
					<div className='loginform-outline mb-4'>
						<FormControl
							sx={{ m: 0, width: "100%" }}
							variant='outlined' id="fullWidth">
							<InputLabel htmlFor='outlined-adornment-password' id="fullWidth">
								Password
							</InputLabel>
							<OutlinedInput
							    onChange={handleChange}
							    name="password"
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
						className='btn login-btn mb-4 me-1 me-lg-4'>
						Log In
					</button>

					<button
						className='btn signup-btn mb-4'
						onClick={() => navigate("/signUp")}>
						Sign up
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
