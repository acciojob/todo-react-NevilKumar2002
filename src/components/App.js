
import React,{useState}from "react";
import './../styles/App.css';
// import Project from "./Project";

const App = () => {
  const [name, SetName]= useState("");
  const[todolist, Settodolist]= useState([]);
  function updateTask(e){
    e.preventDefault();
    Settodolist([...todolist, name])
    SetName("");
 }
 function handleDelete(index){
     // console.log("item to be deleted", index)
     const newSetTodoList= todolist.filter((value,position)=> position!=index);
     Settodolist(newSetTodoList);
 }
  return (
    // <h1>nevil Kumar</h1>
    <div className="todoitems">
        <h1>To-Do List</h1>
        <div className="originalTodo">
            <form onSubmit={updateTask}>
                <input type="text" onChange={(e)=>SetName(e.target.value)}  value={name}/>
                <button type="submit">Submit</button>
                </form>
                </div>
               
             <div className="todos" >
              {
                todolist.map( (item, index)=> (
                   <div className="list">
                    <div style={{display:"flex",justifyContent:"space-between", width:"400px" }}>
                    <p><strong>{item}</strong></p>
                    <button onClick={()=> handleDelete(index)}> Delete</button>
                    </div>
                    </div>

                ))
}
                </div>
      
        
    </div>
  )
}

export default App
