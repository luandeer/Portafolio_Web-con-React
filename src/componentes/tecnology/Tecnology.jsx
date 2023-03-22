import React from 'react'
import "./tecnology.css"
import ITEM from './ItemSkill'
import { GiSkills } from 'react-icons/gi'
import { AiFillDatabase } from 'react-icons/ai'
import { RiPagesFill } from 'react-icons/ri'
const Tecnology = () => {
  return (
    <section id='tecnology'>
      <h5>Qué habilidades tengo</h5>
      <h2>My skills</h2>
      <div className="container technology-container">
        <div className="technology-frontend">
          <RiPagesFill className="skill-icon" />
          <h3>Frontend</h3>
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
          <AiFillDatabase className="skill-icon" />
          <h3>Backend</h3>
          <div className="technology-content">
            <ITEM nombre='Node JS' nivel='básico' />
            <ITEM nombre='Next js' nivel='básico' />
          </div>
        </div>
        {/*final del backend */}
        <div className="technology-otros">
          <GiSkills className="skill-icon" />
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