import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./cardDetails.module.css";
import CheckoutModal from "../popUpModel/PopUp";
import { useNavigate, useParams, useLocation } from "react-router-dom";
const CardDetailsForm = () => {
	const navigate = useNavigate();
	const [modalShow, setModalShow] = useState(false);
	const initialValues = {
		cardNumber: "",
		cardName: "",
		expirationDate: "",
		cvv: "",
		email: "",
		phoneNumber: "",
		address: "",
	};

	const validationSchema = Yup.object().shape({
		cardNumber: Yup.string().required("Card number is required"),
		cardName: Yup.string().required("Cardholder name is required"),
		expirationDate: Yup.string().required("Expiration date is required"),
		cvv: Yup.string().required("CVV is required"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		phoneNumber: Yup.string().required("Phone number is required"),
		address: Yup.string().required("Address is required"),
	});
	
const completeCheckout = async () => {
    try {
     const token= localStorage.getItem("token");
      const response = await fetch('http://localhost:5000/users/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          // You might need to include additional headers like authentication
        },
        body: JSON.stringify({  "mail":"nipunchathuranga45@gmail.com",
      "productDetails":{"name":"shirt","price":"100$"

      } }),
      });
     

      if (response.ok) {
        // const succes = await response.json();
        // console.log('Cart items:', cartItems);
        alert("items checkout successfully...")
        setModalShow(true);
        // You can update the UI or state with the updated cart items here
      } else {
        console.error('Failed to complete checkout!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
	

	const handleSubmit = (values) => {
		// form submission logic

		completeCheckout();
	};

	const handleModalClose = () => {
		setModalShow(false);
		navigate("/home");
	};

	

	return (
		<div className={styles.card_container}>
			<Formik
				className='form-group'
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<Form className={styles.card_form}>
					<h1 className={`${styles["h1-card"]} ${styles.heading} text`}>
						Card Details
					</h1>
					{/* Add card number field */}
					<div className={`${styles["cardform-outline"]} ${styles.mb4}`}>
						<Field
							type='text'
							name='cardNumber'
							className={`form-control ${styles.input}`}
							placeholder='Card Number'
						/>
						<ErrorMessage
							name='cardNumber'
							component='div'
							className={`${styles.error} ${styles.redError}`}
						/>
					</div>

					{/* Add holders name field */}
					<div className={`${styles["cardform-outline"]} ${styles.mb4}`}>
						<Field
							type='text'
							name='cardName'
							className={`form-control ${styles.input}`}
							placeholder='Cardholder Name'
						/>
						<ErrorMessage
							name='cardName'
							component='div'
							className={`${styles.error} ${styles.redError}`}
						/>
					</div>

					<div className={`${styles["row-with-inline"]} ${styles.mb4}`}>
						{/* Add expiration field */}
						<div className={`${styles["cardform-outline"]}`}>
							<Field
								type='text'
								name='expirationDate'
								className={`form-control ${styles.input}`}
								placeholder='Expiration Date'
							/>
							<ErrorMessage
								name='expirationDate'
								component='div'
								className={`${styles.error} ${styles.redError}`}
							/>
						</div>

						{/* Add cvv field */}
						<div className={`${styles["cardform-outline"]}`}>
							<Field
								type='text'
								name='cvv'
								className={`form-control ${styles.input}`}
								placeholder='CVV'
							/>
							<ErrorMessage
								name='cvv'
								component='div'
								className={`${styles.error} ${styles.redError}`}
							/>
						</div>
					</div>


                    <h1 className={`${styles["h1-card"]} ${styles.heading} text`}>
						Delivery Details
					</h1>
					{/* Add email field */}
					<div className={`${styles["cardform-outline"]} ${styles.mb4}`}>
						<Field
							type='email'
							name='email'
							className={`form-control ${styles.input}`}
							placeholder='Email'
						/>
						<ErrorMessage
							name='email'
							component='div'
							className={`${styles.error} ${styles.redError}`}
						/>
					</div>

					{/* Add phone number field */}
					<div className={`${styles["cardform-outline"]} ${styles.mb4}`}>
						<Field
							type='tel'
							name='phoneNumber'
							className={`form-control ${styles.input}`}
							placeholder='Phone Number'
						/>
						<ErrorMessage
							name='phoneNumber'
							component='div'
							className={`${styles.error} ${styles.redError}`}
						/>
					</div>

					{/* Add address field */}
					<div className={`${styles["cardform-outline"]} ${styles.mb4}`}>
						<Field
							type='text'
							name='address'
							className={`form-control ${styles.input}`}
							placeholder='Address'
						/>
						<ErrorMessage
							name='address'
							component='div'
							className={`${styles.error} ${styles.redError}`}
						/>
					</div>

					<div className={styles["cardform-outline"]}>
						<button
							type='submit'
							className={`btn ${styles["submit-btn"]} ${styles["me-1"]} ${styles["me-lg-4"]}`}>
							Submit
						</button>
					</div>
				</Form>
			</Formik>

			<CheckoutModal
				show={modalShow}
				onClose={handleModalClose}
			/>
		</div>
	);
};

export default CardDetailsForm;
