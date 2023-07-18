import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dropdownList.module.css";

const HorizontalDropdowns = () => {
  return (
    <div className={styles.dropdownList_container}>
      <div className={styles.dropdownGrid}>
        <select className={styles.items}>
          <option className={styles.items_option} value='item1'>
            Item 1
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
            Item 1
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
            Item 1
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
            Item 1
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
            Item 1
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
