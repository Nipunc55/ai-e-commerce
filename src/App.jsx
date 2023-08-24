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
import UserDetails from "./components/userDetails/usetDetails";
import CardDetailsForm from "./components/cardDetails/cardDetails";
import Cart from "./components/cart/Cart";

function App() {

  
	return (
		<>
			<div className='main-container'>
				<Navbar />
				<Router>
					<Routes>
						<Route
							path='/logIn'
							exact
							element={<LoginForm />}
						/>
						<Route
							path='/usetDetails'
							exact
							element={<UserDetails />}
						/>
						<Route
							path='/'
							exact
							element={<LoginForm />}
						/>
            <Route
							path='/card-details'
							exact
							element={<CardDetailsForm />}
						/>
						<Route
							path='/signUp'
							element={<SignupForm />}
						/>
						<Route
							path='/home'
							element={<Home />}
						/>
						<Route
							path='/card'
							element={<FullCard />}
						/>
            <Route
							path='/cart'
							element={<Cart />}
						/>
            <Route
							path='/checkout-user-details'
							element={<UserDetails />}
						/>
             <Route
							path='/checkout-card-details'
							element={<CardDetailsForm />}
						/>
					</Routes>
				</Router>
				<Footer />
			</div>
		</>
	);
}

export default App;
