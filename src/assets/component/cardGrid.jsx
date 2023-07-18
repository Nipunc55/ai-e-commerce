import React from "react";
import CardContainer from "./cardComponent";
import styles from "./cardGrid.module.css";

const CardGrid = () => {
  return (
    <div className={styles.card_grid}>
      <CardContainer />
      <CardContainer />
    </div>
  );
};

export default CardGrid;
