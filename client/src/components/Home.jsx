import React from 'react';
import background from '../assets/background.jpg';

function App({data}) {
  console.log(data);
  return (
    <div className='biggie'>
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
