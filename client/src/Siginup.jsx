import React , { useState } from "react"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style/log.css';
import App from "./App.jsx";


function Siginup(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginstatus, setloginstatus] = useState('');
    const navigate = useNavigate();

    

    const login=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:4000/login",{username:username,password:password})
    .then((response)=>{
if (response.data.message){setloginstatus(response.data.message)}
else {
    props.change(); 
    props.users(username)
    navigate('/home')
}
})
}
return (
        <div>
           {false && <div>
            <App username={username} />
    </div>}
<div class="wrapper">
<form class="p-3 mt-3">
    <div class="text-center mt-4 name"> </div>
<input class="form-field d-flex align-items-center" id="username" placeholder="Username" defaultValue={username}  onChange={(event)=>setUsername(event.target.value)}></input>
<input class="form-field d-flex align-items-center"type="password" id="password" placeholder="Password" defaultValue={password}  onChange={(event)=>setPassword(event.target.value)}></input>
<button class="login-but" type="submit" onClick={login} >Log In</button>
{  <div><h3>{loginstatus}</h3></div>} 
</form>
<div class="text-center fs-6">
<a href="/register">Create compte</a>
        </div>

</div>
 </div>
    )
}

export default Siginup;