import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function CreateBlog({ username }) {

    const [blogname,setBLogName]=useState('');
    const [description,setDescription]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // const formData=new FormData();
        // formData.append('username',username);
        // formData.append('blogname',blogname)
        // formData.append('description',description)

        axios.post('https://abhishekvarpeblog.vercel.app/addblog',{username,blogname,description})
        .then(res=>{
            if(res.data=='added'){
                alert("Blog added successfully")
                setTimeout(()=>{
                    setBLogName('')
                    setDescription('')
                },2000)
            }
        })

        .catch(error=>{
            alert(error)
        })
    }
    return (
        <div>
            <center className='p-2 m-2' style={{'background':'pink'}}>
                <form onSubmit={handleSubmit}>
                    <input value={blogname} required onChange={(e)=>setBLogName(e.target.value)} className='form-control' placeholder='Enter blog title' type="text" /><br />
                    <textarea value={description} required onChange={(e)=>setDescription(e.target.value)} className='form-control' placeholder='Blog description' cols="30" rows="10"></textarea><br />
                    <br />
                    <input className='btn btn-light' type="submit" value="Publish blog" />
                </form>
            </center>

        </div>
    )
}
export default CreateBlog;