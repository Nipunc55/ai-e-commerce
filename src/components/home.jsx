import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./home/searchBar";
import HorizontalDropdowns from "./home/dropdownList";
import CardGrid from "./home/cardGrid";

function Home() {
	async function GetItems(data) {
		const baseUrl = "http://127.0.0.1:8000/predict/";
		const {
			text = "i want to participate to wedding at night",
			color = "white",
			type = "formal",
			categories = "t-shirt",
			gender = "male",
		} = {
			text: "i want to participate to wedding at night",
			color: "white",
			type: "formal",
			categories: "t-shirt",
			gender: "male",
		};
		console.log(text, type, gender, categories);
		try {
			const response = await fetch(
				`${baseUrl}/${text}/${color}/${gender}/${type}/${categories}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.json();
			if (data.token != null) localStorage.setItem("token", data.token);

			if (response.ok) {
				navigate("/home");
			} else {
			}
		} catch (error) {
			// Handle any network or other errors
			console.error("Error occurred while calling the API", error);
		}
	}

	return (
		<>
			<div className='container-sm'>
				<SearchBar GetItems={GetItems} />
				<CardGrid />
			</div>
		</>
	);
}

export default Home;
