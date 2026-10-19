import React from 'react'
import { useState } from 'react'

function Button() {
  const [liked, setLiked] = useState(false);
  return (
    <div className='btn'>
      
       <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ liked " : "🤍  like"}
       </button>

       <div>
        
       </div>

    </div>
  )
}

export default Button