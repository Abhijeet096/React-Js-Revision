// import React from 'react' - no need for now (Revision of concepts)
// import React from 'react'
import { useState } from "react";
const App = () => {
  const [a, setA] = useState(0)

   const changeNum = () =>{
    setA(a+1);
   }
  return (
    <div>
  <h1>Value of a is {a}</h1>
  <button onClick={changeNum}>
    Increase
  </button>
    </div>
  )
}

export default App
