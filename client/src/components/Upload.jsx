import React, { useState } from 'react';
import axios from 'axios';
import "../style/Upload.css"
const Upload = () => {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

  const uploadImage = async () => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'malaksb');

    await axios.post('https://api.cloudinary.com/v1_1/dt0e3u8hu/upload', form)
      .then(result => setUrl(result.data.secure_url));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="upload-container">
      {showForm && (
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h2>Upload Song</h2>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="artist">Artist:</label>
              <input type="text" id="artist" name="artist" />
            </div>
            <div className="form-group">
              <label htmlFor="audio">Audio:</label>
              <input type="file" id="audio" name="audio" />
            </div>
            <div className="form-group">
              <label htmlFor="createdAt">Created At:</label>
              <input type="datetime-local" id="createdAt" />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" name="image" onChange={(e) => setFile(e.target.files[0])} />
              <button onClick={uploadImage}>Upload</button>
              <img src={url} alt="Uploaded Image" />
            </div>
            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      <button onClick={() => setShowForm(true)}>Upload</button>
    </div>
  );
};

export default Upload;
