import React,{useState,useEffect} from 'react'

function ClockTwoHook() {
    const [clock ,setClock] =useState("")
    const tick =()=>{
        setClock(new Date().toLocaleTimeString())
    }
    useEffect(() => {
       const timeOne=(setInterval(()=>tick(),1000))
        return () => {
            clearInterval(timeOne) 
        }
    }, [])
    return (
        <div>
           <h1> {clock}</h1> 
        </div>
    )
}

export default ClockTwoHook
