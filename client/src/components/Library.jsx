
import axios from "axios";
import "../style/Library.css";
import { useState } from "react";
import AudioBar from "./Audiobar.jsx";
import Home from "./Home.jsx"
const Library = ({data , setData  }) => {
  const [showAudioBar, setShowAudioBar] = useState(false);
  const [audioBarData, setAudioBarData] = useState(null);
  const [search , setSearch] = useState("")
  const handleDelete = (songId) => {
    axios.delete(`http://localhost:4000/delete/${songId}`)
      .then(() => {
        const updatedSongs= data.filter(item=> item.idsongs !== songId)
        setData(updatedSongs)
      })
      .catch(error => console.error(error))
  };  

  const handlePlay = (songId) => {
    const song = data.find(item => item.idsongs === songId);
    setAudioBarData(song);
    setShowAudioBar(true);
  };
  
  return (




    <div  className='bigg'>
 

{/* <div className="search-container" >
<input type="text" placeholder="Search for Tracks"  value={search} onChange={(e) => setSearch(e.target.value)} />

</div> */}

      {data.filter((song) => song.title.toLowerCase().includes(search.toLowerCase()))
      .map((e) => {
        return (
          
          <div className="library-item">
           
            <img src={e.image} alt="album cover" />
             <p> {e.artist}</p>
            <p> {e.title}</p>
            <button className="play"  onClick={() => handlePlay(e.idsongs)}>▶</button>
            <button className="delete-btn" onClick={() => handleDelete(e.idsongs)}>Delete</button>
             
          </div>
         
        );
      })}
      {showAudioBar && (
        <div className="audio-bar-container">
          <AudioBar song={audioBarData} onClose={() => setShowAudioBar(false)} />
        </div>
      )}


      
    </div>
 
  );
};

export default Library;