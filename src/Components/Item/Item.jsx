import React from "react";
import { Link } from "react-router-dom"
import './Item.css'

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <div className="image-Div">
          <img src={props.image} alt="" />
        </div>
      </Link>
      <p>{props.name}</p>
      <p className="item-desc">{props.description}</p>
      <p className="item-prices">Rs.{props.price}</p>
      <Link to={`/product/${props.id}`}><button>Add to bag</button></Link>
    </div>
  );
}

export default Item;