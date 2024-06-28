//handles user's login activity
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AutoContext';
import { Navigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const  {login} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {username, password});
            login(response.data.token); //a jwt token is returned by backend
            alert("Successful Login");
            return <Navigate to="/todolist" />; //use navigate component to navigate after login
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;