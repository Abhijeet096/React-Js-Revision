import { useState, useEffect } from "react";


const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(function(){
    console.log('UseEffect is running.....')
  }, [num])
  return (
    <div>
    <h1>Value of num {num}</h1>
    <h1>Value of num2 {num2}</h1>
    <button onClick={()=>{
      setNum(num+1) 
      setNum2(num2+10)  // this is mounting
    }}>click</button>
    </div>
  )
}

export default App