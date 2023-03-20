import React from 'react'
import "./portafolio.css"
import ITEM from './ItemProyecto'
const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio-container">
        <ITEM imagen='portafolio1.jpg' nomFoto='proyecto 1' descripcion='PIPATI es un juego de piedra-papel-tijera con un enfoque de fútbol, este proyecto fue desarrollada con html-css-js.' linkGit='https://github.com/luandeer/JuegoPiedraPapelTijera-html-css-js' linkDemo='https://luandeer.github.io/JuegoPiedraPapelTijera-html-css-js/src/index.html' />
        <ITEM imagen='portafolio2.jpg' nomFoto='proyecto 2' descripcion='Sonqu es una Landing Page con diseño responsive, este proyecto fue desarrollado con html-css-js. Tambien realizamos un diseño UI en Figma antes de inicar el desarrollo.' linkGit='https://github.com/luandeer/Landing-Mobile---Sonqu' linkDemo='https://luandeer.github.io/Landing-Mobile---Sonqu/src/index' />
        <ITEM imagen='portafolio3.jpg' nomFoto='proyecto 3' descripcion='Esta web es una landing desarrollado con Node JS. Tambien consumimos una api para listar videos de un canal de youtube. ' linkGit='https://github.com/luandeer/proyecto-landing' linkDemo='https://luandeer.github.io/proyecto-landing/src/index.html' />
        <ITEM imagen='portafolio4.jpg' nomFoto='proyecto 4' descripcion='Esta web es un portafolio desarrollado con React de forma responsive.' linkGit='https://github.com/luandeer/Portafolio_Web-con-React' linkDemo='https://luandeer.github.io/Portafolio_Web-con-React/' />

      </div>
    </section>
  )
}

export default Portafolio