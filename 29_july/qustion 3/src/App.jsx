import React, { useEffect, useState } from 'react'

const App = () => {
   const [data, setdata] = useState([]);
   const[user , setuserid] = useState(1);
   

  useEffect(() => { abc() }, []);

  async function abc() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const ans = await data.json();
    console.log(ans);
    
    setdata(ans);
  }
  

  return (
    <div>
      {/* map function  */}
      <button onClick={()=>{setuserid(1)}}>user ID 1</button>
       <button onClick={()=>{setuserid(2)}}>user ID 2</button>
        <button onClick={()=>{setuserid(3)}}>user ID 3</button>
      
      {data.filter((e)=>e.userId==user).map((value, index) => {
  return (
    <div key={value.id}>
      <h1>{value.id}</h1>
      <p>{value.title}</p>
    </div>
  )
})}
    </div>
  )
}

export default App
