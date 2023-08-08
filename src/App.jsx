
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./components/auth/logIn";
import SignupForm from "./components/auth/signUp";
import Home from "./components/home";
import FullCard from "./components/home/FullCard";

function App() {
 

  return (
    <>
      {/* <div className='main-container'>
        <div className='container-sm'> */}
          <Router>
            <Routes>
              <Route path='/' exact element={<LoginForm/>} />
              <Route path='/signUp' element={<SignupForm/>} />
              <Route path='/home' element={<Home />} />
              <Route path='/card/:id' element={<FullCard  />} />
            </Routes>
          </Router>
        {/* </div>
      </div> */}
    </>
  );
}

export default App;
