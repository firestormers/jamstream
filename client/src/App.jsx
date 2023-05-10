import './style/App.css';
import React , {useEffect , useState } from "react"
import { BrowserRouter,  Route , Routes } from 'react-router-dom';
import Upload from "./components/Upload.jsx"
import Library from "./components/Library.jsx"
import Home from './components/Home.jsx';
import axios from 'axios'
function App() {
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
        <nav>
          <ul>
            <li> 𝐉𝐚𝐦𝐒𝐭𝐫𝐞𝐚𝐦 </li>
            <li><a href="/">Home</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/library">Library</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home  data = {data} />}  />
          <Route path="/upload" element={<Upload  data = {data}  />} />
          <Route path="/library" element={<Library data = {data}  />} />
        </Routes>
      </div>
    </BrowserRouter>
 
  );
}


export default App;


