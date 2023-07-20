import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dropdownList.module.css";

const HorizontalDropdowns = () => {
  return (
    <div className={styles.dropdownList_container}>
      <div className={styles.dropdownGrid}>
        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
            Situations
          </option>
          <option className={styles.items_option} value='item2'>
            Wedding
          </option>
          <option className={styles.items_option} value='item3'>
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

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
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

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
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

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
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

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
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
