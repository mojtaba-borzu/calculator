import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FechingOne() {
    const [post ,setPost]=useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/url")
        .then((res)=>{
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        
       
       
    }, [])
    return (
        <div>
            <ul>
                {post.map((posts,index)=><li key={index}>{posts.name}</li>)}
            </ul>
                
        </div>
    )
}

export default FechingOne
