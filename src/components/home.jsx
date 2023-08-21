import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./home/searchBar";
import HorizontalDropdowns from "./home/dropdownList";
import CardGrid from "./home/cardGrid";
import { useState } from "react";
import Navbar from "./home/navBar";
import Footer from "./home/footer";

function Home() {
	const [items, setItems] = useState([]);
	async function GetItems(data) {
		const baseUrl = "http://127.0.0.1:8000/predict";
		const {
			text = "i want to participate to wedding at night",
			color = "white",
			type = "wedding",
			situation = "morning",
			categories = "t-shirt",
			gender = "male",
		} = data;
		
		console.log(`${type}/${color}/${situation}/${gender}/${categories}`);
		try {
			const response = await fetch(
				`${baseUrl}/${type}/${color}/${situation}/${gender}/${categories},skirt,blouse,shirt,frog`,
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
				<SearchBar
					GetItems={(data) => {
						GetItems(data);
					}}
				/>
				{items.length>0 ?(<CardGrid itemList={items} />):(<div className="empty-card-grid">Serach...</div>)}
				
			</div>
			
		</>
	);
}

export default Home;
