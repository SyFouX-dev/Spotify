import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Albumsdetail() {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/albums/${id}`, {
      method: 'GET',
      headers: {
        'accept': '*/*',
      },
    })
    .then(response => response.json())
    .then(data => setAlbums(data))
    // console.log(albums);
    .catch(error => console.error('Error fetching albums:', error));
  }, [id]); 

  return (
    <div className='album'>
      <h2>Albums</h2>
      <div className="music-album">
        {albums.map(album => (
          <div className="track-info" key={album.id}>
        <p>{album.description}</p>
            <img src={album.cover_small} alt="artist" />
            <h3 className="track-title" >{album.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
