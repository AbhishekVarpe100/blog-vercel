import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import './Shadow.css'
import axios from 'axios';
import Loading from './Loading';
function YourBlogs({username}) {

    const [data, setBlog] = useState([]);
    const [load,setLoad]=useState(true);
    const blogData = () => {
        axios.get('https://abhishekvarpeblog.vercel.app/getblog/'+username)
            .then(blog => {
                setBlog(blog.data)
            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
      blogData();

      setTimeout(() => {
        setLoad(false)
      }, 4000);
    }, [])

    // const handleDelete = (name) => {
    //     axios.delete(`http://localhost:3000/deletecosmetics/${name}`)
    //         .then((res) => {
    //             if (res.data == 'success') {
    //                 setDelete(<div className='alert alert-danger'>Product deleted successfully</div>)
    //                 setTimeout(() => {
    //                     setDelete("")
    //                     setTimeout(() => {
    //                         cosmeticsData();
    //                     }, 100)
    //                 }, 3000);
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className='m-2'>
          {username}
            <center>
            <h2 className='heading rounded text-white w-100 p-2 m-2'>Your Blogs</h2>
            </center>

            {load? <Loading></Loading>

            :

            <div className='row'>

                {data.length != 0 ? data.map((item) => (

                    <div className='text-dark col-md-3 col-lg-3 myimagetemplate1 bl' key={item.id} >
                        <hr />
                        <div className="card-body">
                            <p className="card-title w-100"><b className='text-primary'> <i> Blog Creator : </i> </b >{item.username}</p>
                            <p className="card-title w-100"><b className='text-primary'> <i> Blog Name : </i> </b >{item.blogname}</p>
                            <p className="card-text w-100"><b className='text-primary'> <i> Blog description : </i> </b>{item.description}</p>
                        </div>
                        <hr />
                        <div className="card-body">
                        {/* <Link className='btn btn-primary w-100' to={`/admin/available/editcosmetics/${item.id}`}>Edit</Link> */}
                            {/* <button onClick={() => handleDelete(item.name)} class="btn btn-danger w-100 my-2">Delete</button> */}
                        </div>
                    </div>

                )) : <div className='alert alert-warning'>🙁 Oops! <i> <b>You haven't posted any blog yet</b> </i> </div>}
            </div>
            
            }

            
            <footer>
            <center>&copy; <small>All rights reserved by <i><b>abc</b></i></small> </center>
        </footer>

        </div>
        
    )
}

export default YourBlogs;