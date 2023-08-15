
import CardContainer from "./cardComponent";
import styles from "./cardGrid.module.css";
const cards=[1,2,3,4,5]
const CardGrid = () => {
  return (
    <div className={styles.card_grid}>
      {cards.map( (item,index)=>{
        return<CardContainer key={index} id={item}/>

      })}
      
     
    </div>
  );
};

export default CardGrid;
