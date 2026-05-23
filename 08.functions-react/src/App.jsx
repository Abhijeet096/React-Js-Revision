// import React from 'react'

const App = () => {
const btnClicked = () =>{
  console.log("Button is clicked");
  }
const mouseEnter = () =>{
  console.log("Mouse Entered")
}
  const scrollEvent = (val) =>{
    console.log(val.pageX)
  }
  return (
    <div>
      <h1>Hello, Abhijit</h1>

      <button onClick={btnClicked} onMouseEnter={mouseEnter}>Button Enter</button>   
      
      {/* another method to create function for button */}
      <button onClick={() =>{
        console.log("Button 2 Clicked");
      }}>Click me</button>
      

      {/* we have directly created a arrow function inside call of onClick */}

      <input onChange={(elem2) =>{
        console.log(elem2.target.value)
      }} type="text" placeholder="Enter Name"/>

      <div className="page-parent" onWheel={(elem)=>{
        scrollEvent(elem);
      }}>
        <div className="page1">

      </div>
      <div className="page1">
        
      </div>
      <div className="page1">
        
      </div>
      </div>

    </div>
  )
  // never call it () keep only btnClicked 
}

export default App