import React, { useState } from "react";
import styles from "./userDetails.module.css";
import { useNavigate, useParams,useLocation  } from "react-router-dom";
const UserDetails = () => {
	 const navigate=useNavigate()
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/checkout-card-details')
	};

	return (
		<div className={styles.user_container}>
			<form
				className="form-group"
				onSubmit={handleSubmit}>
				<h1 className={`${styles["h1-login"]} ${styles.heading} text`}>Details</h1>

				{/* Name Input */}
				<div className={`${styles["userform-outline"]} ${styles.mb4}`}>
					<input
						type='text'
						id='form3Example3'
						className={`form-control ${styles.input}`}
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
					<label
						className={`${styles["userForm-label"]} ${styles.label} text`}
						htmlFor='form3Example3'>
						Name
					</label>
				</div>

				{/* Email Input */}
				<div className={`${styles["userform-outline"]} ${styles.mb4}`}>
					<input
						type='email'
						id='form3Example4'
						className={`form-control ${styles.input}`}
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
					<label
						className={`${styles["userForm-label"]} ${styles.label} text`}
						htmlFor='form3Example4'>
						Email
					</label>
				</div>

				{/* Phone Number Input */}
				<div className={`${styles["userform-outline"]} ${styles.mb4} text`}>
					<input
						type='tel'
						id='form3Example5'
						className={`form-control ${styles.input}`}
						name='phone'
						value={formData.phone}
						onChange={handleChange}
					/>
					<label
						className={`${styles["userForm-label"]} ${styles.label} text`}
						htmlFor='form3Example5'>
						Phone Number
					</label>
				</div>

				{/* Address Input */}
				<div className={styles["userform-outline"]}>
					<input
						type='text'
						id='form3Example6'
						className={`form-control ${styles.input}`}
						name='address'
						value={formData.address}
						onChange={handleChange}
					/>
					<label
						className={`${styles["userForm-label"]} ${styles.label} text`}
						htmlFor='form3Example6'>
						Address
					</label>
				</div>

				{/* Submit button */}
				<div className={styles["userform-outline"]}>
					<button
						type='submit'
						className={`btn ${styles["submit-btn"]} ${styles.mb4} ${styles["me-1"]} ${styles["me-lg-4"]}`}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserDetails;
