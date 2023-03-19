import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header-socials">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/telmo-alexander-perez-reginaldo-8a449b223/"  ><BsLinkedin /></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/luandeer"  ><FaGithub /></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@luandeer"  ><BsYoutube /></a>
        </div>
    )
}

export default HeaderSocial