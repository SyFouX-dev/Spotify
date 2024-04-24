import './Artiste.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Artiste() {
  const [artiste, setArtiste] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/artists', {
      method: 'GET',
      headers: {
        'accept': '*/*',
      },
    })
    .then(response => response.json())
    .then(data => setArtiste(data))
    .catch(error => console.error('Error fetching Artiste:', error));
  }, []); 

  return (
    <div className='artist'>
      <h2>Artiste</h2>
      <div className="artist">
        {artiste.map(artist => (
          <div className="info" key={artist.id}>
            <img src={artist.photo} alt="artist" />
            <h3 className="title" >{artist.name}</h3>
            <p>{artist.description}</p>
            <p>{artist.bio}</p>
            <Link style={{cursor: 'pointer'}} to={`/artistdetails/${artist.id}`}>voir les détails de l'artist</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artiste;




