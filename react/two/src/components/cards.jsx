
import React from 'react'

function Cards(prop) {

    console.log(prop.User)
  return (
    <div className='card'>
        <h1>{prop.User},{prop.age}</h1>
        <img src={prop.img} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio animi saepe, quas veritatis recusandae beatae accusamus magnam placeat nesciunt?</p>
    </div>
  )
}

export default Cards