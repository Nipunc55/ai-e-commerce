import { useNavigate, useParams,useLocation  } from "react-router-dom";
import styles from "./cardComponent.module.css";
import { useEffect, useState } from "react";
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

let randomPrices=[]


const FullCard = () => {
  
  const [productIds, setProductIds] = useState([]);
  const navigate=useNavigate()
  const location = useLocation();
  const data = location.state.data;
 const [swalProps, setSwalProps] = useState({});
 const [shoe, setShoe] = useState(false);

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
  useEffect(() => {
    // Check if any object field contains "Heels" or "Shoes"
  //  const hasShoeOrHeels = data.names.some(name =>
  //     name.includes('Heels') || name.includes('Shoes')
  //   );
  // const hasShoeOrHeels = Object.values(data).some(value =>
  //     value.includes('Heels') || value.includes('Shoes')
  //   );
   const hasShoeOrHeels = Object.values(data).some(value =>
      value.includes('Heels') || value.includes('Shoes')
    );
 


    setShoe(Object.keys(data).includes('Heels')||Object.keys(data).includes('Shoes'));
  }, [data]);
  

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

function getRandomPrice() {
  // Returns a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}
useEffect(() => {
  Object.keys(data).map((key)=>(
    randomPrices.push(getRandomPrice())
  ))
}, [])


 function addToCart(){


  navigate('/cart')
 }
  return (
    <div className={styles.full_card_container} >
     
      <div className={styles.card_container}>
         <SweetAlert2 {...swalProps} />
          {Object.keys(data).length>0 && (
           Object.keys(data).map((key,index)=>(
            <div key={key} className={styles.full_card}>
             <img
              key={key}
              src={`/images/dataset/${data[key]}`}
              alt={key}
              className='img-fluid'
              
            />
           
            <div className={styles.item_details}>
              <h3>Code :{data[key].replace(/\.[^/.]+$/, '')}</h3>
              <p>price : { randomPrices[index]} LKR</p>
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
     {shoe ? (<>
        <label className="mb-2  text" htmlFor="size">Select Shoe Size:</label>
      <select id="size" className="form-control input w-25">
        {ukShoeSizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select></>
      ) : (
        null
      )}
       
      <button className="btn btn-warning mt-2" onClick={handleAddToCart}>Add To Cart</button>
    </div>
    </div>
  );
};

export default FullCard;
