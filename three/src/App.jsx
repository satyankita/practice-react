import React from 'react'
import Props from './components/Props'
import Count from './components/Count'
import Todo from './components/Todo'

function App() {
   const info = [
   {
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqH8JPeizdD3dlPj9B9EqxzEB3iMi4kOpyQg&s", 
    name: "satya",
     age: 18
    },
    {   
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsvPSS2guX-wdBJCYtg-3Y1mZ2YMzRtZUyw&s",
        name: "second person",
        age: 20
    }
   ]
  return (
    <div className='containor'>
      {/* {info.map(function(prop){
        return <Props picture = {prop.picture} name = {prop.name} age = {prop.age} />

      })}

      <Count /> */}
      <Todo />
      
    </div>
  )
}

export default App