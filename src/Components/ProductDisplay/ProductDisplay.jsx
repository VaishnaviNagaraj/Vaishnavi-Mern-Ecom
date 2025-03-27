import React, { useContext } from "react";
import './ProductDisplay.css'
import Product from "../../Pages/Product";
import star_icon from "../Assets/star_icon.jpg"
import star_dull_icon from "../Assets/star_dull_icon.jpg"
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.title}</h1>
                <div className="productdisplay-right-description">{product.description}</div>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>({product.rating.count})</p>
                </div>
                <div className="productdisplay-right-prices">Rs.{product.price}</div>
                <button className="addToCartButton" onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <Link to="/cart"><button>Go To Cart</button></Link>
            </div>
        </div>
    )
}

export default ProductDisplay;