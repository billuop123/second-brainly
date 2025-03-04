import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signup=function(){
    const username=useRef(null);
    const password=useRef(null)
    const navigate=useNavigate()
    const handlename=function(e:any){
        username.current=e.target.value
    }
    const handlepass=function(e:any){
        password.current=e.target.value
    }
    async function signup(){
        await axios.post("http://localhost:3000/api/v2/users/signup",{
            name:username.current,
            password:password.current
        })
        alert("signed up successfully")
        navigate("/dashboard")
    }
    return <div className="h-screen w-screen flex justify-center items-center flex-col ">
        <div className="flex flex-col gap-5">
        <Input placeholder="username" onChange={handlename}/>
        <Input placeholder="password" onChange={handlepass}/>
       
        </div>
        <Button className="w-20 mt-2" onClick={signup}>Signup</Button> 
    </div>
} 