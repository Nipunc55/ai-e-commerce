import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./home/searchBar";
import HorizontalDropdowns from "./home/dropdownList";
import CardGrid from "./home/cardGrid";
import { useState } from "react";
import homeImage from "../assets/images/home.jpg";
import Navbar from "./home/navBar";
import Footer from "./home/footer";

function Home() {
	const [items, setItems] = useState([]);
	async function GetItems(data) {
		const baseUrl = "http://127.0.0.1:8000/predict";
		const {
			text = "i want to participate",
			color = "white",
			type = "Casual",
			categories = "t-shirt",
			gender = "male",
		} = data;

		console.log(`/${text}/${color}/${gender}/${type}/${categories}`);
		try {
			const response = await fetch(
				`${baseUrl}/${text}/${color}/${gender}/${type}/${categories}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				alert("no data found");
			}

			const data = await response.json();

			if (response.ok) setItems(data);
		} catch (error) {
			// Handle any network or other errors
			console.error("Error occurred while calling the API", error);
		}
	}

	return (
		<>
			<div className='container-sm'>
				<div className='home-background' style={{ backgroundImage: `url(${homeImage})`  , backgroundRepeat: "no-repeat" , backgroundSize: "100%"}}>
					<SearchBar
						GetItems={(data) => {
							GetItems(data);
						}}
					/>
					{items.length > 0 ? (
						<CardGrid itemList={items} />
					) : (
						<div className='empty-card-grid text'></div>
					)}
				</div>
			</div>
		</>
	);
}

export default Home;
