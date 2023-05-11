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
     
  <h1 >Hear what’s trending in the JamStream community</h1>

  <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>Developed by Malak Sboui, Imen Mekni & Arbi Moussi</p>
        </div>
        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>Email: firestormers@gmail.com</p>
          <p>Phone: (+216) 87888888</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 JamStream. All rights reserved.</p>
      </div>
    </footer>

   






    </div>
  );
}

export default App;
