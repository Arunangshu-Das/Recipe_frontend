import React, { useState } from 'react'
import '../styles/upload.css'
import toast from "react-hot-toast";
import axios from "axios";
const Upload = () => {
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [taste,setTaste] = useState("");

  const postedon = new Date().toISOString();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const res = await axios.post("https://receipe-zd4n.onrender.com/newreceipe",{
        name: name,
        desc: desc,
        taste: taste,
        postedon: postedon
      })
      if(res.data.success){
        toast.success("Recipe Uploaded");
      }
    }catch(err){
      toast.error("Sorry! Try again")
      console.log(err)
    }
  }
  return (
    <div className='container'>
      <form className='uploadform' onSubmit={handleSubmit}>
        <h1>Create Your Recipe</h1>
        <div className='form-box'>
        <input type='text' placeholder='name of the recipe' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='text' placeholder='taste' value={taste} onChange={(e) => setTaste(e.target.value)}/>
        <textarea rows='6' cols='50' placeholder='About the recipe' value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Upload
