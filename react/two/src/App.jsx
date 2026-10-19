import React from 'react'
import Cards from './components/cards'

const App = () => {
  return (
    <div>App
      <Cards User = " satya" age= {18} img = "https://images.unsplash.com/photo-1777128248968-762739f9b7bd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"/>
      <Cards User = " nikita" age= {28} img = "https://plus.unsplash.com/premium_photo-1776760557248-3e144647e5c4?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Cards User = "honey" age= {16} img = "https://images.unsplash.com/photo-1768405942784-0d48a1f44fe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Cards User = "money" age= {22} img = "https://images.unsplash.com/photo-1773332611574-d73d8f5cea36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
} 

export default App