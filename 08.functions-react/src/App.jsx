// import React from 'react'

const App = () => {
const btnClicked = () =>{
  console.log("Button is clicked");
  }
const mouseEnter = () =>{
  console.log("Mouse Entered")
}
  return (
    <div>
      <h1>Hello, Abhijit</h1>

      <button onClick={btnClicked} onMouseEnter={mouseEnter}>change User</button>   
      
      
    </div>
  )
  // never call it () keep only btnClicked 
}

export default App