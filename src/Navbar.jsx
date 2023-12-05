import React from 'react'
import { Link } from 'react-router-dom';
import './components/Shadow.css';
function Navbar(){
    return (
        <div>
        <h2 className='m-4'>Blog Application</h2>
       <div className='d-flex text-white m-2 rounded p-4 justify-content-around'>
        <h2>Home</h2>
        <Link to='/'></Link>
       </div>
        <Link to='/register'></Link>
        <Link to='/home'></Link>
        </div>
    )
}

export default Navbar;
