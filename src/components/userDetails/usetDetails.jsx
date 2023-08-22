import React, { useState } from 'react';
import styles from './UserDetails.module.css';

const UserDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <div className={styles.user_container}>
            <form className={styles.user_form} onSubmit={handleSubmit}>
                <h1 className={`${styles['h1-login']} ${styles.heading}`}>LogIn</h1>

                <div className={`${styles['userform-outline']} ${styles.mb4}`}>
                    <input
                        type='text'
                        id='form3Example3'
                        className={`form-control ${styles.input}`}
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label
                        className={`${styles['userForm-label']} ${styles.label}`}
                        htmlFor='form3Example3'>
                        Name
                    </label>
                </div>

                {/* Add the other input fields in a similar manner */}

                <div className={styles['userform-outline']}>
                    <button
                        type='submit'
                        className={`btn ${styles['login-btn']} ${styles.mb4} ${styles['me-1']} ${styles['me-lg-4']}`}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserDetails;
