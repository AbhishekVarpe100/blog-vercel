import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Shadow.css';
import { useNavigate, useParams } from 'react-router-dom';
function Edit({ username }) {
    const {id}=useParams();
    const navigate=useNavigate();
    const [blogname,setBLogName]=useState('');
    const [description,setDescription]=useState('');

    useEffect(()=>{
        axios.post('https://abhishekvarpeblog.vercel.app/getblog/'+id)
        .then(res=>{
            setBLogName(res.data.blogname);
            setDescription(res.data.description);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])



    const handleSubmit=(e)=>{
        e.preventDefault();
        // const formData=new FormData();
        // formData.append('username',username);
        // formData.append('blogname',blogname)
        // formData.append('description',description)
        // formData.append('id',id)

        axios.post('https://abhishekvarpeblog.vercel.app/update',{username,blogname,description,id})
        .then(res=>{
            if(res.data=='updated'){
                alert("Blog updated successfully")
                setTimeout(()=>{
                    navigate('/home')
                },2000)
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
            
            <center className='m-2 p-2' id='center'>
                <h3><i>Edit Blog</i></h3>   
                
                <form onSubmit={handleSubmit}>
                    <input value={blogname} required onChange={(e)=>setBLogName(e.target.value)} className='form-control' placeholder='Enter blog title' type="text" /><br />
                    <textarea value={description} required onChange={(e)=>setDescription(e.target.value)} className='form-control' placeholder='Blog description' cols="30" rows="10"></textarea><br />
                    <input className='btn btn-dark' type="submit" value="Edit blog" />

                </form>
                <footer>
            <center>&copy; <small>All rights reserved by <i><b>abc</b></i></small> </center>
        </footer>
            </center>

        </div>
    )
}
export default Edit;