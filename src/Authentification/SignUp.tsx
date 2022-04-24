import React from "react"
import { useState } from "react"

function SignUp(): JSX.Element {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        username: '' // optional
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <h1 className='mt-3'>SignUp Form</h1>
            <form className='login-form' onSubmit={e=> handleSubmit(e)}>
                <input className='form-control mb-2' type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                <input className='form-control mb-2' type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                <input className='form-control mb-3' type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='btn btn-primary' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
