import axios from 'axios'
// import React from 'react'

const App = () => {
  const getData = async() =>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos/23')
    console.log(response.data)
  }
  return (
    <div>
    <button onClick={getData}>Submit</button>
    </div>
  )
}


export default App