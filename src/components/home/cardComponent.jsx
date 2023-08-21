import { useNavigate,useHistory  } from "react-router-dom";
import styles from "./cardComponent.module.css";

const CardContainer = (props) => {
  const navigate=useNavigate()
   const history = useHistory();
  function cardOnClick(){
      navigate(`/card/${props.data}`)
   history.push({
      pathname: '/card',
      state: { },
    });
       console.log(props.data);
  }
  return (
    <div className={styles.card} onClick={cardOnClick}>
      <div className={styles.image_container}>
        {Object.keys(props.data).length>0 && (
          Object.keys(props.data).map((key)=>(
             <img
              key={key}
              src={`/images/dataset/${props.data[key]}`}
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
