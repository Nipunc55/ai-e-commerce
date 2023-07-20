import {useState} from "react";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "./signUp";
import LoginForm from "./logIn";
import Home from "./home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='main-container'>
        <div className='container-sm'>
          <Router>
            <Routes>
              <Route path='/' exact element={<LoginForm />} />
              <Route path='/signUp' element={<SignupForm />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
