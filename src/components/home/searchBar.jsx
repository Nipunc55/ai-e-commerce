import React, { useState } from "react";
import styles from "./searchBar.module.css";
import HorizontalDropdowns from "./dropdownList";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SearchBar = ({ GetItems }) => {
	const [userInput, setUserInput] = useState("");
	const [selectedOptions, setSelectedOptions] = useState({
		situations: null,
		color: null,
		gender: null,
		type: null,
		categories: null,
	});

	const handleInputChange = (event) => {
		setUserInput(event.target.value);

		console.log(event.target.value);
	};
	const search = () => {
		const serachData = { ...selectedOptions, text: userInput };
		GetItems(serachData);
	};
	return (
		<>
			<div class={styles.input_group}>
				<div className={styles.form_outline}>
					<input
						type='search'
						id='form1'
						className={styles.form_control}
						placeholder='Search here...'
					/>
					<label
						className={styles.form_label}
						htmlFor='form1'></label>
				</div>
				<div className={styles.btn_div}>
					<button
						type='button'
						className={styles.btn}>
						<i class='fas fa-search'></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
