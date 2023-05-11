import React, { useState } from 'react';
import axios from 'axios';
import "../style/Upload.css"
import disq from "../assets/music1.gif"
const Upload = () => {

  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [audioUrl, setAudioUrl] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  
  const uploadFile = async (file) => {
    const form = new FormData()
    form.append('file', file)
    form.append('upload_preset', 'firestorm')
    const response = await axios.post('https://api.cloudinary.com/v1_1/dsjxj9otw/upload', form)
    return response.data.secure_url
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const audio = await uploadFile(audioUrl)
    const image = await uploadFile(imageUrl)
    const newSong = {
      title: title,
      artist: artist,
      audio: audio,
      image: image,
      created_at: createdAt
    };
    axios.post("http://localhost:4000/post", newSong)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      })
  }
  const handleAudioChange = e => {
    setAudioUrl(e.target.files[0])
  }
  
  const handleImageChange = e => {
    setImageUrl(e.target.files[0])
  }
  


  return (
    <div   className='upload' >

   <div className="form-container"   >
   <form >
  <label htmlFor="title">Title:</label>
   <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}  />

   <label htmlFor="artist">Artist:</label>
  <input type="text" id="artist" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)}  />

  <label htmlFor="audio">Audio:</label>
    <input type="file" id="audio" name="audio" onChange={handleAudioChange} />
     <br/>
     <label htmlFor="createdAt">Created At:</label>
     <input type="datetime-local" id="createdAt" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
            <br/> 
  <label htmlFor="image">Image:</label>
   <input type="file" id="image" name="image"  onChange={handleImageChange} />

       
  <button type="submit" onClick={handleSubmit}  >Submit</button>
   
     </form>
        </div>
    
    
    </div>
  );
};

export default Upload;
