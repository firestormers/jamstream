import './style/App.css';
import React , {useEffect , useState } from "react"
import { BrowserRouter,  Route , Routes , Link } from 'react-router-dom';
import Upload from "./components/Upload.jsx"
import Library from "./components/Library.jsx"
import Home from './components/Home.jsx';
import Siginup from "./Siginup.jsx";
import Register from "./Register.jsx"
import axios from 'axios'
import Chat from './components/chat';

function App(props) {
  const [data , setData ] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [IsUser, setIsUser] = useState('');
  var d=IsUser
  const users = (n) => {
    setIsUser(n);
  };

  const change = () => {
    setIsLoggedIn(true);
  };

  const get = () => {
axios.get("http://localhost:4000/get" )
.then((res)=> {
setData(res.data)
})
.catch((err)=> {
  console.log(err);

}) }   

useEffect( () => {
get()
},[isLoggedIn])


return (
<BrowserRouter>

     

<div className="App" >
        <nav>
          <ul>
            <li> 🎹  𝐉𝐚𝐦𝐒𝐭𝐫𝐞𝐚𝐦    </li>
            <li><Link  to="/home">Home</Link ></li>
            <li><Link  to="/upload"> 🎙️ Upload</Link ></li>
            <li><Link  to="/library">  🎧  Library </Link ></li>
            <li ><a href="/chat">   💬 Chat   </a></li>
            {isLoggedIn &&<p style={{color : "white" , textalign : "left"}} > Welcome to JamStream {d}</p>}

          </ul>
        </nav>

        
       <Routes>
       {isLoggedIn &&    <> 
         <Route path="/home" element={<Home  data = {data} username={props.username} />}  />
         <Route path="/upload" element={<Upload  data = {data}  />} />
         <Route path="/library" element={<Library data = {data}  />} /> </>}
         <Route path="/chat" element={<Chat  />}/>
         <Route path="/" element={<Siginup  change={change} users={users} />} />
         <Route path="/register" element={<Register change={change} users={users} />} />
       </Routes>
     </div>
   </BrowserRouter>

  );
}


export default App;


