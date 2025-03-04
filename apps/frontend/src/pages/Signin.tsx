import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"

import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Signin=function(){
    const username=useRef(null)
    const password=useRef(null)
    const navigate=useNavigate()
    const handlename=function(e:any){
        username.current=e.target.value
    }
    const handlepass=function(e:any){
        password.current=e.target.value
    }
    async function signin(){
       const response= await axios.post("http://localhost:3000/api/v2/users/signin",{
            name:username.current,
            password:password.current
        })
        alert("signed in successfully")
        const token=response.data.token
        localStorage.setItem("token",token)
        navigate("/dashboard")
    }
    return <div className="h-screen w-screen flex justify-center items-center flex-col ">
        <div className="flex flex-col gap-5">
        <Input placeholder="username" onChange={handlename}/>
        <Input placeholder="password" onChange={handlepass}/>
       
        </div>
        <Button className="w-20 mt-2" onClick={signin}>Signin</Button> 
    </div>
}