import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./home/searchBar";
import HorizontalDropdowns from "./home/dropdownList";
import CardGrid from "./home/cardGrid";
import { useState } from "react";

function Home() {

	const [items, setItems] = useState([])
	async function GetItems(data) {
		const baseUrl = "http://127.0.0.1:8000/predict";
		const {
			text = "i want to participate to wedding at night",
			color = "white",
			type = "wedding",
			situation="morning",
			categories = "t-shirt",
			gender = "male",
		} = {
			text: "i want to participate to wedding at night",
			color : "white",
			type : "wedding",
			situation:"morning",
			categories : "t-shirt",
			gender : "male",
		};
		//${text}
		console.log(text, type, gender, categories);
		try {
			const response = await fetch(
				`${baseUrl}/${type}/${color}/${situation}/${gender}/${categories},skirt`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			
			if(!response.ok){
				alert("no data found")
			}

			const data = await response.json();
			
			if(response.ok)setItems(data);

		} catch (error) {
			// Handle any network or other errors
			console.error("Error occurred while calling the API", error);
		}
	}

	return (
		<>
			<div className='container-sm'>
				<SearchBar GetItems={(data)=>{GetItems(data)}} />
				<CardGrid itemList={items}/>
			</div>
		</>
	);
}

export default Home;
