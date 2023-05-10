import React , {useEffect , useState } from "react"
import Axios from 'axios'




function Siginup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginstatus, setloginstatus] = useState('');
    const [registerstatus, setregisterstatus] = useState('');
    const [password1, setPassword1] = useState('');
    const [username1, setUsername1] = useState('');



    const register=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:4000/register",{username:username1,password:password1,email:email})
    .then((response)=>{
if (response.data.message){setregisterstatus(response.data.message)}
else {setregisterstatus("ACCount created successfully")}

    })
}



    const login=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:4000/login",{username:username,password:password})
    .then((response)=>{
if (response.data.message){setloginstatus(response.data.message)}
else {setloginstatus(response.data[0].email)}

    })
}
    return (
        <div>
<div>
<form id="LogInform">
<input  id="username" placeholder="Username" defaultValue={username}  onChange={(event)=>setUsername(event.target.value)}></input>
<input type="password" id="password" placeholder="Password" defaultValue={password}  onChange={(event)=>setPassword(event.target.value)}></input>
<button type="submit" onClick={login} >Log In</button>
{  <div><h3>{loginstatus}</h3></div>} 
</form>

</div>


     
 <form id="signup-form">
 <h1>if you don't have a compte you should create </h1>
 <input  id="username" placeholder="Username" defaultValue={username1}  onChange={(event)=>setUsername1(event.target.value)}></input>
 <input type="email" id="email" placeholder="Email" defaultValue={email}  onChange={(event)=>setEmail(event.target.value)}></input>
 <input type="password" id="password" placeholder="Password" defaultValue={password1}  onChange={(event)=>setPassword1(event.target.value)}></input>
 <input type="password" id="confirm-password" placeholder="Confirm Password"></input>
 <button type="submit" onClick={register}>Sign Up</button>
 {  <div><h3>{registerstatus}</h3></div>}
 </form> 
 </div>
    )
}


export default Siginup;