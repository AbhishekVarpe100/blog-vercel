import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
function Home({ username }) {
    return (
        <>
            {username != null ? <div className='m-4'> <h1>Hello <b><u className='text-success'>{username}</u> </b> 😊</h1> <span><Link to='/' title='logout'>Logout</Link></span>
            <hr />
            <div><i>Post a blog, new ideas with people to explore new things.</i></div>
                <hr />
                <div className='d-flex justify-content-around'>
                    <Link className='btn btn-dark' to='/home/'>All blogs</Link>
                    <Link className='btn btn-outline-dark' to='/home/createblog'>Create blog</Link>
                    <Link className='btn btn-outline-dark' to='/home/yourblogs'>Your blogs</Link>
                </div> 
                <hr />
                <Outlet></Outlet> </div> : <div>Login first to access content <Link to="/">Login here</Link>
            </div>}

        </>
    )
}
export default Home;
