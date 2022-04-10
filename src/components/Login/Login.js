import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] =useState('');
    const [password,setPassword] =useState('');
    // const [error, setError] =useState('');

    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);
    
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

        if(user){
            console.log('user found')
            navigate(from, {replace:true});
        }

    const handleUserSignIn = event => {
        signInWithEmailAndPassword(email, password)
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleUserSignIn}>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create A New Account.</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;