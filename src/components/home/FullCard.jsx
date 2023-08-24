import { useNavigate, useParams,useLocation  } from "react-router-dom";
import styles from "./cardComponent.module.css";


const dressSizes = ["Small", "Medium", "Large", "X-Large"];

const FullCard = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const data = location.state.data;
 function addToCart(){
  navigate('/cart')
 }
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
     <div className="form-group m-3">
      <label className="mb-2  text" htmlFor="size">Select Dress Size:</label>
      <select id="size" className="form-control input w-25">
        {dressSizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
      <button className="btn btn-warning mt-2" onClick={addToCart}>Add To Cart</button>
    </div>
    </div>
  );
};

export default FullCard;
