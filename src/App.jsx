import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/logIn";
import SignupForm from "./components/auth/signUp";
import Home from "./components/home";
import FullCard from "./components/home/FullCard";
import Navbar from "./components/home/navBar";
import Footer from "./components/home/footer";
import CardDetailsForm from "./components/cardDetails/cardDetails";
import Cart from "./components/cart/Cart";
import AboutUs from "./components/aboutUs/aboutUs";
import homeImage from "./assets/images/home.jpg"
import ContactUs from "./components/contactUs/contactUs";
import { Height } from "@mui/icons-material";



function App() {
  const hideNavbarPaths = ["/logIn", "/signUp"];

  return (
    <>
      <div
        className="main-container"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundAttachment:"fixed",
         height:"100vh"
        }}
      >
        <Router>
          <Routes>
            <Route path="/logIn" element={<LoginForm />} />
            {/* <Route path="/contactUs" element={<ContactUs />} /> */}
            <Route path="/" element={<LoginForm />} />
            {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
            <Route path="/signUp" element={<SignupForm />} />
            <Route
              path="/*"
              element={<MainContent hideNavbarPaths={hideNavbarPaths} />}
            />
          </Routes>
        </Router>
        {/* <Footer /> */}
      </div>
    </>
  );
}

function MainContent({ hideNavbarPaths }) {
  const currentPath = window.location.pathname;

  const shouldHideNavbar = hideNavbarPaths.includes(currentPath);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<FullCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-user-details" element={<CardDetailsForm />} />
		    <Route path="/contactUs" element={<ContactUs />} />
		    <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;