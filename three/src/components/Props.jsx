import React from 'react'

function Props(detail) {
  return (
    <div className='profile'>
        <h1>Profile Section</h1>
        <img src={detail.picture} alt="" />
        <div className='detail'>
            <h2>Name: <span>{detail.name}</span></h2>
            <h3>Age: <span>{detail.age}</span></h3>
        </div>
        
    </div>
  )
}

export default Props