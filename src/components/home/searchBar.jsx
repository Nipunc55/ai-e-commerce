import React, { useState ,createContext,useEffect} from "react";
import styles from "./searchBar.module.css";
import HorizontalDropdowns from "./dropdownList";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const DropDownInput = createContext();

const SearchBar = ({ GetItems }) => {
	const [userInput, setUserInput] = useState("");
	const [selectedOptions, setSelectedOptions] = useState({
		situations: null,
		color: null,
		gender: null,
		type: null,
		categories: null,
	});
	useEffect(() => {
	  console.log(selectedOptions);
	}, [selectedOptions])
	

	const handleInputChange = (event) => {
		setUserInput(event.target.value);

		console.log(event.target.value);
	};
	const onDropDownSelect = () => {
		const serachData = { ...selectedOptions, text: userInput };
		setSelectedOptions(serachData);
	};
	return (
		<>
			<div className={styles.input_group}>
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
