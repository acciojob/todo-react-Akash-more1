
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[input, setInput] = useState("");

  const [arr, setArr] =useState([]);

  const handleInput= (e) => {
    setInput(e.target.value);
  }

  const addTask= (e)=>{
    if(input.trim() !== ""){
      setArr([...arr,input]);
      setInput("");

    }
}

const deleteTask = (index) => {
  const newArr = arr.filter((item, i) => i !== index);
  setArr(newArr);
};


  
  return (
    <div>
      <h1>To-Do-List</h1>
      <input type="text" value={input} onChange={handleInput}/>

      <button onClick={addTask}>Add Todo</button>
      
      <ul>
        {
          arr.map((item,index)=>(
            
            <li key={index}>
               <div className="task">

              <h2>{item}</h2> 
              <button onClick={()=>{deleteTask(index)}}>delete task</button>
              
            
            </div>

            </li>
            
          ))
        }
      </ul>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
