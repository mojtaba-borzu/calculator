import React,{useState} from 'react'

function OnClick() {
    const [count,setCount]=useState(0)
    const [name , setName]=useState("")
    const [value, setValue]=useState("")
   
    const increment=()=>{
        setCount(count+1)
        setValue(name)
        
    }
    

    return (
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
            <button type="button" onClick={increment}>increment</button>
            <h2>{count+value}</h2>
            
        </div>
    )
}

export default OnClick
