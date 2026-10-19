import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(10)
  return (
    <div className='profile'>
        <h1>Study Counter</h1>
        <p>The task completed is : {count}</p>
         <div className='small'>
             <button onClick={() => setCount(count + 1)}>Imcrease ++</button>
             <button onClick={() => setCount(count - 1)}>Decrease --</button>
         </div>

    </div>
  )
}

export default Count