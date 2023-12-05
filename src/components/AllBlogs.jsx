import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import axios from 'axios';
import './Shadow.css'
function AllBlogs({username}) {

    const [data, setBlog] = useState([]);

    const blogData = () => {
        axios.get('https://abhishekvarpeblog.vercel.app/getblogs')
            .then(blog => {
                setBlog(blog.data)
            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
      blogData();
    }, [])

    const handleDelete=(id,username)=>{
        axios.post('https://abhishekvarpeblog.vercel.app/deleteblog',{id,username})
        .then(res=>{
            if(res.data=='deleted'){
                alert("Deleted")
                setTimeout(()=>{
                    blogData();
            },2000)
            }
        })
       
    }

    return (
        <div className='m-2'>
          {username}
            <center>
            <h2 className='heading rounded text-white w-100 p-2 m-2'>All Blogs</h2>
            </center>

            <div className='row'>

                {data.length != 0 ? data.map((item) => (

                    <div className=' col-md-3 col-lg-3 myimagetemplate1 bl' key={item.id} >
                        <hr />
                        <div className="card-body">
                            <p className="card-title w-100"><b className='text-primary'> <i> Blog Creator : </i> </b >{item.username} {username==item.username ? <span className='text-dark bg-warning'>You</span> :<></> }  </p>  
                            <p className="card-title w-100"><b className='text-primary'> <i> Blog Name : </i> </b >{item.blogname}</p>
                            <p className="card-text w-100"><b className='text-primary'> <i> Blog description : </i> </b>{item.description}</p>
                        </div>
                        <hr />
                        <div className="card-body">
                     {username==item.username? <Link className='btn btn-primary w-100' to={`/edit/${item.id}`}>Edit</Link> :<></> }  
                         {username==item.username ? <button onClick={()=>handleDelete(item.id,item.username)} class="btn btn-danger w-100 my-2">Delete</button> :<div></div>}   
                        </div>
                    </div>
                )) : <div className='alert alert-warning'>🙁 Nobody posted a blog</div>}
            </div>


        </div>
        
    )
}

export default AllBlogs;