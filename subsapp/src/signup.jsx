import {useState} from 'react';
import "../src/signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Signup(){
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
        
    }




    return(
        <div className='div1'>
        <div className="wrapper vcenter-item bodyy">
       
 
        <form className="w-75 mx-auto " id="myform" onSubmit={handleSubmit}>
            <h4>Create Account</h4>
            <div className="form-group">
                <label>Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Enter name'
                name="name"
                onChange={(e)=> setName(e.target.value)}></input>
            </div>
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
  
  <button type="submit" className="btn w-100 btn-primary">Sign Up</button>
  </form>
  <p>Already have an account?<a href='/login'>Login</a></p>

</div>
</div>


    );
}

export default Signup;