import React,{useState} from "react";
const Project=()=>{
    const [name, SetName]= useState("");
    const[todolist, Settodolist]= useState([])
    // console.log(name)
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
    return(
        <div className="originalTodo">
            <form onSubmit={updateTask}>
                <input type="text" onChange={(e)=>SetName(e.target.value)}  value={name}/>
                <button type="submit">Submit</button>
                </form>
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
    )
}
export default Project;
{/* <ul>
<li>{item}</li>
<button onClick={()=> handleDelete(index)}> Delete</button>
</ul> */}