import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import soap from "./soap.jpg"
import lotion from "./lotion.jpg"
import shampoo from "./shampoo.jpg"
import scalpepro from "./scalpe-pro.jpg"
import beauty from "./beauty.png"
import bathroom from "./bathroom.jpg"
import cleaning from "./cleaning.jpg"
import wallpapers from "./wallpapers.jpg"
import hometools from "./home-tools.jpg"
import ac from "./ac.jpg"
import wash from "./wash.jpg"
import micro from "./micro.jpg"
import ref from "./ref.jpg"
import comp from "./comp.png"
library.add(fas, far, fab)

import React from 'react'
import './index.css'


const App = () => {
  return (
    <><div className='navbar'>
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
    <div className="cards">
      <div className="beauty-card">
        <h2>Best Sellers in Beauty</h2>
        <img className="beauty-img"src={beauty} alt="" />
      </div>
      <div className="top-deals">
        <div className="heading">
        <h2>Deals On Home Essentials</h2>
        </div>
        
        <div className="line1">
        <img className="cleaning-img"src={cleaning} alt="cleaning" />
        <img className="bathroom-img"src={bathroom} alt="bathroom" />
        </div>
        <div className="line2">
        <img className="hometools-img"src={hometools} alt="home-tools" />
        <img className="wallpapers-img"src={wallpapers} alt="wallpapers" />
        </div>

      </div>
      <div className="home-appliance">
        <div className="heading">
          <h2>Appliances for your home</h2>

        </div>
        <div className="line1">
        <img className="ac-img"src={ac} alt="ac" />
        <img className="ref-img"src={ref} alt="ref" />
        </div>
        <div className="line2">
        <img className="micro-img"src={micro} alt="microwave" />
        <img className="wash-img"src={wash} alt="wash" />
        </div>
      </div>
      <div className="comp-card">
        <h2>Best Sellers in Computers & Accessories</h2>
        <img className="comp-img"src={comp} alt="comp-img" />
      </div>
    </div>
    </>
  )
}

export default App