import React from "react";
import { Link } from "react-router-dom"
import './OrderSumDetails.css';

const OrderSumDetails = () => {
  return (
    <div className="order-sum-details">
      <p>Order Confirmed &#x1F389;</p>
      <div className="order-details">
        Your product will be delivered on <br/> &#x1F4C6; 1st April 2025 <br/> &#x1F3E1; to your location.
      </div>
      <Link to='/'><button onClick={alert('Placing your order')}>Go back to Home</button></Link>
    </div>
  );
}

export default OrderSumDetails;