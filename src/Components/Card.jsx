import React from 'react'

import "./card.css"
function Card (props) {
      return (
        <div className='card'>
            <h2 >{props.heading}</h2>
            <img src={props.image} alt={props.imgname} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
  )
}

export default Card