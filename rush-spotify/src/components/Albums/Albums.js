import './Albums.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/albums', {
      method: 'GET',
      headers: {
        'accept': '*/*',
      },
    })
    .then(response => response.json())
    .then(data => setAlbums(data))
    .catch(error => console.error('Error fetching albums:', error));
  }, []); 

  return (
    <div className='album'>
      <h2>ALBUMS</h2>
      <div className="music-album">
        {albums.map(album => (
          <div className="info" key={album.id}>
            <img src={album.cover_small} alt="artist" />
            <h3 className="title" >{album.name}</h3>
            <Link style={{cursor: 'pointer'}} to={`/albumsdetails/${album.id}`}>voir les détails de l'album</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;




