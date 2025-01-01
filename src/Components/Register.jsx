import React from 'react'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import './style.css';
export const Register = () => {
  return (
    <div className='registerpage'>
        <div className='form-box'>
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username'required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email'required />
                    <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password'required />
                    <FaLock className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password'required />
                    <FaLock className='icon'/>
                </div>
                <div className='forgot'>
                    <label ><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type='submit'>Register</button>
                <div className='loginlink'>
                    <p>Already have an account?<a href='#'>Login</a></p>
                </div>
            </form>
        </div>


    </div>
  )
}
