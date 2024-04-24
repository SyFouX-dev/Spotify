import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Accueil from "./components/Accueil/Accueil";
import Albums from "./components/Albums/Albums";
import Genres from "./components/Genres/Genres";
import Artiste from "./components/Artiste/Artiste";
import Recherche from "./components/Recherche/Recherche";
import Albumsdetail from "./components/Albums/Albumsdetail";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accueil' element={<Accueil />} /> 
        <Route path='/albumsdetail/:id' element={<Albumsdetail />} /> 
        <Route path='/albums' element={<Albums />} /> 
        <Route path='/genres' element={<Genres />} /> 
        <Route path='/artiste' element={<Artiste />} /> 
        <Route path='/recherche' element={<Recherche />} /> 
      </Routes>
    </div>
  );
}

export default App;