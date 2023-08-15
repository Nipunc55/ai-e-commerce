import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signUp.css";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
const navigate=useNavigate()
   const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

       const data = await response.json();
      if(data.token!=null) localStorage.setItem('token', data.token);

      if (response.ok) {
        navigate("/home")
        
        console.log('Authentication successful');
      } else {
        
        console.log('Authentication failed');
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Error occurred while calling the API', error);
    }
  };
  return (
    <div className='auth_container'>
      <form className='form-container'onSubmit={handleSubmit}>
        <h1 className='h1-signUp'>LogIn</h1>

        {/* Email input */}
        <div className='form-outline mb-4'>
          <input type='email' id='form3Example3' className='form-control' name={"email"} value={formData.email} onChange={handleChange}/>
          <label className='form-label' htmlFor='form3Example3'>
            Email address
          </label>
        </div>

        {/* Password input */}
        <div className='form-outline mb-4'>
          <input type='password' id='form3Example4' className='form-control' name={"password"} value={formData.password} onChange={handleChange}/>
          <label className='form-label' htmlFor='form3Example4'>
            Password
          </label>
        </div>

        {/* Submit button */}
        <button
          type='submit'
          className='btn signup-btn mb-4 me-4'
         
        >
          Log In
        </button>

        <button
         
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
