import './style/App.css';
import React , { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import './style/log.css';

function Regis(props) {
    const [email, setEmail] = useState('');
    const [registerstatus, setregisterstatus] = useState('');
    const [password1, setPassword1] = useState('');
    const [username1, setUsername1] = useState('');
    const navigate = useNavigate();



    const register=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:4000/register",{username:username1,password:password1,email:email})
    .then((response)=>{
if (response.data.message){setregisterstatus(response.data.message)}
else {
    props.change(); 
    props.users(username1)
    navigate('/home')}

    })
}



    return (
        <div class="wrapper">
 <form class="p-3 mt-3"id="signup-form">
 <h3>if you don't have a compte you should create </h3>
 <input  class="form-field d-flex align-items-center" placeholder="Username" defaultValue={username1}  onChange={(event)=>setUsername1(event.target.value)}></input>
 <input class="form-field d-flex align-items-center"type="email" id="email" placeholder="Email" defaultValue={email}  onChange={(event)=>setEmail(event.target.value)}></input>
 <input  class="form-field d-flex align-items-center"type="password" id="password" placeholder="Password" defaultValue={password1}  onChange={(event)=>setPassword1(event.target.value)}></input>
 <input class="form-field d-flex align-items-center"type="password" id="confirm-password" placeholder="Confirm Password"></input>
 <button type="submit" onClick={register}>Sign Up</button>
 {  <div><h3>{registerstatus}</h3></div>}
 </form> 
 </div>
    )
}

export default Regis;