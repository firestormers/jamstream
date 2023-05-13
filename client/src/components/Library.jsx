import axios from "axios";
import "../style/Library.css";
import { useState } from "react";
import AudioBar from "./Audiobar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Library = ({ data, setData }) => {
  const [showAudioBar, setShowAudioBar] = useState(false);
  const [audioBarData, setAudioBarData] = useState(null);
  const [liked, setLiked] = useState({})
  const [search, setSearch] = useState("");

  const handleDelete = (songId) => {
    axios
      .delete(`http://localhost:4000/delete/${songId}`)
      .then(() => {
        const updatedSongs = data.filter((item) => item.idsongs !== songId);
        setData(updatedSongs);
      })
      .catch((error) => console.error(error));
  };

  const handlePlay = (songId) => {
    const song = data.find((item) => item.idsongs === songId);
    setAudioBarData(song);
    setShowAudioBar(true);
  };
  const handleLike = (songId) => {
    axios
      .post(`http://localhost:4000/like/${songId}`)
      .then((response) => {
        console.log(response.data.liked)
        setLiked(prevLiked => {
          const updatedLiked = {...prevLiked}
          updatedLiked[songId] = response.data.liked
          return updatedLiked
        });
      })
      .catch((error) => console.error(error))
  };
  
  return (
    <>
         <div className="search-container"  >
        <input
         className="input"
          type="text"
          placeholder="Search for Tracks"
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="bigg">
      
      
  
        
        {data
          .filter((song) =>
            song.title.toLowerCase().includes(search.toLowerCase()) 
       
          )
          .map((e) => {
            const isLiked = liked[e.idsongs];
            return (
              <div className="library-item" key={e.idsongs}>
                <img src={e.image} alt="album cover" />
                <p>{e.artist}</p>
                <p>{e.title}</p>
                
                <button className="play" onClick={() => handlePlay(e.idsongs)}>
                  ▶
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(e.idsongs)}
                >
                  ✖
                </button>
                <button onClick={() => handleLike(e.idsongs)} className="like">
                  {isLiked ? (
                    <FontAwesomeIcon icon="heart" />
                  ) : (
                    <FontAwesomeIcon icon={['far', 'heart']} />
                  )}
                </button>
              </div>
            );
          })}
        {showAudioBar && (
          <div className="audio-bar-container">
            <AudioBar song={audioBarData} onClose={() => setShowAudioBar(false)} />
          </div>
        )}
      </div>
    </>
  );
};
export default Library;