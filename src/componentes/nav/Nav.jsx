import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {SiSkillshare} from 'react-icons/si'
//import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {RiPagesLine} from 'react-icons/ri'
import {useState} from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#tecnology"  onClick={() => setActiveNav('#tecnology')} className={activeNav === '#tecnology' ? 'active' : ''}><SiSkillshare /></a>
      {/* <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a> */}
      <a href="#portafolio"  onClick={() => setActiveNav('#portafolio')} className={activeNav === '#portafolio' ? 'active' : ''}><RiPagesLine /></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav