
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./components/auth/logIn";
import SignupForm from "./components/auth/signUp";
import Home from "./components/home";
import FullCard from "./components/home/FullCard";
import Navbar from "./components/home/navBar";
import Footer from "./components/home/footer";




function App() {


  return (
    <>
      <div className='main-container'>
        <Navbar />
          <Router>
            <Routes>
              <Route path='/' exact element={<LoginForm/>} />
              <Route path='/signUp' element={<SignupForm/>} />
              <Route path='/home' element={<Home />} />
              <Route path='/card' element={<FullCard  />} />
            </Routes>
          </Router>
       <Footer />
        </div>
    </>
  );
}

export default App;
