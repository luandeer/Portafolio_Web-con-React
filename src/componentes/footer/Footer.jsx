import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import Logo from '../../assets/img/LogoTelmo-v2.png'
const Footer = () => {
  return (
    <footer>
      <a href="#" > <img src={Logo} alt="mi logo" /></a>
      <h1 className='footer-nombre'>Telmo Perez</h1>
      <div className="footer-social">
        <a href="https:/facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https:/instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/telmoalexander/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/luandeer" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Telmo Perez. Todos los derechos son reservados</small>
      </div>
    </footer>
  )
}

export default Footer