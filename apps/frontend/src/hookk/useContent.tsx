import { useEffect, useState } from "react";
import axios from "axios"
export function useContent(){
    const [content,setContent]=useState([]);
    useEffect(()=>{
        async function getContent(){
            const response=await axios.get("http://localhost:3000/api/v2/content",{
                headers:{"Authorization":localStorage.getItem("token")}
            })
            setContent(response.data.content)
        }
        getContent()
    },[])
    return content
}