import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="bienvenue">BIENVENUE SUR SpotyFax</div>
      <div className="names">DEV BY KARIM, ILYANA, YOUSRA, SYPHAX</div>
      
      <Link to="/accueil" className="link">Accueil</Link>
      <Link to="/albums" className="link">Albums</Link>
      <Link to="/genres" className="link">Genres</Link>
      <Link to="/artiste" className="link">Artiste</Link>
      <Link to="/recherche" className="link">Recherche</Link>
    </div>
  );
}
