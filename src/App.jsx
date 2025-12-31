
import Navbar from './Components/Navbar'
import Card from './Components/Card'

import React from 'react'
import './index.css'

import beauty from "./images/beauty.png"
import bathroom from "./images/bathroom.jpg"
import cleaning from "./images/cleaning.jpg"
import wallpapers from "./images/wallpapers.jpg"
import hometools from "./images/home-tools.jpg"
import ac from "./images/ac.jpg"
import wash from "./images/wash.jpg"
import micro from "./images/micro.jpg"
import ref from "./images/ref.jpg"
import comp from "./images/comp.png"

const App = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className='cards'>
        <Card heading="Best Sellers in Beauty" image={beauty}></Card>
        <Card heading="Home Essential" image={cleaning}></Card> 
        <Card heading="Electronics" image={micro}></Card> 
        <Card heading="Computer" image={comp}></Card> 
      </div>
    </>
  )
}

export default App