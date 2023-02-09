import React from 'react'
import "./services.css"
import ITEM from './itemServicio'
const Services = () => {
  return (
    <section id='services'>
      <h5>Qué ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service-list'>
            <ITEM servicio='Test con Usuarios' />
            <ITEM servicio='Productos Digitales intuitivos' />
          </ul>
        </article>
        {/*end of ui/ux*/}
        <article className="service">
          <div className="service-head">
            <h3>Web Develepment</h3>
          </div>
          <ul className='service-list'>
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
          </ul>
        </article>
        {/*end web development*/}
        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service-list'>
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
            <ITEM servicio='asdsad sadasd sadsada' />
          </ul>
        </article>
        {/*end of content creation*/}
      </div>
    </section>
  )
}

export default Services