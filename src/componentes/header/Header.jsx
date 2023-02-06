import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/img/me.png"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello i'm</h5>
        <h1>Luander</h1>
        <h5 className="text-light"> Jr Frontend Developer | Software Engineer Student at UNMSM </h5>
        {/* Se hace el llamado del componente CTA*/}
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="foto del profesional" />
        </div>

        <a href="#contact" className='scroll-down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header