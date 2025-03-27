import React, {useEffect, useState} from "react";
import Item from "../Item/Item";
import './AllProducts.css'

const AllProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="all">
      <h1>Classic Jewellery</h1>
      <hr/>
      <div className="all-item">
        {items.map((item,i) => {
          if(item.category == 'jewelery') {
            return <Item key={i} id={item.id} image={item.image} name={item.title} description={item.description} price={item.price}/>
          }
        })}
      </div>
    </div>
  );
}

export default AllProducts;