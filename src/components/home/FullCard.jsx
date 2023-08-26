import { useNavigate, useParams,useLocation  } from "react-router-dom";
import styles from "./cardComponent.module.css";
import { useState } from "react";


const dressSizes = ["Small", "Medium", "Large", "X-Large"];

const FullCard = () => {
  
  const [productIds, setProductIds] = useState([]);
  const navigate=useNavigate()
  const location = useLocation();
  const data = location.state.data;


  const handleCheckboxChange = (event) => {
    console.log(productIds);
    const selectedProductId = event.target.value;
    if (event.target.checked) {
      setProductIds((prevProductIds) => [...prevProductIds, selectedProductId]);
    } else {
      setProductIds((prevProductIds) =>
        prevProductIds.filter((id) => id !== selectedProductId)
      );
    }
  };

 const handleAddToCart = async () => {
    try {
     const token= localStorage.getItem("token");
      const response = await fetch('http://localhost:5000/users/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
         
        },
        body: JSON.stringify({ productIds }),
      });
     

      if (response.ok) {
        const cartItems = await response.json();
        console.log('Cart items:', cartItems);
        alert("items added successfully...")
        navigate('/cart')
      
      } else {
        console.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            <input type="checkbox" name="option1" onChange={handleCheckboxChange} value={`${data[key]}`}></input>
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
      <button className="btn btn-warning mt-2" onClick={handleAddToCart}>Add To Cart</button>
    </div>
    </div>
  );
};

export default FullCard;
