import React, { useEffect, useState } from 'react'

const App = () => {
   const [data, setdata] = useState([]);
   
   

  useEffect(() => { abc() }, []);

  async function abc() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const ans = await data.json();
    console.log(ans);
    setdata(ans);
  }
  
 function delet(id) {
  setdata(data.filter(item => item.id !== id))  
}

  return (
    <div>
      {/* map function  */}
      
      {data.map((value, index) => {
  return (
    <div key={value.id}>
      
      <h1>{value.id}</h1>
      <p>{value.title}  <button onClick={()=>{delet(value.id)}}>Delete</button> </p> 
     
    </div>
  )
})}
    </div>
  )
}

export default App
