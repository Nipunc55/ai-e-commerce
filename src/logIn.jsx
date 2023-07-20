import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className='signIn_container'>
      <form className='form-container'>
        <h1 className='h1-signUp'>LogIn</h1>

        {/* Email input */}
        <div className='form-outline mb-4'>
          <input type='email' id='form3Example3' className='form-control' />
          <label className='form-label' htmlFor='form3Example3'>
            Email address
          </label>
        </div>

        {/* Password input */}
        <div className='form-outline mb-4'>
          <input type='password' id='form3Example4' className='form-control' />
          <label className='form-label' htmlFor='form3Example4'>
            Password
          </label>
        </div>

        {/* Submit button */}
        <button
          type='submit'
          className='btn signup-btn mb-4 me-4'
          onClick={() => navigate("/home")}
        >
          Log In
        </button>

        <button
          type='submit'
          className='btn signup-btn mb-4'
          onClick={() => navigate("/signUp")}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
