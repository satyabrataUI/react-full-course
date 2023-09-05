import React from 'react'
import {useState} from "react"
const Todo = () => {
    const[name,setName]=useState("");
    const [data,setData]=useState([]);
    const handleSubmit=(e)=>{
       e.preventDefault();
       setData([...data,name]);
       setName("")
    }
    function removeClick(index){
       const updateData=data.filter((ele,ind)=>
        index!==ind
       )
       setData(updateData)
    }
    function handleRemove(){
        setData([])
    }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit}>
        <h1 >TODO List</h1>
        
        <div>
            <input type="text"  value={name} onChange={e=>setName(e.target.value)} /> <button>Add</button>
            {
                data.length>=1 && <button onClick={handleRemove}>Remove all </button>
            }
            <div>
               {
               data!==[] && data.map((item,index)=>
                    <ul key={index} style={{display:"flex",justifyContent:"space-around"}}>
                        <li>{item}</li>
                        <button onClick={()=>removeClick(index)}>Delete</button>
                    </ul>
                    )
               }
            </div>
            
        </div>
        </form>
    </div>
  )
}

export default Todo