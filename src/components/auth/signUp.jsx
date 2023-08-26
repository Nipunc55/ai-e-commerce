import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
import "./login.css";
import { useNavigate } from "react-router-dom";
import signImage from "../../assets/images/sign.png"
const SignupForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
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
			<div className='pic_container'>
				<img src={signImage} />
			</div>

			<div className='login_container '>
			<form className='form-container' onSubmit={handleSubmit}>
				<h1 className='h1-signUp'>SignUp</h1>
				{/* 2 column grid layout with text inputs for the first and last names */}
				<div className='row mb-4'>
					<div className='col'>
						<div className='form-outline'>
							<input
								type='text'
								id='form3Example1'
								className='form-control'
								name={"name"}
								value={formData.name}
								onChange={handleChange}
							/>
							<label
								className='form-label'
								htmlFor='form3Example1'>
								First Name
							</label>
						</div>
					</div>
				</div>

				{/* Email input */}
				<div className='form-outline mb-4'>
					<input
						type='email'
						id='form3Example3'
						className='form-control'
						name={"email"}
						value={formData.email}
						onChange={handleChange}
					/>
					<label
						className='form-label'
						htmlFor='form3Example3'>
						Email Address
					</label>
				</div>

				{/* Password input */}
				<div className='form-outline mb-4'>
					<input
						type='password'
						id='form3Example4'
						className='form-control'
						name={"password"}
						value={formData.password}
						onChange={handleChange}
					/>
					<label
						className='form-label'
						htmlFor='form3Example4'>
						Password
					</label>
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
