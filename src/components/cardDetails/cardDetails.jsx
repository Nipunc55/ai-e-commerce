import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './cardDetails.module.css';

const CardDetailsForm = () => {
    const initialValues = {
        cardNumber: '',
        cardName: '',
        expirationDate: '',
        cvv: ''
    };

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string().required('Card number is required'),
        cardName: Yup.string().required('Cardholder name is required'),
        expirationDate: Yup.string().required('Expiration date is required'),
        cvv: Yup.string().required('CVV is required')
    });

    const handleSubmit = (values) => {
        // form submission logic
    };

    return (
        <div className={styles.card_container}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.card_form}>
                <h1 className={`${styles['h1-card']} ${styles.heading}`}>Card Details</h1>

                <div className={`${styles['cardform-outline']} ${styles.mb4}`}>
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

                <div className={`${styles['cardform-outline']} ${styles.mb4}`}>
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

                <div className={`${styles['cardform-outline']} ${styles.mb4}`}>
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

                <div className={`${styles['cardform-outline']} ${styles.mb4}`}>
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

                <div className={styles['cardform-outline']}>
                    <button
                        type='submit'
                        className={`btn ${styles['submit-btn']} ${styles['me-1']} ${styles['me-lg-4']}`}
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
        </div>
    );
};

export default CardDetailsForm;
