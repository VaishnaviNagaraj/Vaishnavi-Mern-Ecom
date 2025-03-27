import React, {useContext} from "react";
import { Link } from "react-router-dom";
import './CheckOutItems.css'

import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/remove_icon.png'

const CheckoutItems = () => {
    const {items, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className="checkoutItems">
        <div className="checkoutItems-shipping-details">
            <p>Shipping Address</p>
            <textarea name="shipping-address" rows="4" cols="50" />
        </div>
        <hr />
        <div className="checkoutItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
        {items.map((e)=>{
            if(cartItems[e.id] > 0)
            {
                return <div>
                        <div className="checkoutItems-format">
                            <img src={e.image} alt="" className="checkoutItems-product-icon" />
                            <p>{e.title}</p>
                            <p>Rs.{e.price}</p>
                            <button className="checkoutItems-quantity">{cartItems[e.id]}</button>
                            <p>Rs.{e.price*cartItems[e.id]}</p>
                            <img className="checkoutItems-remove-icon" src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                        </div>
                        <hr/>
                    </div>
            }
            return null;
        })}
        <div className="checkoutItems-down">
            <div className="checkoutItems-total">
                <h4>Order Summary</h4>
                <div>
                    <div className="checkoutItems-total-items">
                        <p>Sub Total</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="checkoutItems-total-items">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="checkoutItems-total-items">
                        <h4>Total</h4>
                        <h4>Rs.{getTotalCartAmount()}</h4>
                    </div>
                    <Link to="/ordersummary"><button>PLACE ORDER</button></Link>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default CheckoutItems;