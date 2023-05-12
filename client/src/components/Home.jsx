
import background from '../assets/background.jpg';
import React , {useEffect , useState } from "react"
import background3 from '../assets/rr.jpg';
import background4 from '../assets/pinkfloyd.jpg';
import wee from "../assets/wee.jpg"
import gasoline from "../assets/gasoline.jpg"
import venom  from "../assets/venom.jpg"
import pianoJoel from "../assets/pianoJoel.jpg"
import baby from "../assets/baby.jpg"
import stromae from "../assets/stromae.jpg"
import bishop from "../assets/Bishop.jpg"
import alan from "../assets/alan.jpg"
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
          height: '80vh',

        }}>
      </div>
      <h1>Hear what’s trending in the JamStream community</h1>



      <div className='song-container'>
  <div className='song-info'>
    <img src={wee}/>
    <h2>The weeknd</h2>
    <h3></h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={gasoline}/>
    <h2>Halsey</h2>
    <h3> </h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={venom} />
    <h2>Eminem</h2>
    <h3></h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={pianoJoel} />
    <h2>Billy Joel</h2>
    <h3></h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={baby}/>
    <h2>Lana Del Ray</h2>
    <h3>  </h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={bishop}/>
    <h2>bishop briggs</h2>
    <h3> </h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={alan}/>
    <h2>Alan Walker</h2>
    <h3> </h3>
    <p></p>
  </div>
  <div className='song-info'>
    <img src={stromae}/>
    <h2>Stromae</h2>
    <h3>  </h3>
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
