import './Genres.css';
import React, { useState, useEffect } from "react";

function Gender() {
  const [genres, setGenre] = useState([]);


     useEffect(() => {
        fetch('http://localhost:8000/genres', {
          method: 'GET',
          headers: {
            'accept': '*/*',
          },
        })
    .then(response => response.json())
    .then(data => setGenre(data))
    .catch(error => console.error('Error fetching gender:', error));
  }, []);  

  return (
    <div className='album'>
      <center>
        <h2>Les genres : </h2>
        <div className="music-album">
        {genres.map(genre => (
          <div key={genre.id}>  
            <h1 >{genre.name}</h1>
          </div>
        ))}
        </div>
      </center>
    </div>
  );
}

export default Gender;