import React from 'react';
import img1 from './flex/1.png'
import ReactPlayer from 'react-player';
import img2 from './flex/4.png'

import img5 from './bootstrap/b1.png'
import img6 from './bootstrap/b2.png'

import img8 from './jquery/j1.png'
import img9 from './jquery/j2.png'
import './App.css'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio de Yagba Kipré
        </h1>
      </header>
      <main>
        <h2>À propos de moi</h2>
        <p>Bienvenue sur mon portfolio ! Je suis un développeur passionné par les jeux vidéos,les mangas et les nouvelles technologies.Je suis travailleur,determiné assidu et à l'écoute. </p>

        <h2> Mes différents projets</h2>
  <ul>
    <li>
      <h1>
      Projet 1 : Le projet Flexbox
      </h1>
    </li>
    <h2>Descrpition</h2>
    <p>Il s'agissait pour nous de reproduire un site web entièrement avec la méthode Flexbox</p>
    <p>voici quelque visuel de mon site</p>
    <img src={img1} height={500}/>
    <img src={img2} height={500}/>
    
    <li>
      <h1>
      Projet 2 : Le projet Bootstrap
      </h1>

    </li>
    <h2>Descrpition</h2>
    <p>Il s'agissait pour nous de reproduire un site web entièrement grâce au template utilisable sur boostrap</p>
    <p>voici quelque visuel de mon site</p>
    <img src={img5} height={500}/>
    <img src={img6} height={500}/>
  
    <li>
      <h1>
      Projet 3 : Le projet Jquery
      </h1>
      <h2>Descrpition</h2>
    <p>Il s'agissait pour nous de reproduire un site web entièrement et d'y ajouter si possible des animations à l'aide de Jquery</p>
    <p>voici quelque visuel de mon site</p>
    <img src={img8} height={500}/>
    <img src={img9} height={500}/>
    </li>
    </ul>

        
       
      </main>
      <footer>
      <p>Vous pouvez me contacter via mon mail : <a href="yagkip5@gmail.com">yagkip5@gmail.com</a> </p>
        <p>Téléphone : 01-42-61-58-88</p>
        <p>&copy; 2023 Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
