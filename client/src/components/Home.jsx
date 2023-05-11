import background from '../assets/background.jpg';
import React , {useEffect , useState } from "react"
import background3 from '../assets/rr.jpg';
import background4 from '../assets/pinkfloyd.jpg';
import wee from "../assets/wee.jpg"
import background6 from '../assets/ff.jpg';
import '../style/Home.css';

function App(props) {
  const [imageI, setimageI] = useState(0);
  const images = [background3, background4, background6];

  useEffect(() => {
    const interval = setInterval(() => {
      let next = imageI + 1;
      if (next >= images.length) {
        next = 0;
      }
      setimageI(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageI, images.length]);

  return (
    <div className='biggie'>
      <div style={{
          backgroundImage: `url(${images[imageI]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',

        }}>
       



     




        </div>
      <h1>Hear what’s trending in the JamStream community</h1>



      <div className='song-container'>
  <div className='song-info'>
    <img src={wee}/>
    <h2></h2>
    <p></p>
  </div>
  <div className='song-info'>
    <img src="" />
    <h2></h2>
    <p></p>
  </div>
  <div className='song-info'>
    <img src="" />
    <h2></h2>
    <p></p>
  </div>
  <div className='song-info'>
    <img src="" />
    <h2></h2>
    <p></p>
  </div>
</div>
      
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
