import './card.css'
import React from 'react'

const Card = ({nome, role, caption, photoUrl}) => {
  return (
    <div class='card-wrapper'>
      <img className='card-img' src={photoUrl} alt="" />
      <div className="card-info">
        <h2 className='card-name'>{nome}</h2>
        <h3 className='card-role'>{role}</h3>
        <p className='card-caption'>{caption}</p>
      </div>
    </div>
  )
}

export default Card