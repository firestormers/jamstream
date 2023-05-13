
import React , {useEffect , useState } from "react"
import { Link } from 'react-router-dom';
import background3 from '../assets/nirv.jpg';
import background4 from '../assets/pinkfloyd.jpg';
import wee from "../assets/wee.jpg"
import gasoline from "../assets/gasoline.jpg"
import venom  from "../assets/venom.jpg"
import pianoJoel from "../assets/pianoJoel.jpg"
import baby from "../assets/baby.jpg"
import stromae from "../assets/stromae.jpg"
import bishop from "../assets/Bishop.jpg"
import alan from "../assets/alan.jpg"
import '../style/Home.css';
import background2 from '../assets/ddd.png';
import background6 from '../assets/fff.jpg';
import background7 from '../assets/c.jpg';
import Library from "./Library";
// import img from "../assets/oo.jpg"

function App(props) {
  const [imageI, setimageI] = useState(0);
  const images = [background2,background3, background4, background6,background7];


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
          height: '75vh',

        }}>
      </div>

      <h1 className="trending-title">Discover what's Trending</h1>

      <div class='song-container'>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={wee} alt='The Weeknd'/>
    </Link >
    <h2>The Weeknd</h2>
    <h3>Blinding Lights</h3>
    <p>Album: After Hours</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={gasoline} alt='Halsey'/>
    </Link>
    <h2>Halsey</h2>
    <h3>Gasoline</h3>
    <p>Album: Badlands</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={venom} alt='Eminem'/>
    </Link>
    <h2>Eminem</h2>
    <h3>Venom</h3>
    <p>Album: Kamikaze</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={pianoJoel} alt='Billy Joel'/>
    </Link>
    <h2>Billy Joel</h2>
    <h3>Piano Man</h3>
    <p>Album: Piano Man</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={baby} alt='Lana Del Ray'/>
    </Link>
    <h2>Lana Del Ray</h2>
    <h3>Video Games</h3>
    <p>Album: Born to Die</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={bishop} alt='Bishop Briggs'/>
    </Link>
    <h2>Bishop Briggs</h2>
    <h3>River</h3>
    <p>Album: Church of Scars</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={alan} alt='Alan Walker'/>
    </Link>
    <h2>Alan Walker</h2>
    <h3>Faded</h3>
    <p>Album: Different World</p>
  </div>
  <div class='song-info'>
  <Link  to="/Library">
    <img src={stromae} alt='Stromae'/>
    </Link>
    <h2>Stromae</h2>
    <h3>Papaoutai</h3>
    <p>Album: Racine Carrée</p>
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
