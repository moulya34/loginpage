import React from 'react';
import "./Loginform.css";
import { FaUserPen ,FaLock } from "react-icons/fa6"

export const Loginform = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>LOGIN</h1>
            <div className='input-box'>
                <input type='text'placeholder='Username'required/>
                <FaUserPen className='icon'/>

            </div>
            <div className='input-box'>
                <input type='Password'placeholder='Password'required/>
                <FaLock className='icon' />
            </div>

            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>forgot Password</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register-link'>
                <p>Don't have an account?<a href='#'>Register</a></p>
            </div>
        </form>
        </div>
  )
}
