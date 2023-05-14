import React, { useState } from 'react';
import axios from 'axios';
import "../style/Upload.css"
import one from '../assets/music1.gif'
const Upload = ({data,setData}) => {

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showForm, setShowForm] = useState(false);
 

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
      .then((res) => {
        console.log(res);
        setTitle("");
        setArtist("");
        setAudioUrl("");
        setCreatedAt("");
        setImageUrl("");
        setShowForm(false)
        setData([newSong, ...data]);
        alert("song added successfully !")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
<div className='upload' style={{
  backgroundImage: `url(${one})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '120vh',

}} >
 
      <button onClick={() => setShowForm(prevState => !prevState)  } className='add'  
  style={{ fontSize: '1.2rem', padding: '20px 40px'}}>Add Song</button>
   
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
     <label htmlFor="title">Title:</label>
 <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}  />

      <label htmlFor="artist">Artist:</label>
 <input type="text" id="artist" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)}  />

            <label htmlFor="audio">Audio:</label>
  <input type="file" id="audio" name="audio" onChange={(e)=> {setAudioUrl(e.target.files[0]) }} />
            <br/>
            <label htmlFor="createdAt">Created At:</label>
            <input type="datetime-local" id="createdAt" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
            <br/> 

 <label htmlFor="image">Image:</label> <input type="file" id="image" name="image"  onChange={(e)=> {setImageUrl(e.target.files[0])}} />

            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            
          </form>
        </div>
      )}
    </div>
  )
}

export default Upload;
