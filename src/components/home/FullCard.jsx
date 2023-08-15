import { useNavigate, useParams } from "react-router-dom";
import styles from "./cardComponent.module.css";
import {useNavigate} from "react-router-dom";
import CardPopup from "./cardPopup";

<<<<<<< HEAD:src/assets/component/cardComponent.jsx
const CardContainer = () => {
  const navigate = useNavigate();
=======
const FullCard = () => {
  const param=useParams()
>>>>>>> fbcbbd80a292740ecd765021d1deac4abd186eb0:src/components/home/FullCard.jsx
  return (
    <div className={styles.card} >
      <div className={styles.image_container}>
        {param.id}
        <img
          src='./icons/tone-on-tone-dressing-blue-oxford-shirt.png'
          className='img-fluid'
          alt='Card Image'
          onClick={() => navigate("/cardPopup")}
        />
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
