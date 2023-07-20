import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dropdownList.module.css";

const HorizontalDropdowns = () => {
  return (
    <div className={styles.dropdownList_container}>
      <div className={styles.dropdownGrid}>
        <select className={styles.items} value='Style'>
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
            Item 2
          </option>
          <option className={styles.items_option} value='item3'>
            Item 3
          </option>
          <option className={styles.items_option} value='item4'>
            Item 4
          </option>
        </select>

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
            Genders
          </option>
          <option className={styles.items_option} value='item2'>
            Item 2
          </option>
          <option className={styles.items_option} value='item3'>
            Item 3
          </option>
          <option className={styles.items_option} value='item4'>
            Item 4
          </option>
        </select>

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
            Times
          </option>
          <option className={styles.items_option} value='item2'>
            Item 2
          </option>
          <option className={styles.items_option} value='item3'>
            Item 3
          </option>
          <option className={styles.items_option} value='item4'>
            Item 4
          </option>
        </select>

        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
            Categories
          </option>
          <option className={styles.items_option} value='item2'>
            Item 2
          </option>
          <option className={styles.items_option} value='item3'>
            Item 3
          </option>
          <option className={styles.items_option} value='item4'>
            Item 4
          </option>
        </select>
      </div>
    </div>
  );
};

export default HorizontalDropdowns;
