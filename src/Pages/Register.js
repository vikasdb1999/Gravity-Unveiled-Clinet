import React from 'react'
import { useState } from 'react';
function Register() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function changeUserName(user) {
        setUserName(user.target.value);
    }
    function changePassword(pass) {
        setPassword(pass.target.value);
    }
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('https://gravityunveiledapi.onrender.com/register', {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert("Registration Successful");
        }
        else {
            alert("Registration Unsuccesful, Try Again Later");
        }
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input value={username} onChange={changeUserName} type="text" placeholder='Username' />
            <input value={password} type="password" onChange={changePassword} placeholder="Password" />
            <button>Register</button>
        </form>
    );
}

export default Register