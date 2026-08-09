import React from 'react'
import { useState } from 'react'

const App = () => {
  const[colour , setcolour] = useState("White");
  return (
    <div style={{backgroundColor:colour , margin:0+"px" ,  padding:0+"px", height:100+"vh"}}>
      <button onClick={()=>{setcolour("Black")}}>Change colour</button>
    </div>
  )
}

export default App
