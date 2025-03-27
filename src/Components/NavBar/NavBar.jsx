import React, { useContext, useState } from "react"
import './NavBar.css'
import logo from "../Assets/logo.jpg"
import login_icon from "../Assets/login_icon.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"

const NavBar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        for (const inputValue of formData.entries()) {
            console.log(inputValue[1]);
        }
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to='/'><img src={logo} alt="" style={{width:60}}/></Link>
                <Link style={{textDecoration: 'none'}} to='/'><p>Ykart</p></Link>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Men</Link>{menu === "mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
            </ul>

            <ul className="nav-login-cart">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="textbox"></input>
                </form>
                <Link to='/'><button><img src={login_icon} alt="" style={{width:35}}/></button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" style={{width:35}}/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </ul>
        </div>
    )
}

export default NavBar