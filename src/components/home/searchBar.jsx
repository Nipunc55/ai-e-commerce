import React, { useState ,createContext,useEffect} from "react";
import styles from "./searchBar.module.css";
import HorizontalDropdowns from "./dropdownList";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const DropDownInput = createContext();

const SearchBar = ({ GetItems }) => {
	const [userInput, setSearchBarInput] = useState("");
	const [selectedOptions, setSelectedOptions] = useState(
		''
	);
	
	

	const handleSearchBarInput = (event) => {
		setSearchBarInput(event.target.value);
	
		const serachData = { ...selectedOptions, text: userInput};
		setSelectedOptions(serachData);

		// console.log(event.target.value);
	};
	const onDropDownSelect = () => {
		const serachData = { ...selectedOptions, text: userInput };
		setSelectedOptions(serachData);
		console.log(serachData);
	};
	return (
		<>
			<div className={styles.input_group}>
				<div className={styles.form_outline}>
					<input
						type='search'
						id='form1'
						onChange={handleSearchBarInput}
						className={styles.form_control}
						placeholder='I want ...'
					/>
					<label
						className={styles.form_label}
						htmlFor='form1'></label>
				</div>
				<div className={styles.btn_div}>
					<button
					onClick={()=>{GetItems(selectedOptions)}}
						type='button'
						className={styles.btn}>
						<i className='fas fa-search'></i>
					</button>
				</div>
			</div>
			<DropDownInput.Provider value={{ selectedOptions, setSelectedOptions }}>
			 <HorizontalDropdowns onSelect={onDropDownSelect}/>
			</DropDownInput.Provider>
		</>
	);
};

export default SearchBar;
