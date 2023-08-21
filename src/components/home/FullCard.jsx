import { useNavigate, useParams,useLocation  } from "react-router-dom";
import styles from "./cardComponent.module.css";

import CardPopup from "./cardPopup";

const FullCard = () => {
  const location = useLocation();
  const data = location.state.data;
  
  return (
    <div className={styles.full_card_container} >
      <div className={styles.card_container}>
          {Object.keys(data).length>0 && (
           Object.keys(data).map((key)=>(
            <div key={key} className={styles.full_card}>
             <img
              key={key}
              src={`/images/dataset/${data[key]}`}
              alt={key}
              className='img-fluid'
              
            />
            <input type="checkbox" name="option1" value="value1"></input>
            </div>
          ))
        )}
      </div>
      <div className={styles.description}>
        <h3 className={styles.card_title}>Item name with description</h3>
        <h5>20$</h5>
        <p className='card-text'>Free Shipping</p>
      </div>
    </div>
  );
};

export default FullCard;
