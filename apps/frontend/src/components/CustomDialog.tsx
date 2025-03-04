import { useState, ReactElement, Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import axios from "axios"

interface Props {
  buttonProp: ReactElement
  isOpen:boolean,

 setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function CustomDialog({ buttonProp,isOpen,setIsOpen }: Props) {
  const [link,setLink]=useState("")
  const [type,setType]=useState("")
  const [title,setTitle]=useState("")
  const handleClose = () => {
    axios.post("http://localhost:3000/api/v2/content/",{
      link,
      type,
      title,
      tags:[]
    },{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
    setIsOpen(false); // Close the dialog when save is clicked
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}> {buttonProp} </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Enter your brain below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Link</Label>
            <Input id="name" value={link} onChange={(e)=>setLink(e.target.value)} placeholder="Link/share.url" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Type</Label>
            <Input id="username" onChange={(e)=>setType(e.target.value)} value={type} placeholder="youtube" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Title</Label>
            <Input id="username" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="title" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleClose}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
