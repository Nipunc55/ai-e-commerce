
import CardContainer from "./cardComponent";
import styles from "./cardGrid.module.css";
const cards=[1,2,3,4,5]
const CardGrid = ({itemList}) => {
  console.log(itemList.length>0);
 
  return (
    <div className={styles.card_grid}>
      {itemList.length<1?(null):(itemList.map( (item,index)=>{
        
        return<CardContainer key={index} id={index} data={item}/>

      }))}
      
      
     
    </div>
  );
};

export default CardGrid;
