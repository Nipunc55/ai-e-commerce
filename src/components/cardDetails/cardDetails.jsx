import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./cardDetails.module.css";
import CheckoutModal from "../popUpModel/PopUp";
import SweetAlert2 from 'react-sweetalert2';

import { useNavigate, useParams, useLocation } from "react-router-dom";
const CardDetailsForm = () => {
	const navigate = useNavigate();
	 const [swalProps, setSwalProps] = useState({});
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
	
const completeCheckout = async (data) => {

	setSwalProps({
                    show: true,
                    title: 'Wait',
                    text: 'Items are being checked out...',
                });
    try {
     const token= localStorage.getItem("token");
      const response = await fetch('http://localhost:5000/users/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      
        },
        body: JSON.stringify({  "email":`${data.email}`,
                               "productDetails":{"name":"shirt","price":"100$"},
							   "address":`${data.address}`

                              }),
      });
     

      if (response.ok) {
        // const succes = await response.json();
        // console.log('Cart items:', cartItems);
        // alert("items checkout successfully...")
        setModalShow(true);
      
      } else {
        console.error('Failed to complete checkout!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
	

	const handleSubmit = (values) => {
		

		completeCheckout(values);
	};

	const handleModalClose = () => {
		setModalShow(false);
		navigate("/home");
	};
	
	

	

	return (
		<div className={styles.card_container}>
			 <SweetAlert2 {...swalProps} />
			<Formik
				className='form-group'
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<Form className={styles.card_form}>
					<h2 className={`${styles["h2-card"]} ${styles.heading} text`}>
						Card Details
					</h2>
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


                    <h2 className={`${styles["h2-card"]} ${styles.heading} text`}>
						Delivery Details
					</h2>
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
