import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() === '' && password.trim() === '') {
            toast("Fill User and Pass Below (❁´◡`❁)", {
            className: "foo-bar",
          });
        }
        else if (username.trim() === '') {
            toast.error('Username has left Blank 👀');
        }
        else if (password.trim() === '') {
            toast.error('Password has left Blank 👀');
        }
        else {
            // Process form submission here
        const response = await fetch('http://localhost/ReactAPI/Loginform.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
        },
        body: JSON.stringify({ username, password }), // Convert data to JSON string
        });

    // Parse response JSON data
    const data = await response.json();

    // Check if login was successful or not
    if (data.success) {
        // IF success alert a message
        toast('Login successfully✌😒👌');
        localStorage.setItem("user", username);
        window.location.href = "/App";

    } else {
      // Login failed, display error message
      toast.error(data.message);
    }
        }
    };

    return (
        <div className="boxshadow">
            <main className="container">
                <div className="Title">
                    <div className="animate-text"><h4>Dashboard Access</h4></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <section className="form-control">
                        <input type="text" id="username" value={username}
            		onChange={(e) => setUsername(e.target.value)}/>
                        <label className="label">Username</label>
                    </section>
                    <section className="form-control"> 
                        <input type="password" id="password" value={password}
            		onChange={(e) => setPassword(e.target.value)}/>
                        <label className="label">Password</label>
                    </section>
                    <button type="submit" className="btn login-style">Login</button>
                </form>   
            </main>
            <ToastContainer position="top-center"/>
        </div>
    );
};

export default LoginForm;
