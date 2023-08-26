import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,useLocation  } from "react-router-dom";

export default function Cart() {
  const [items, setitems] = useState([])
  const navigate=useNavigate()
   const getCartItems = async () => {
    try {
     const token= localStorage.getItem("token");
      const response = await fetch('http://localhost:5000/users/cart-items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        
        },
        
      });
     

      if (response.ok) {
        const cartItems = await response.json();
        console.log('Cart items:', cartItems);
       setitems(cartItems)
        
      } else {
        console.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

     useEffect(() => {
       getCartItems()
    //  setitems({
    //     "t-shirt": "3-piece-full-suite (24).jpg",
    //     "skirt": "3-piece-full-suite (24).jpg",
    //     "blouse": "3-piece-full-suite (24).jpg",
    //     "shirt": "3-piece-full-suite (24).jpg",
    //     "frog": "3-piece-full-suite (24).jpg"
    // })
      
     }, [])
     function checkout(){
        navigate('/checkout-user-details')

     }

  return (
    <div className='card_container'>
          {items.length>0 ? (<>{

           items.map((obj,index)=>(
            <div key={index} className='full_card m-2'>
             <img
              key={index}
              src={`/images/dataset/${obj.productId}`}
              alt={index}
              className='img-fluid'
              
            />
            {/* <input type="checkbox" name="option1" value="value1"></input> */}
            </div>
          ))}
          <div className='w-100 m-3'><button className="btn w-80 btn-danger " onClick={checkout}>Buy Now</button></div>
          </>
        ):(<div className='w-100 m-5'><div className='card p-5 d-flex'><h2>No Items in cart</h2></div></div>)}
      </div>
  )
}
