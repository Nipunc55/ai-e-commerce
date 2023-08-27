import { useNavigate, useParams,useLocation  } from "react-router-dom";
import styles from "./cardComponent.module.css";
import { useState } from "react";
import SweetAlert2 from 'react-sweetalert2';

const dressSizes = ["Small", "Medium", "Large", "X-Large"];
const ukShoeSizes = [
  'UK 4',
  'UK 5',
  'UK 6',
  'UK 7',
  'UK 8',
  'UK 9',
 
];

console.log(ukShoeSizes);


const FullCard = () => {
  
  const [productIds, setProductIds] = useState([]);
  const navigate=useNavigate()
  const location = useLocation();
  const data = location.state.data;
 const [swalProps, setSwalProps] = useState({});

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
   setSwalProps({
                    show: true,
                    title: 'Wait',
                    text: 'items are adding...',
                });
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
        // alert("items added successfully...")
        setSwalProps({
                    show: true,
                    title: 'Success',
                    text: 'items added successfully...',
                });
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
         <SweetAlert2 {...swalProps} />
          {Object.keys(data).length>0 && (
           Object.keys(data).map((key)=>(
            <div key={key} className={styles.full_card}>
             <img
              key={key}
              src={`/images/dataset/${data[key]}`}
              alt={key}
              className='img-fluid'
              
            />
           
            <div className={styles.item_details}>
              <h3>Code :{data[key].slice(" ")[0]}</h3>
              <p>price : {100}$</p>
               <input type="checkbox" name="option1" onChange={handleCheckboxChange} value={`${data[key]}`}></input>
            </div>
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
       <label className="mb-2  text" htmlFor="size">Select Shoe Size:</label>
      <select id="size" className="form-control input w-25">
        {ukShoeSizes.map((size, index) => (
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
