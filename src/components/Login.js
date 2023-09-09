import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredentials] = useState({email: "", password: ""}); 
    const navigate = useNavigate();

    const host = 'http://localhost:5000'
    const handleSubmit = async () => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Successfully Login", "success")
        } else {
            props.showAlert(json.error, "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Login</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
            </div>
            <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
    )
}
