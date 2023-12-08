import React, { useState } from "react";
import './Navbar.css'
import logo from '../images/2tan_logo.jpg';
import cart from '../images/4car_logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu,setMenu] = useState("gold");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo}/>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("gold")}}><Link style={{textDecoration: 'none'}} to='/gold'>Gold</Link>{menu==="gold"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("silver")}}><Link style={{textDecoration: 'none'}} to='/Silver'>Silver</Link>{menu==="silver"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("diamond")}}><Link style={{textDecoration: 'none'}} to='/diamond'>Diamond</Link>{menu==="diamond"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/signup'><button>SignUp</button></Link>
                <Link to='/cart'><img src={cart}/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar