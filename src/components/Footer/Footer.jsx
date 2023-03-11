import React from 'react'
import { Link } from "react-router-dom"
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import IconGroup from '../IconGroup/IconGroup'
// Data
import dbEnglish from "../../data/dbEnglish.json"

import './Footer.css'

const Footer = () => {
    const navbar = dbEnglish.components.Navbar
    const footer = dbEnglish.components.Footer

    return (
        <footer className="footer">
            <div className="footer__bg">

                <div className="footer__container container grid">
                    <ul className="footer__links">
                        {navbar.map((section, index) => {
                            return section.type === "Link"
                                ? (<li key={"nav-li-" + index}><Link className="footer__link" to={section.href}>
                                    {section.name}
                                </Link></li>)
                                : (<li key={"nav-li-" + index}><a className="footer__link" href={section.href}>
                                    {section.name}
                                </a></li>)
                        })}
                    </ul>
                    <div className='footer__header'>
                        <HeaderComponent section="footer" data={footer.HeaderComponent} />
                    </div>
                    <div className="footer__socials">
                        <IconGroup section="footer" />
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer