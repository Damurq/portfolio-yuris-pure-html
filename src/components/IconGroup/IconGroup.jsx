import React from 'react'
import { BsInstagram, BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

import "./IconGroup.css";

const IconGroup = ({ section }) => {

  return (
    <React.Fragment>
      <a className={`instagram social ${section}__social-icon ${section}__social`} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <BsInstagram className={`uil`} />
      </a>
      <a className={`linkedin social ${section}__social-icon ${section}__social`} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className={`uil`} />
      </a>
      <a className={`github social ${section}__social-icon ${section}__social`} href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <BsGithub className={`uil`} />
      </a>
    </React.Fragment>
  )
}

export default IconGroup