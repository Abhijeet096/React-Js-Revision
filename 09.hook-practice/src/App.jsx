// import React from 'react'
import {useState} from 'react'
const App = () => {
  const[num, setNum] = useState({user:'Abhijit' , age:20})

  const btnClicked = () =>{
    const newNum = {...num}
    console.log(newNum)
    newNum.user = 'Pavan'
    setNum(newNum);
  }
  return (
    <div>
    <h1>{num.user}</h1>
    <h3>{num.age}</h3>
    <button onClick={btnClicked}>Change User</button>
    </div>
  )
}

export default App