import React from 'react'
import './styles/Card.css'

const Card = ({ icon, title, text }) => {
  return (
    <div className='curriculum-card'>
      <img src={icon} alt="card icon"/>
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
