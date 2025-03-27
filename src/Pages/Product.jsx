import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const {items} = useContext(ShopContext);
  const {productId} = useParams();
  const product = items.find((e) => e.id === Number(productId));
  
  return (
    <div className="products-div">
      <ProductDisplay product={product}/>
    </div>
  );
}

export default Product;