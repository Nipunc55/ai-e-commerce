import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./logIn.css";
import { useNavigate } from "react-router-dom";
import signImage from "../../assets/images/sign.png"
const LoginForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

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
			}
		} catch (error) {
			// Handle any network or other errors
			console.error("Error occurred while calling the API", error);
		}
	};
	return (
		<div className='grid_container'>
			<div className='pic_container'>
				<img src={signImage} />
			</div>

			<div className='login_container '>
				<form
					className='login-form'
					onSubmit={handleSubmit}>
					<h1 className='h1-login'>LogIn</h1>

					{/* Email input */}
					<div className='loginform-outline mb-4'>
						<input
							type='email'
							id='form3Example3'
							className='loginform-control'
							name={"email"}
							value={formData.email}
							onChange={handleChange}
						/>
						<label
							className='loginform-label'
							htmlFor='form3Example3'>
							Email address
						</label>
					</div>

					{/* Password input */}
					<div className='loginform-outline mb-4'>
						<input
							type='password'
							id='form3Example4'
							className='loginform-control'
							name={"password"}
							value={formData.password}
							onChange={handleChange}
						/>
						<label
							className='loginform-label'
							htmlFor='form3Example4'>
							Password
						</label>
					</div>

					{/* Submit button */}
					<button
						type='submit'
						className='btn login-btn mb-4 me-4'>
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
