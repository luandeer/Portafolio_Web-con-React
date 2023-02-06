import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header-socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://linkedin.com" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank"><BsYoutube /></a>
        </div>
    )
}

export default HeaderSocial