import { useNavigate } from 'react-router-dom';
import styles from "./cardComponent.module.css";

const CardContainer = ({data}) => {
  
   const navigate = useNavigate();
  
    const navigateToDestination = () => {
    navigate('/card', {
      state: { data } // Pass data directly without the "props" key
    });
  };
  return (
    <div className={styles.card} onClick={navigateToDestination}>
      <div className={styles.image_container}>
        {Object.keys(data).length>0 && (
          Object.keys(data).map((key)=>(
             <img
              key={key}
              src={`/images/dataset/${data[key]}`}
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

export default CardContainer;
