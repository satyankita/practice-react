import React from 'react'
import { useState } from 'react'

function HeroVideo() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      //counter
      <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
    </div>

//input live
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
    </div>

    //toggle
    <div style={{backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      height: "50vh",
    }}>

      <h1>{darkMode ? "dark mode" : "light mode"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}> toggle theme</button>

    </div>

    //hide password

    <div>
      <input type={showPassword ? "text" : "password"}
      placeholder='Enter Password'
       />

       <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "hide" : "sow"}
       </button>
    </div>
    <div>
      <h1>
        {isLoggedIn ? "welcome user" : "please Login"}
      </h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
    </div>
  )
}

export default HeroVideo