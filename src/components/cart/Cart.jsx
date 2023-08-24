import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,useLocation  } from "react-router-dom";

export default function Cart() {
    const [items, setitems] = useState(null)
    const navigate=useNavigate()
     useEffect(() => {
       
     setitems({
        "t-shirt": "3-piece-full-suite (24).jpg",
        "skirt": "3-piece-full-suite (24).jpg",
        "blouse": "3-piece-full-suite (24).jpg",
        "shirt": "3-piece-full-suite (24).jpg",
        "frog": "3-piece-full-suite (24).jpg"
    })
      
     }, [])
     function checkout(){
        navigate('/checkout-user-details')

     }

  return (
    <div className='card_container'>
          {items ? (<>{

           Object.keys(items).map((key)=>(
            <div key={key} className='full_card m-2'>
             <img
              key={key}
              src={`/images/dataset/${items[key]}`}
              alt={key}
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
