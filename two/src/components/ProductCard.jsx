import React from 'react'
import { data } from '../data/data'

function ProductCard(props) {
  return (
    <div className='cards'>
     <img src={props.image} alt="" />
     <h2>{props.title}</h2>
     <p>{props.category}</p>
     <h3>${props.price}</h3>
     <h4>⭐ {props.rating}</h4>

     {
      props.stock > 50
      ?
      <button>In stock</button>
      :
      <button className='low'>Low Stock</button>
     }
    </div>
  )
}

export default ProductCard