import './style/App.css';
import React , {useEffect , useState } from "react"
import { BrowserRouter,  Route , Routes } from 'react-router-dom';
import Upload from "./components/Upload.jsx"
import Library from "./components/Library.jsx"
import Home from './components/Home.jsx';
import Siginup from "./Siginup.jsx";
import Register from "./Register.jsx"
import axios from 'axios'

function App(props) {
  const [data , setData ] = useState([])
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
},[])



return (
    <BrowserRouter>
 <div className="App" >
      
        <Routes>
          <Route path="/home" element={<Home  data = {data} username={props.username} />}  />
          <Route path="/upload" element={<Upload  data = {data}  />} />
          <Route path="/library" element={<Library data = {data}  />} />
          <Route path="/" element={<Siginup   />} />
          <Route path="/register" element={<Register data = {data}  />} />


  
        </Routes>
      </div>
    </BrowserRouter>
 
  );
}


export default App;


