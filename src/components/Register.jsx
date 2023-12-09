import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shadow.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const [register, setRegister] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const register = { name, email, password };
        axios.post('https://abhishekvarpeblog.vercel.app/register', register)
            .then(res => {

                if (res.data == 'register') {
                    setRegister(<div className='w-75 rounded p-2' style={{ 'backgroundColor': 'blue', 'color': 'black' }}>Registered Successfully</div>)

                    setTimeout(() => {
                        setName('');
                        setEmail('');
                        setPassword('');
                        setRegister('')
                        setTimeout(() => {
                            navigate('/')
                        }, 1000);

                    }, 3000);

                }
                else if (res.data == 'present') {
                    setWarning(<div className='w-75 rounded p-2' style={{ 'backgroundColor': 'yellow', 'color': 'black' }}>User already exist with this email id</div>)
                    setTimeout(() => {
                        setWarning('');
                    }, 3000)
                }

                else {
                    alert("Something went wrong while register")
                }
            })

    }
    return (
        <center>
            <div>
                <h3>Register / Sign Up</h3>
                {warning}
                {register}
                <marquee><big>Welcome! <b>register here to use our services.</b> </big></marquee>
                <form onSubmit={handleSubmit} className='m-4 bshadow p-4'>
                    <div className="mb-3">
                        <input value={name} required onChange={(e) => setName(e.target.value)} placeholder='Enter username' type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input value={email} required onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input value={password} required onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type="password" className="form-control" />
                    </div>
                    <div className='text-dark'> Already have account ? <br /> <Link to="/">Login here</Link></div>
                    <br />
                    <br />
                    <input className='btnn' type="submit" value="Register" />
                </form>
            </div>
            <footer>
            <center>&copy; <small>All rights reserved by <i><b>abc</b></i></small> </center>
        </footer>
        </center>
    )
}

export default Register;