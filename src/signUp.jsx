import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className='signIn_container'>
      <form className='form-container'>
        <h1 className='h1-signUp'>SignUp</h1>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className='row mb-4'>
          <div className='col'>
            <div className='form-outline'>
              <input type='text' id='form3Example1' className='form-control' />
              <label className='form-label' htmlFor='form3Example1'>
                First name
              </label>
            </div>
          </div>
          <div className='col'>
            <div className='form-outline'>
              <input type='text' id='form3Example2' className='form-control' />
              <label className='form-label' htmlFor='form3Example2'>
                Last name
              </label>
            </div>
          </div>
        </div>

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
          className='btn signup-btn mb-4'
          onClick={() => navigate("/home")}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;