import React, {createContext, useEffect, useState} from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 5; index < 9; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = items.find((product) => product.id===Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;    
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {items, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;