import background from '../assets/background.jpg';
import React , {useEffect , useState } from "react"
import '../style/Home.css'
function App(props) {
  console.log(props.username);
  
  return (
    <div className='biggie'>
        <nav>
          <ul>
            <li> 𝐉𝐚𝐦𝐒𝐭𝐫𝐞𝐚𝐦 </li>
            <li><a href="/home">Home</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/library">Library</a></li>
            <li>Welcome {props.username}</li>
          </ul>
        </nav>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
      }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop : '50px' }}>
        <input type="text" placeholder="Search for artists , bands , tracks ... " style={{ marginRight: '10px'  }} />
        <button>Search</button>   
      </div>
  <h1 >Hear what’s trending in the JamStream community</h1>

  <div style={{ width: '180px', height: '180px',marginLeft: '20px',  backgroundColor: 'black' , marginTop : "30px" }}>
    
    
    


  </div>

   






    </div>
  );
}

export default App;
