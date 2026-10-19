//use iffect
import { useEffect, useState } from "react";
import React from 'react'

function Uses() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    // first = side-effect function
    //second =first clean-up function
    // third = coma seprated dep list

    //variant: 1 
    // run on every render

    //variation 2 
    // run on only first render

    //variation 3
    // will run everytime wehn the state will update

    //variation 5
    // handls multiple dependiencies



     useEffect(() => {
       // runs on each render
     })

     useEffect(() => {
       //runs on only 1st render.
     }, [])
     

     useEffect(() => {
       // will run every time when count is updated
      
     }, [count])

     useEffect(() => {
      //i will run every time when count and total is updated 
     }, [count, total])
     
     

     function handleClick() {
        setCount(count + 1 );
        
     }
     function handleClicktotal() {
      setTotal(total + 2);
     }


     useEffect(() => {
       
     //clean up function tab trigr hoga jab count ko unmount kar dia jayega ui se
     return(
      alert("count is unmounted")
      
      
      // count is unmounted from ui
     )

    
     }, [count])
     

  return (
    <div>

     <button onClick={handleClick}>click </button>
     <p>count: {count}</p>

     <button onClick={handleClicktotal}> total</button>
     <p>Update: {total}</p>
    </div>
  )
}

export default Uses