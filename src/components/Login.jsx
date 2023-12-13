import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Shadow.css'
function Login({parentData}) {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [password, setPassword]=useState('');
    const [login,setLogin]=useState('');
    const [error,setError]=useState('');

    parentData(name);
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://abhishekvarpeblog.vercel.app/login',{name,password})
        .then((res)=>{
            if(res.data=='find'){
                setLogin(<div className='w-75 rounded p-2' style={{ 'backgroundColor': 'green', 'color': 'black' }}>Login Successful</div>)
                setTimeout(() => {  
                    setLogin('');
                    navigate('/home')
                }, 3000);
            }

            else if(res.data=='password_wrong'){
                setError(<div className='alert alert-danger m-2'><b>Invalid Password</b> </div>)

                setTimeout(() => {
                    setError("");
                }, 3000);
            }
            else if(res.data=='wrong_name'){
                setError(<div className='alert alert-danger m-2'><b>Invalid Username</b> </div>)

                setTimeout(() => {
                    setError("");
                }, 3000);
            }
        })

    }

    return (

       
        <center>
            <div>
                <h3>Login</h3>
                {login}
                {error}
                <marquee><big>Welcome user! <b>login here to continue.</b> </big></marquee>
                <form onSubmit={handleSubmit} className='m-4 bshadow p-4 col-lg-3 col-md-4'>
                    <div className="mb-3">
                        <input required onChange={(e)=>setName(e.target.value)} placeholder='Enter username' type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' type="password" className="form-control" />
                    </div>
                    <div className='text-light text-dark'> Do not have account ? <br /><Link to="/register">Create account</Link></div>
                    <br />
                    <br />
                    <button type="submit" className="btnn">Login</button>
                </form>
            </div>
            <footer>
            <center>&copy; <small>All rights reserved by <i><b>abc</b></i></small> </center>
        </footer>
        </center>
        
        
    )
}

export default Login