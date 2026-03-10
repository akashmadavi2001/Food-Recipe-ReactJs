import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({ food: { idMeal, strMeal, strMealThumb, strTags } }) {
  return (
    <Link to={`../${idMeal}`}>
      <div className="card">
        <img src={strMealThumb} alt="img" />
        <h4>{strMeal}</h4>
        {/* <h5>{strTags}</h5> */}
        <button></button>
      </div>
    </Link>
  )
}
