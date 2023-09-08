import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""}); 
  const navigate = useNavigate();

  const host = 'http://localhost:5000'

  const handleSubmit = async () => {

    const {name, email, password} = credentials
    const response = await fetch(`${host}/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({name, email, password})
    });

    const json = await response.json();
    
    if (json.success) {
        localStorage.setItem('token', json.authtoken);
        navigate('/');
    } else {
        alert(json.error)
    }
  }

  const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onChange}  />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} />
      </div>
      <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
