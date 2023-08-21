import { useNavigate, useParams,useLocation  } from "react-router-dom";
import styles from "./cardComponent.module.css";

import CardPopup from "./cardPopup";

const FullCard = () => {
  const location = useLocation();
  const data = location.state.data;
  const param=useParams()
  console.log(param);
  return (
    <div className={styles.card} >
      <div className={styles.image_container}>
          {Object.keys(param).length>0 && (
          Object.keys(param).map((key)=>(
             <img
              key={key}
              src={`/images/dataset/${param[key]}`}
              alt={key}
              className='img-fluid'
              // style={{ width: '100px', height: '100px', margin: '10px' }}
            />
          ))
        )}
      </div>
      <div>
        <h3 className={styles.card_title}>Item name with description</h3>
        <h5>20$</h5>
        <p className='card-text'>Free Shipping</p>
      </div>
    </div>
  );
};

export default FullCard;
