import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleBtn = () => {
        var msg = document.getElementById('msg');
        if (username !== '' && email !== '' && password !== '' && password === confirmPassword) {
            // Submit the form or perform further actions here
            msg.textContent = "Form submitted successfully";
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } else {
            msg.textContent = "Please fill out all fields and ensure passwords match"
        }
    }

    return (
        <div className="con-bar">
            <h1 className="con-title">Contact</h1>
            <div className="con-details">
                <input 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    type="text" 
                    placeholder='Username'
                />
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder='Email'
                />
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder='Password'
                />
                <input 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    type="password" 
                    placeholder='Confirm password'
                />
                <p id="msg"></p>
                <button className='submit-btn' onClick={handleBtn}>Submit</button>
            </div>
        </div>
    );
}

export default Contact;
