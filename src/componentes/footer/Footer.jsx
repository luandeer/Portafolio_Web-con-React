import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>Telmo Perez</a>
      <ul className='permalinks'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#about" >Acerca de mi</a></li>
          <li><a href="#tecnology" >Skills</a></li>
          <li><a href="#portafolio" >Portafolio</a></li>
          <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer-social">
        <a href="https:/facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https:/instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/telmoalexander/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/luandeer" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Luander. Todos los derechos son reservados</small>
      </div>
    </footer>
  )
}

export default Footer