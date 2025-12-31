import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './navbar.css'
library.add(fas, far, fab)

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav1">
            <div className="logo">Happy Cart</div>
            <div className="search">
                <input type="text" className="search-bar" placeholder="Search for Products,Brands And More" />
            </div>
            <div className="loginfull">
                <div className="login-icon"><FontAwesomeIcon icon="fa-regular fa-user" /></div>
                <div className="login">Log in</div>
            </div>
            <div className="cartfull">
                <div className="cart-icon"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></div>
                <div className="cart">Cart</div>
            </div>
            <div className="menu"><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></div>
        </div>
        <div className="products">
            <div className="electronics">Electronics</div>
            <div className="fashion">Fashion</div>
            <div className="grocery">Grocery</div>
            <div className="home-furniture">Home & Furniture</div>
        </div>
    </div>
  )
}

export default Navbar