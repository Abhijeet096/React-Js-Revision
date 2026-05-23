// import React from 'react'

const App = () => {
   const getData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response)
    // console.log(response.json())
    const data = await response.json()
    console.log(data)
    
  }
  return (
    <div>
      <button onClick={getData}>get deta</button>
    </div>
  )
}

export default App