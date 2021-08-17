import React, {useState} from "react";
import "./App.css";
import Todolist from "./todolist";

const App=()=>{
  const[inputValue,setinputValue]=useState("");
  const[items,setitems]=useState([]);
  const Change=(event)=>{
    const inputValue1=event.target.value;
    setinputValue(inputValue1);
  }
  const itemAdd=()=>{
    setitems((oValue)=>{
      setinputValue("");
      return[...oValue,inputValue] 
    })
  }
  const deletelist=(id)=>{
    setitems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !==id; 
      })
    });
}
  return (
    <>
      <div className="main">
        <div className="center_div">
          <div className="head_p">
              <h1 className="head">toDO liST Randhir's Creation</h1>
          </div>
          <input className="inPut" type="text" placeholder="AddTask" onChange={Change} value={inputValue} />
          <button onClick={itemAdd}>+</button>
          {items.map((itemValue, index)=>{
            return <Todolist 
            text={itemValue} 
            key={index} 
            id={index}
            onSelect={deletelist}
            />
            
          })}
          
        </div>
        
      </div>
    </>
  )
}
export default App;