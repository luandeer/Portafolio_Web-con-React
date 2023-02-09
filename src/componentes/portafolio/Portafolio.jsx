import React from 'react'
import "./portafolio.css"
import ITEM from './itemProyecto'
const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio-container">
        <ITEM imagen='portafolio1.jpg' nomFoto='proyecto 1' descripcion='PIPATI es un juego de piedra-papel-tijera con un enfoque de fútbol, este proyecto fue desarrollada con html-css-js.' linkGit='https://github.com/talexanderp/JuegoPiedraPapelTijera-html-css-js' linkDemo='https://talexanderp.github.io/JuegoPiedraPapelTijera-html-css-js/src/index' />
        <ITEM imagen='portafolio2.jpg' nomFoto='proyecto 2' descripcion='Sonqu es una Landing Page con diseño responsive, este proyecto fue desarrollado con html-css-js. Tambien realizamos un diseño UI en Figma antes de inicar el desarrollo.' linkGit='https://github.com/talexanderp/Landing-Mobile---Sonqu' linkDemo='https://talexanderp.github.io/Landing-Mobile---Sonqu/src/index' />
        <ITEM imagen='portfolio3.jpg' nomFoto='proyecto 3' descripcion='Esta web es una landing desarrollado con Node JS. Tambien consumimos una api para listar videos de un canal de youtube. ' linkGit='https://github.com/talexanderp/proyecto-landing' linkDemo='https://talexanderp.github.io/proyecto-landing/src/index' />

      </div>
    </section>
  )
}

export default Portafolio