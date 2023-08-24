import React, { useState,useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dropdownList.module.css";
import { DropDownInput } from './searchBar';


const categories=["Dress","Heels","Hoodie","Jeans","Shoes","T-Shirt","Top","Shirt","Trousers","Skirt","Sunglass","Watch"]

const HorizontalDropdowns = ({onSelect}) => {
   const { selectedOptions, setSelectedOptions } = useContext(DropDownInput);
 
 const [selectedCatogeries, setSelectedCatogeries] = useState([]);

  const handleCheckboxChange = (option) => {
  
    if (selectedCatogeries.includes(option)) {
      setSelectedCatogeries(selectedCatogeries.filter((item) => item != option));
    } else {
      setSelectedCatogeries([...selectedCatogeries, option]);
    }
    updateInputdata(selectedCatogeries,"categories")
  };
  const updateInputdata = (value, dropdownName) => {
    const newSelectedOptions= {...selectedOptions,
      [dropdownName]: value,}
   
    setSelectedOptions(newSelectedOptions)
    
    console.log(newSelectedOptions);
  };

  const handleDropdownChange = (event, dropdownName) => {
    const newSelectedOptions= {...selectedOptions,
      [dropdownName]: event.target.value,}
   
    setSelectedOptions(newSelectedOptions)
    
    
  };
  return (
    <div className={styles.dropdownList_container}>
      <div className={styles.dropdownGrid}>
        {/* <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'situations')}>
          <option
            className={styles.items_option}
            defaultValue='item1'
            disabled
            
          >
            Situations
          </option>
          <option className={styles.items_option} value='Wedding'>
            Wedding
          </option>
          <option className={styles.items_option} value='Party'>
            Party
          </option>
          <option className={styles.items_option} value='item4'>
            Work
          </option>
          <option className={styles.items_option} value='item5'>
            Casual
          </option>
          <option className={styles.items_option} value='item6'>
            Formal
          </option>
          <option className={styles.items_option} value='item7'>
            Outdoor
          </option>
        </select> */}

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'color')}>
          <option
            className={styles.items_option}
            defaultValue=''
            disabled
            
          >
            Colors
          </option>
          <option className={styles.items_option} value='red'>
            Red
          </option>
          <option className={styles.items_option} value='blue'>
            Blue
          </option>
          <option className={styles.items_option} value='green'>
            Green
          </option>
          <option className={styles.items_option} value='black'>
            Black
          </option>
          <option className={styles.items_option} value='item4'>
            White
          </option>
          <option className={styles.items_option} value='item4'>
            Yellow
          </option>
          <option className={styles.items_option} value='item4'>
            Pink
          </option>
          <option className={styles.items_option} value='item4'>
            Purple
          </option>
        </select>

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'gender')}>
          <option
            className={styles.items_option}
            defaultValue='male'
            disabled
          >
            Genders
          </option>
          <option className={styles.items_option} value='male'>
            Male
          </option>
          <option className={styles.items_option} value='female'>
            Female
          </option>
         
        </select>

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'type')}>
          <option
            className={styles.items_option}
            defaultValue='Type'
            disabled
            
          >
            Type
          </option>
          <option className={styles.items_option} value='night'>
            Night
          </option>
          <option className={styles.items_option} value='morning'>
            Morning
          </option>
          <option className={styles.items_option} value='evening'>
            Evening
          </option>
          <option className={styles.items_option} value='noon'>
            Noon
          </option>
        </select>

        {/* <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'categories')}>
          <option
            className={styles.items_option}
            defaultValue=''
            disabled
            
          >
            Categories
          </option>
          <option className={styles.items_option} value='trousers'>
            Trousers
          </option>
          <option className={styles.items_option} value='t-shirts'>
            T-Shirts
          </option>
          <option className={styles.items_option} value='shoes'>
            Shoues
          </option>
          <option className={styles.items_option} value='jeans'>
            Jeans
          </option>
          <option className={styles.items_option} value='waistcoat'>
            Waistcoat
          </option>
          <option className={styles.items_option} value='blouse'>
            Blouse
          </option>
          <option className={styles.items_option} value='jacket'>
            Jacket
          </option>
          <option className={styles.items_option} value='dress'>
            Dress
          </option>
          <option className={styles.items_option} value='shirt'>
            Shirt
          </option>
          <option className={styles.items_option} value='suit'>
            Suit
          </option>
          <option className={styles.items_option} value='coat'>
            Coat
          </option>
          <option className={styles.items_option} value='shorts'>
            Shorts
          </option>
          <option className={styles.items_option} value='sports'>
            Sports
          </option>
          <option className={styles.items_option} value='skirts'>
            Skirts
          </option>
          <option className={styles.items_option} value='tops'>
            Tops
          </option>
          <option className={styles.items_option} value='hoodie'>
            Hoodie
          </option>
          <option className={styles.items_option} value='tie'>
            Tie
          </option>
        </select> */}

  
      
      </div>
      <div className={styles.checkBox_container}>
       {categories.map((option) => (
        <label key={option}>
          <input
          className={styles.check_box}
            type="checkbox"
            value={option}
            checked={selectedCatogeries.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
      </div>  
    </div>
  );
};

export default HorizontalDropdowns;
