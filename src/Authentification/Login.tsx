import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, setToken } from "../store/store"

function Login() {

    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })


    const value=useSelector<RootState, string>(state=>state.tokenText);
    const dispatch=useDispatch();
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {if (data.accessToken) dispatch(setToken(data.accessToken));   console.log(data.accessToken)} )

        
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <h1 className='mt-3'>Login Form</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <input  className='form-control mb-2' type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                <input className='form-control mb-3' type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
