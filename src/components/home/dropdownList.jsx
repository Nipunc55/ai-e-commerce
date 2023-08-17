import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dropdownList.module.css";

const HorizontalDropdowns = ({onSelect}) => {
    const [selectedOptions, setSelectedOptions] = useState({
    situations: null,
    color: null,
    gender: null,
    type: null,
    categories: null,
  });

  const handleDropdownChange = (event, dropdownName) => {
    const newSelectedOptions= {...selectedOptions,
      [dropdownName]: event.target.value,}
    setSelectedOptions(newSelectedOptions);
    onSelect(newSelectedOptions)
    console.log("drop down");
  };
  return (
    <div className={styles.dropdownList_container}>
      <div className={styles.dropdownGrid}>
        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'situations')}>
          <option
            className={styles.items_option}
            value='item1'
            disabled
            selected
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
        </select>

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'situations')}>
          <option
            className={styles.items_option}
            value='item1'
            disabled
            selected
          >
            Colors
          </option>
          <option className={styles.items_option} value='item2'>
            Red
          </option>
          <option className={styles.items_option} value='item3'>
            Blue
          </option>
          <option className={styles.items_option} value='item4'>
            Green
          </option>
          <option className={styles.items_option} value='item4'>
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

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'situations')}>
          <option
            className={styles.items_option}
            value='item1'
            disabled
            selected
          >
            Genders
          </option>
          <option className={styles.items_option} value='item2'>
            Male
          </option>
          <option className={styles.items_option} value='item3'>
            Female
          </option>
          <option className={styles.items_option} value='item4'>
            Unisex
          </option>
        </select>

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'situations')}>
          <option
            className={styles.items_option}
            value='item1'
            disabled
            selected
          >
            Times
          </option>
          <option className={styles.items_option} value='item2'>
            Night
          </option>
          <option className={styles.items_option} value='item3'>
            Morning
          </option>
          <option className={styles.items_option} value='item4'>
            Evening
          </option>
          <option className={styles.items_option} value='item4'>
            Noon
          </option>
        </select>

        <select className={styles.items} onChange={(e) => handleDropdownChange(e, 'situations')}>
          <option
            className={styles.items_option}
            value='item1'
            disabled
            selected
          >
            Categories
          </option>
          <option className={styles.items_option} value='item2'>
            Trousers
          </option>
          <option className={styles.items_option} value='item3'>
            T-Shirts
          </option>
          <option className={styles.items_option} value='item4'>
            Shoues
          </option>
          <option className={styles.items_option} value='item4'>
            Jeans
          </option>
          <option className={styles.items_option} value='item4'>
            Waistcoat
          </option>
          <option className={styles.items_option} value='item4'>
            Blouse
          </option>
          <option className={styles.items_option} value='item4'>
            Jacket
          </option>
          <option className={styles.items_option} value='item4'>
            Dress
          </option>
          <option className={styles.items_option} value='item4'>
            Shirt
          </option>
          <option className={styles.items_option} value='item4'>
            Suit
          </option>
          <option className={styles.items_option} value='item4'>
            Coat
          </option>
          <option className={styles.items_option} value='item4'>
            Shorts
          </option>
          <option className={styles.items_option} value='item4'>
            Sports
          </option>
          <option className={styles.items_option} value='item4'>
            Skirts
          </option>
          <option className={styles.items_option} value='item4'>
            Tops
          </option>
          <option className={styles.items_option} value='item4'>
            Hoodie
          </option>
          <option className={styles.items_option} value='item4'>
            Tie
          </option>
        </select>
      </div>
    </div>
  );
};

export default HorizontalDropdowns;
