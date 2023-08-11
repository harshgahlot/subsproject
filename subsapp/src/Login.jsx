import React from 'react';

import {useState} from 'react';
import "../src/signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login(){
    
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data === "success"){
                navigate('/home')

            }

        
        })
        .catch(err=> console.log(err))
        
    }




    return(
        <div className='div1'>
        <div className="wrapper vcenter-item bodyy">
       
 
        <form className="w-75 mx-auto " id="myform" onSubmit={handleSubmit}>
            <h4>Login to your account</h4>
            
  <div className="form-group">
    <label>Email</label>
    <input 
    type="email" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    name="email"
    onChange={(e)=> setEmail(e.target.value)}
    ></input>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input 
    type="password" 
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password"
    name="password"
    onChange={(e)=> setPassword(e.target.value)}></input>

  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label">Remember Me</label>
  </div>
  
  <button type="submit" className="btn w-100 btn-primary">Login</button>
  </form>
  <p>New to MyApp<a href='/register'>Sign Up</a></p>

</div>
</div>


    );
}

export default Login;