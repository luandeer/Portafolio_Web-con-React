import React from 'react'
import "./tecnology.css"
import ITEM from './ItemSkill'

const Tecnology = () => {
  return (
    <section id='tecnology'>
      <h5>Qué habilidades tengo</h5>
      <h2>My skills</h2>
      <div className="container technology-container">
        <div className="technology-frontend">
          <h3>Frontend Development</h3>
          <div className="technology-content">
            <ITEM nombre='CSS3' nivel='intermedio' />
            <ITEM nombre='HTML5' nivel='avanzado' />
            <ITEM nombre='JavaScript' nivel='básico' />
            <ITEM nombre='React' nivel='intermedio' />
            <ITEM nombre='Diseño UX/UI' nivel='básico' />
          </div>
        </div>
        {/*final del frontend */}
        <div className="technology-backend">
          <h3>Backend Development</h3>
          <div className="technology-content">
            <ITEM nombre='Node JS' nivel='básico' />
            <ITEM nombre='Next js' nivel='básico' />
          </div>
        </div>
        {/*final del backend */}
        <div className="technology-otros">
          <h3>Otros Skills</h3>
          <div className="technology-content">
            <ITEM nombre='Adobe Illustrator' nivel='intermedio' />
            <ITEM nombre='Adobe Premier' nivel='intermedio' />
            <ITEM nombre='Adobe Animate' nivel='intermedio' />
            <ITEM nombre='Adobe Photoshop' nivel='intermedio' />
            <ITEM nombre='Figma' nivel='intermedio' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tecnology