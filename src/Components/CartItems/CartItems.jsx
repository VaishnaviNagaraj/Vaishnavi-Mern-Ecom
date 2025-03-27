import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const {items, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className="cartItems">
        <div className="cartItems-format-main">
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
                        <div className="cartitems-format">
                            <img src={e.image} alt="" className="cartitems-product-icon" />
                            <p>{e.title}</p>
                            <p>Rs.{e.price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>Rs.{e.price*cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                        </div>
                        <hr/>
                    </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h4>Order Summary</h4>
                <div>
                    <div className="cartitems-total-items">
                        <p>Sub Total</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                        <h4>Total</h4>
                        <h4>Rs.{getTotalCartAmount()}</h4>
                    </div>
                    <Link to="/checkout"><button>CHECKOUT</button></Link>
                </div>
                <div className="cartitems-promocode">
                    <p>Enter your Coupon Code here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Coupon code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CartItems;