
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import SignupForm from "./signUp";
import LoginForm from "./logIn";
import Home from "./home";
import CardPopup from "./assets/component/cardPopup";
=======


>>>>>>> fbcbbd80a292740ecd765021d1deac4abd186eb0
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./components/auth/logIn";
import SignupForm from "./components/auth/signUp";
import Home from "./components/home";
import FullCard from "./components/home/FullCard";

function App() {
 

  return (
    <>
<<<<<<< HEAD
      <div className='main-container'>
        <nav class='navbar  navbar-light bg-light'>
          <div class='container-sm'>
            <a class='navbar-brand' href='#'>
              Navbar
            </a>
          </div>
        </nav>
        <div className='container-sm'>
=======
      {/* <div className='main-container'>
        <div className='container-sm'> */}
>>>>>>> fbcbbd80a292740ecd765021d1deac4abd186eb0
          <Router>
            <Routes>
              <Route path='/' exact element={<LoginForm/>} />
              <Route path='/signUp' element={<SignupForm/>} />
              <Route path='/home' element={<Home />} />
<<<<<<< HEAD
              <Route path='/cardPopup' element={<CardPopup />} />
=======
              <Route path='/card/:id' element={<FullCard  />} />
>>>>>>> fbcbbd80a292740ecd765021d1deac4abd186eb0
            </Routes>
          </Router>
        {/* </div>
      </div> */}
    </>
  );
}

export default App;
